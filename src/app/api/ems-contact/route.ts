import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, phone, message } = await req.json();

    // Basic validation
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { message: "Please fill all required fields." },
        { status: 400 }
      );
    }

    // 1️⃣ Save to database
    const record = await prisma.eMSInquiry.create({
      data: { firstName, lastName, email, phone, message },
    });

    // 2️⃣ Send email to HR + EMS PIC
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

    await transporter.sendMail({
      from: `"MyCES EMS Inquiry" <${process.env.EMAIL_USER}>`,
      to: [process.env.HR_EMAIL || "", process.env.EMS_PIC_EMAIL || ""].filter(Boolean),
      subject: `New EMS Inquiry from ${firstName} ${lastName}`,
      html: `
        <h2>New EMS Inquiry Submitted</h2>
        <p><b>Name:</b> ${firstName} ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone || "-"}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    });

    return NextResponse.json({
      message: `Thank you, ${firstName}! Your inquiry has been submitted successfully.`,
      record,
    });
  } catch (error) {
    console.error("EMS API Error:", error);
    return NextResponse.json(
      { message: (error as Error).message || "Failed to submit inquiry." },
      { status: 500 }
    );
  }
}
