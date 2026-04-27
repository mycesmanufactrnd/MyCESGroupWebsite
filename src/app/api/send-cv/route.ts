import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import nodemailer from "nodemailer";
import { supabaseServer } from "@/lib/supabaseServer";

export async function POST(req: NextRequest) {
  try {
    // ✅ SAME STYLE AS INTERNSHIP (FormData)
    const formData = await req.formData();

    const name = formData.get("name") as string | null;
    const email = formData.get("email") as string | null;
    const phone = formData.get("phone") as string | null;
    const vacancy = formData.get("vacancy") as string | null;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, error: "Missing required fields: name, email, phone" },
        { status: 400 }
      );
    }

    const file = formData.get("cvFile") as File | null;

    /* =========================
       EMAIL SETUP
    ========================== */
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

    /* =========================
       FILE UPLOAD (SUPABASE)
    ========================== */
    if (file) {
      const fileName = `${uuidv4()}_${file.name}`;
      const buffer = Buffer.from(await file.arrayBuffer());

      // Upload to Supabase
      const { error } = await supabaseServer.storage
        .from("job-applications")
        .upload(`files/${fileName}`, buffer, {
          contentType: file.type,
          upsert: true,
        });

      if (error) throw error;

      // Get public URL
      const { data } = supabaseServer.storage
        .from("job-applications")
        .getPublicUrl(`files/${fileName}`);

      cvUrl = data.publicUrl;

      // Attach file to email
      attachments.push({
        filename: file.name,
        content: buffer,
      });
    }

    /* =========================
       SAVE TO DATABASE
    ========================== */
    const record = await prisma.jobApplication.create({
      data: {
        name,
        email,
        phone,
        vacancy: vacancy || "Not specified",
        cvUrl,
      },
    });

    /* =========================
       SEND EMAIL
    ========================== */
    await transporter.verify();
console.log("SMTP CONNECTION OK");
    console.log("EMAIL USER:", process.env.EMAIL_USER);
console.log("EMAIL PASS EXISTS:", !!process.env.EMAIL_PASS);
    try {
      await transporter.sendMail({
        from: `"MyCES Careers" <${process.env.EMAIL_USER}>`,
        to: process.env.HR_EMAIL,
        subject: `New Job Application – ${name}`,
        html: `
          <h2>New Job Application</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>Vacancy:</b> ${vacancy}</p>

        `,
        attachments,
      });
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
    }

    /* =========================
       RESPONSE
    ========================== */
    return NextResponse.json({
      success: true,
      record,
    });

  } catch (error: unknown) {
    console.error("ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to process request",
      },
      { status: 500 }
    );
  }
}