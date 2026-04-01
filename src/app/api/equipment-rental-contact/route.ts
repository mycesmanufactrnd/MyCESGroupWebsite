import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, phone, message } = await req.json();

    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    // Save to database
    const record = await prisma.equipmentRentalInquiry.create({
      data: { firstName, lastName, email, phone, message },
    });

    // Email setup
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

    // Send email to HR and service PIC
    const hrEmail = process.env.HR_EMAIL;
    const picEmail = process.env.EQUIPMENT_RENTAL_PIC_EMAIL;
    
    if (!hrEmail || !picEmail) {
      throw new Error("Missing required email configuration in environment variables.");
    }

    await transporter.sendMail({
      from: `"MyCES Equipment Rental" <${process.env.EMAIL_USER}>`,
      to: [hrEmail, picEmail],
      subject: `New Equipment Rental Inquiry from ${firstName} ${lastName}`,
      html: `
        <h2>New Equipment Rental Inquiry</h2>
        <p><b>Name:</b> ${firstName} ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    });

    return NextResponse.json({
      message: `Thank you, ${firstName}! Your inquiry has been submitted successfully.`,
      record,
    });
  } catch (error) {
    // ✅ Note: No type in catch parentheses
    const err = error as Error;
    console.error("Equipment Rental API Error:", err);
    return NextResponse.json(
      { message: err.message || "Failed to submit inquiry." },
      { status: 500 }
    );
  }
}
