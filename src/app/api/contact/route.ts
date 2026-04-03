export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    /* =========================
       1. SAVE TO DATABASE
    ========================== */
    console.log("📝 Saving to database...");
    const record = await prisma.contact.create({
      data: {
        firstName,
        lastName,
        email,
        phone: phone || "",
        message,
      },
    });
    console.log("✅ Saved with ID:", record.id);

    /* =========================
       2. EMAIL SETUP
    ========================== */
    // Check if email is configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.warn("⚠️ Email not configured - skipping");
      return NextResponse.json({
        success: true,
        message: "Your message has been submitted (email not configured).",
      });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    /* =========================
       3. SEND EMAIL TO ADMIN
    ========================== */
    console.log("📧 Sending admin email...");
    try {
      await transporter.sendMail({
        from: `"MYCES Website" <${process.env.EMAIL_USER}>`,
        to: process.env.HR_EMAIL || process.env.EMAIL_USER,
        subject: "📩 New Contact Form Submission",
        html: `
          <h2>New Contact Message</h2>
          <p><b>Name:</b> ${firstName} ${lastName}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone || 'Not provided'}</p>
          <p><b>Message:</b></p>
          <p>${message}</p>
        `,
      });
    } catch (error) {
      console.error("EMAIL FAILED:", error);
    }

    /* =========================
       4. AUTO-REPLY TO USER
    ========================== */
    console.log("📧 Sending auto-reply...");
    try {
      await transporter.sendMail({
        from: `"MYCES Team" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Thank you for contacting MYCES",
        html: `
          <p>Dear ${firstName},</p>
          <p>Thank you for reaching out to MYCES. We have received your message and will respond shortly.</p>
          <p><b>Your Message:</b></p>
          <blockquote>${message}</blockquote>
          <p>Regards,<br/>MYCES Team</p>
        `,
      });
    } catch (error) {
      console.error("EMAIL FAILED:", error);
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been submitted, thank you.",
    });
    
  } catch (error: unknown) {
    console.error("❌ CONTACT API ERROR:", {
      message: error instanceof Error ? error.message : String(error),
      code: error instanceof Error ? (error as NodeJS.ErrnoException).code : undefined,
      stack: error instanceof Error ? error.stack : undefined,
    });

    return NextResponse.json(
      {
        success: false,
        error: process.env.NODE_ENV === 'development' ? (error instanceof Error ? error.message : String(error)) : "Failed to submit contact form",
      },
      { status: 500 }
    );
  }
}