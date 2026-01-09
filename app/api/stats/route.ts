import { NextResponse } from "next/server";

// Nombre de base de tests (pour donner l'impression que le site est populaire)
const BASE_TESTS = 24567;

// Variable pour stocker le nombre de tests réels ajoutés pendant cette session
let sessionTests = 0;

// Timestamp de démarrage pour calculer l'incrément automatique
const startTime = Date.now();

// Fonction pour calculer le nombre total avec simulation d'activité
function getTotalTests(): number {
  // Temps écoulé en secondes depuis le démarrage
  const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);

  // Simule environ 1 test toutes les 5-10 secondes (activité réaliste)
  const simulatedTests = Math.floor(elapsedSeconds / (5 + Math.random() * 5));

  return BASE_TESTS + sessionTests + simulatedTests;
}

export async function GET() {
  return NextResponse.json({ total: getTotalTests() });
}

export async function POST() {
  sessionTests += 1;
  return NextResponse.json({ total: getTotalTests() });
}
