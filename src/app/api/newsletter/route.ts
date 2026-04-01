import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    /* =========================
       1. SAVE TO DATABASE
    ========================== */
    await prisma.newsletter.create({
      data: { email },
    });

    /* =========================
       2. EMAIL SETUP
    ========================== */
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    /* =========================
       3. EMAIL TO ADMIN
    ========================== */
    await transporter.sendMail({
      from: `"MYCES Newsletter" <${process.env.EMAIL_USER}>`,
      to: process.env.HR_EMAIL,
      subject: "New Newsletter Subscription",
      html: `
        <h2>New Newsletter Subscriber</h2>
        <p><b>Email:</b> ${email}</p>
      `,
    });

    /* =========================
       4. CONFIRMATION TO USER
    ========================== */
    await transporter.sendMail({
      from: `"MYCES Academy" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Subscription Confirmed 🎉",
      html: `
        <h2>Thank You for Subscribing!</h2>
        <p>You are now subscribed to the MYCES newsletter.</p>
        <p>We’ll keep you updated with the latest news & resources.</p>
        <br/>
        <p>Warm regards,<br/>MYCES Team</p>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: "You have successfully subscribed to our newsletter!",
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    if (error instanceof Error && "code" in error && error.code === "P2002") {
      return NextResponse.json(
        {
          success: false,
          message: "This email is already subscribed.",
        },
        { status: 409 }
      );
    }

    console.error("Newsletter Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}
