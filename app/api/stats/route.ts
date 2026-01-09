import { NextResponse } from "next/server";

// Variable pour stocker le nombre de tests réels complétés
let totalTests = 0;

export async function GET() {
  return NextResponse.json({ total: totalTests });
}

export async function POST() {
  totalTests += 1;
  return NextResponse.json({ total: totalTests });
}
