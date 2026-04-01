import { prisma } from "@/lib/prisma";
import { supabase } from "@/lib/supabaseClient";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // ===== 1. EMAIL SETUP =====
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: { rejectUnauthorized: false },
    });

    // ===== 2. FILE HANDLING =====
    const attachments: Array<{ filename: string; content: Buffer }> = [];

    const uploadFile = async (file: { name: string; base64?: string }) => {
      if (!file || !file.base64) return "";

      const buffer = Buffer.from(file.base64, "base64");

      attachments.push({ filename: file.name, content: buffer });

      const uniqueName = `${uuidv4()}_${file.name}`;
      const { error } = await supabase.storage
        .from("internship-applications")
        .upload(`files/${uniqueName}`, buffer, { upsert: true });

      if (error) throw error;

      const { data } = supabase.storage
        .from("internship-applications")
        .getPublicUrl(`files/${uniqueName}`);

      return data.publicUrl;
    };

    const cvUrl = body.cvFile ? await uploadFile(body.cvFile) : "";
    const transcriptUrl = body.transcriptFile ? await uploadFile(body.transcriptFile) : "";
    const otherDocsUrl = body.otherFile ? await uploadFile(body.otherFile) : "";

    // ===== 3. SAVE TO DATABASE =====
    const record = await prisma.internshipApplication.create({
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone,
        university: body.university,
        course: body.course,
        duration: body.duration,
        internshipType: body.internshipType || "Not specified", // include type
        description: body.description,
        cvUrl,
        transcriptUrl,
        otherDocsUrl,
      },
    });

    // ===== 4. SEND EMAIL =====
    await transporter.sendMail({
      from: `"MyCES Internship" <${process.env.EMAIL_USER}>`,
      to: process.env.HR_EMAIL,
      subject: `New Internship CV – ${body.name}`,
      html: `
        <h2>New Internship Application</h2>
        <p><b>Name:</b> ${body.name}</p>
        <p><b>Email:</b> ${body.email}</p>
        <p><b>Phone:</b> ${body.phone}</p>
        <p><b>University:</b> ${body.university}</p>
        <p><b>Course:</b> ${body.course}</p>
        <p><b>Internship Type:</b> ${body.internshipType || "Not specified"}</p>
        <p><b>Duration:</b> ${body.duration}</p>
        <p><b>About:</b><br/>${body.description || "-"}</p>
        <hr/>
        <p>All files are attached to this email.</p>
      `,
      attachments,
    });

    return NextResponse.json({ success: true, record });
  } catch (error: unknown) {
    console.error(error);
    const errorMessage = error instanceof Error ? error.message : "Failed to save.";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
