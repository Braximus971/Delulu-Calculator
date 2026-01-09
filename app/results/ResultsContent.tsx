"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getResultCategory, getPercentage } from "@/lib/quiz-data";

export default function ResultsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const score = parseInt(searchParams.get("score") || "0");

  const [mounted, setMounted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setMounted(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  }, []);

  if (!mounted) {
    return null;
  }

  const result = getResultCategory(score);
  const percentage = getPercentage(score);
  const comparison = Math.min(95, Math.max(5, percentage + Math.floor(Math.random() * 20 - 10)));

  const shareText = `Je suis ${percentage}% delulu ! 😱 Et toi ? 💫`;
  const shareUrl = typeof window !== "undefined" ? window.location.origin : "";

  const handleShare = (platform: string) => {
    const encodedText = encodeURIComponent(shareText);
    const encodedUrl = encodeURIComponent(shareUrl);

    const urls: { [key: string]: string } = {
      twitter: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}&hashtags=DeluluCalculator,Delulu`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`,
      whatsapp: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
      copy: "",
    };

    if (platform === "copy") {
      navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
      alert("Lien copié ! 📋");
    } else {
      window.open(urls[platform], "_blank", "width=600,height=400");
    }
  };

  const handleRestart = () => {
    router.push("/quiz");
  };

  const handleHome = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-white">
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute text-2xl animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-10%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            >
              {["✨", "💫", "⭐", "🌟", "💖"][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      )}

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 text-6xl animate-float opacity-20">✨</div>
      <div className="absolute top-20 right-10 text-6xl animate-float opacity-20" style={{ animationDelay: "1s" }}>💫</div>
      <div className="absolute bottom-20 left-20 text-6xl animate-float opacity-20" style={{ animationDelay: "2s" }}>☁️</div>

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 py-8 md:py-12">
        {/* Result Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8 border-2 border-pink-100 text-center">
          {/* Score Badge */}
          <div className="mb-8">
            <div className="inline-block gradient-bg text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg">
              Score: {score}/45
            </div>
          </div>

          {/* Result Emoji */}
          <div className="text-8xl md:text-9xl mb-6 animate-pulse-glow">
            {result.emoji}
          </div>

          {/* Result Title */}
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            {result.title}
          </h1>

          {/* Result Description */}
          <div className="space-y-3 mb-8 max-w-xl mx-auto">
            {result.description.map((line, index) => (
              <p key={index} className="text-xl md:text-2xl text-gray-700 font-medium">
                {line}
              </p>
            ))}
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mb-8">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 border-2 border-pink-200">
              <div className="text-4xl font-bold gradient-text mb-2">{percentage}%</div>
              <div className="text-sm text-gray-600">Niveau Delulu</div>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 border-2 border-pink-200">
              <div className="text-4xl font-bold gradient-text mb-2">{comparison}%</div>
              <div className="text-sm text-gray-600">Plus delulu que</div>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Partage ton résultat !</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => handleShare("twitter")}
                className="px-6 py-3 bg-[#1DA1F2] text-white rounded-full font-semibold hover:scale-105 transition-all shadow-lg flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                Twitter
              </button>

              <button
                onClick={() => handleShare("facebook")}
                className="px-6 py-3 bg-[#4267B2] text-white rounded-full font-semibold hover:scale-105 transition-all shadow-lg flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </button>

              <button
                onClick={() => handleShare("whatsapp")}
                className="px-6 py-3 bg-[#25D366] text-white rounded-full font-semibold hover:scale-105 transition-all shadow-lg flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </button>

              <button
                onClick={() => handleShare("copy")}
                className="px-6 py-3 bg-gray-700 text-white rounded-full font-semibold hover:scale-105 transition-all shadow-lg flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copier
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={handleRestart}
            className="px-8 py-4 gradient-bg text-white rounded-full font-semibold hover:scale-105 transition-all shadow-lg"
          >
            🔄 Refaire le test
          </button>
          <button
            onClick={handleHome}
            className="px-8 py-4 bg-white text-gray-700 border-2 border-gray-300 rounded-full font-semibold hover:border-pink-400 hover:shadow-lg transition-all"
          >
            🏠 Accueil
          </button>
        </div>

        {/* Hashtags */}
        <div className="mt-8 text-center">
          <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-500">
            <span>#Delulu</span>
            <span>•</span>
            <span>#DeluluCalculator</span>
            <span>•</span>
            <span>#Dating</span>
            <span>•</span>
            <span>#GenZ</span>
          </div>
        </div>
      </div>
    </div>
  );
}
