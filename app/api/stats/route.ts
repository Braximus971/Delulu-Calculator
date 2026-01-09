import { NextResponse } from "next/server";

// In-memory storage
// Note: Sur Vercel serverless, ceci se réinitialise entre les instances
// mais fonctionne pendant la durée de vie d'une instance
let stats = {
  totalTests: 0,
};

export async function GET() {
  return NextResponse.json({ total: stats.totalTests });
}

export async function POST() {
  try {
    // Increment total tests
    stats.totalTests++;
    return NextResponse.json({ success: true, total: stats.totalTests });
  } catch (error) {
    console.error("Error saving stats:", error);
    return NextResponse.json({ error: "Failed to save stats" }, { status: 500 });
  }
}
