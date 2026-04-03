import { prisma } from "@/lib/prisma";
import { supabase } from "@/lib/supabaseClient";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    /* =========================
       1. EMAIL SETUP
    ========================== */
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });


    /* =========================
       2. FILE HANDLING
    ========================== */
    const attachments: { filename: string; content: Buffer }[] = [];

    const uploadFile = async (file: {
      name: string;
      base64?: string;
    }) => {
      if (!file || !file.base64) return "";

      const buffer = Buffer.from(file.base64, "base64");

      // Add attachment for email
      attachments.push({
        filename: file.name,
        content: buffer,
      });

      // Upload to Supabase
      const uniqueName = `${uuidv4()}_${file.name}`;
      const { error } = await supabase.storage
        .from("job-applications")
        .upload(`files/${uniqueName}`, buffer, {
          upsert: true,
        });

      if (error) throw error;

      const { data } = supabase.storage
        .from("job-applications")
        .getPublicUrl(`files/${uniqueName}`);

      return data.publicUrl;
    };

    /* =========================
       3. PROCESS FILES
    ========================== */
    const cvUrl = body.cvFile ? await uploadFile(body.cvFile) : "";
    const transcriptUrl = body.transcriptFile
      ? await uploadFile(body.transcriptFile)
      : "";
    const otherDocsUrl = body.otherFile
      ? await uploadFile(body.otherFile)
      : "";

    /* =========================
       4. SAVE TO DATABASE
    ========================== */
    const record = await prisma.jobApplication.create({
      data: {
        vacancy: body.vacancy,
        name: body.name,
        email: body.email,
        phone: body.phone,
        description: body.description,
        cvUrl,
        transcriptUrl,
        otherDocsUrl,
      },
    });

    /* =========================
       5. SEND EMAIL
    ========================== */
    try {
      await transporter.sendMail({
        from: `"MyCES Careers" <${process.env.EMAIL_USER}>`,
        to: process.env.HR_EMAIL,
        subject: `New CV Submission – ${body.vacancy}`,
        html: `
          <h2>New Job Application</h2>
          <p><b>Vacancy:</b> ${body.vacancy}</p>
          <p><b>Name:</b> ${body.name}</p>
          <p><b>Email:</b> ${body.email}</p>
          <p><b>Phone:</b> ${body.phone}</p>
          <p><b>About:</b><br/>${body.description || "-"}</p>
          <hr/>
          <p>Files are attached to this email.</p>
        `,
        attachments,
      });
    } catch (error) {
      console.error("EMAIL FAILED:", error);
    }

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
