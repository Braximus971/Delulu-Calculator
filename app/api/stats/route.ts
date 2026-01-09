import { NextResponse } from "next/server";

// ATTENTION : Sans base de données, ce compteur se réinitialise
// à chaque redémarrage de l'instance serverless Vercel.
// Pour un vrai compteur persistant, il faut utiliser :
// - Upstash Redis (gratuit, recommandé)
// - Vercel KV
// - Ou toute autre base de données

let totalTests = 0;

export async function GET() {
  return NextResponse.json({ total: totalTests });
}

export async function POST() {
  totalTests += 1;
  return NextResponse.json({ total: totalTests });
}
