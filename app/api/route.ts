// app/api/route.js 👈🏽

import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(request: Request) {
  const ledState = await prisma.led.findFirst({ where: { id: 1 } });
  return NextResponse.json({ led: ledState?.state }, { status: 200 });
}
