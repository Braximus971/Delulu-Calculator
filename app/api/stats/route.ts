import { NextRequest, NextResponse } from "next/server";

// In-memory storage for demo purposes
// In production, use Turso database
let stats = {
  totalTests: 127543,
  results: {} as Record<string, number>,
};

export async function GET() {
  return NextResponse.json(stats);
}

export async function POST(request: NextRequest) {
  try {
    const { score, category } = await request.json();

    // Increment total tests
    stats.totalTests++;

    // Track result distribution
    if (category) {
      stats.results[category] = (stats.results[category] || 0) + 1;
    }

    // In production, save to Turso database:
    // const client = createClient({
    //   url: process.env.TURSO_DATABASE_URL!,
    //   authToken: process.env.TURSO_AUTH_TOKEN!,
    // });
    // await client.execute({
    //   sql: "INSERT INTO results (score, category, created_at) VALUES (?, ?, ?)",
    //   args: [score, category, new Date().toISOString()],
    // });

    return NextResponse.json({ success: true, totalTests: stats.totalTests });
  } catch (error) {
    console.error("Error saving stats:", error);
    return NextResponse.json({ error: "Failed to save stats" }, { status: 500 });
  }
}
