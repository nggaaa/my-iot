import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: { switch: string } }
) {
  const query = await prisma.led.update({
    where: { id: 1 },
    data: { state: params.switch },
  });
  return NextResponse.json({ updated: "OK" }, { status: 200 });
}
