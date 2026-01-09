import { Suspense } from "react";
import ResultsContent from "./ResultsContent";

export default function ResultsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-white">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-pulse">✨</div>
          <p className="text-xl gradient-text font-bold">Calcul de ton niveau delulu...</p>
        </div>
      </div>
    }>
      <ResultsContent />
    </Suspense>
  );
}
