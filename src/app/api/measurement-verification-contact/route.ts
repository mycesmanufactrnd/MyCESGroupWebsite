import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, phone, message } = await req.json();

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // ✅ Save to database
    const record = await prisma.measurementVerificationInquiry.create({
      data: { firstName, lastName, email, phone, message },
    });

    // ✅ Setup email
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

    // ✅ Send email to HR and M&V PIC
    const recipientEmails = [process.env.HR_EMAIL, process.env.MV_PIC_EMAIL].filter(
      (email): email is string => email !== undefined
    );

    if (recipientEmails.length === 0) {
      throw new Error("Recipient email addresses are not configured.");
    }

    await transporter.sendMail({
      from: `"MyCES M&V Contact" <${process.env.EMAIL_USER}>`,
      to: recipientEmails,
      subject: `New Measurement & Verification Inquiry from ${firstName} ${lastName}`,
      html: `
        <h2>New M&V Inquiry</h2>
        <p><b>Name:</b> ${firstName} ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone || "-"}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    });

    return NextResponse.json({
      message: `Thank you, ${firstName}! Your M&V inquiry has been submitted successfully.`,
      record,
    });

  } catch (error) {
    const err = error as Error;
    console.error("M&V Contact API Error:", err);
    return NextResponse.json(
      { message: err.message || "Failed to submit inquiry." },
      { status: 500 }
    );
  }
}
