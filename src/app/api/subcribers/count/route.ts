// src/app/api/subscribers/count/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    // Use the actual model name from schema.prisma
    const total = await prisma.newsletter.count(); 

    return NextResponse.json({ total });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}