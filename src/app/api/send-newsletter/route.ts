import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { subject, message } = await req.json();

    const subscribers = await prisma.newsletter.findMany();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    for (const user of subscribers) {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: user.email,
        subject: subject,
        html: `<p>${message}</p>`,
      });
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send newsletter" }, { status: 500 });
  }
}