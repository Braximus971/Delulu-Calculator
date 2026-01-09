import { NextResponse } from "next/server";

let totalTests = 0;

export async function GET() {
  return NextResponse.json({ total: totalTests });
}

export async function POST() {
  totalTests += 1;
  return NextResponse.json({ total: totalTests });
}
