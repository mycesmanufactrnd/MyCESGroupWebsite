import { prisma } from "@/lib/prisma";
import { supabase } from "@/lib/supabaseClient";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    // ✅ 1. Get FormData (NOT JSON)
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const internshipType = formData.get("internshipType") as string;

    const file = formData.get("cvFile") as File | null;

    // ===== 2. EMAIL SETUP =====
    const transporter = nodemailer.createTransport({
      host: "mail.mycesgroup.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      logger: true,
      debug: true,
    });

    let cvUrl = "";
 interface Attachment {
  filename: string;
  content: Buffer;
}

const attachments: Attachment[] = [];

    // ===== 3. FILE UPLOAD =====
    if (file) {
      const uniqueName = `${uuidv4()}_${file.name}`;

      const { error } = await supabase.storage
        .from("internship-applications")
        .upload(`files/${uniqueName}`, file, {
          contentType: file.type, 
        });

      if (error) throw error;
      const { data: signedUrlData } = await supabase.storage
        .from("internship-applications")
        .createSignedUrl(`files/${uniqueName}`, 60 * 60); 

      cvUrl = signedUrlData?.signedUrl || "";

      // attach file to email
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name,
        content: buffer,
      });
    }

    // ===== 4. SAVE TO DATABASE =====
    const record = await prisma.internshipApplication.create({
      data: {
        name,
        email,
        phone,
        internshipType: internshipType || "Not specified",
        cvUrl,
      },
    });

    // ===== 5. SEND EMAIL =====
    await transporter.sendMail({
      from: `"MyCES Internship" <${process.env.EMAIL_USER}>`,
      to: process.env.HR_EMAIL,
      subject: `New Internship Application – ${name}`,
      html: `
        <h2>New Internship Application</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Internship Type:</b> ${internshipType}</p>
      `,
      attachments,
    });

    return NextResponse.json({ success: true, record });

  } catch (error: unknown) {
  console.error("ERROR:", error);
  return NextResponse.json(
    { success: false, error: error as string  },
    { status: 500 }
  );
}
}