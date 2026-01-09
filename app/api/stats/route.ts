import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";

const STATS_KEY = "delulu-calculator:total-tests";

export async function GET() {
  try {
    // Récupère le compteur depuis Vercel KV
    const total = await kv.get<number>(STATS_KEY);
    return NextResponse.json({ total: total || 0 });
  } catch (error) {
    console.error("Error fetching stats:", error);
    // Fallback en cas d'erreur
    return NextResponse.json({ total: 0 });
  }
}

export async function POST() {
  try {
    // Incrémente le compteur dans Vercel KV
    const newTotal = await kv.incr(STATS_KEY);
    return NextResponse.json({ success: true, total: newTotal });
  } catch (error) {
    console.error("Error incrementing stats:", error);
    return NextResponse.json(
      { error: "Failed to save stats" },
      { status: 500 }
    );
  }
}
