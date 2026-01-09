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

  useEffect(() => {
    if (typeof window === "undefined") return;
    const key = "delulu-test-counted";
    if (sessionStorage.getItem(key)) return;
    sessionStorage.setItem(key, "true");
    fetch("/api/stats", { method: "POST" }).catch(() => {
      sessionStorage.removeItem(key);
    });
  }, []);

  if (!mounted) {
    return null;
  }

  const result = getResultCategory(score);
  const percentage = getPercentage(score);
  const comparison = Math.min(95, Math.max(5, percentage + Math.floor(Math.random() * 20 - 10)));

  const shareText = `Je suis ${percentage}% delulu (${result.title}) ! 😱 Et toi ? 💫`;
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const handleShare = (platform: string) => {
    const encodedText = encodeURIComponent(shareText);
    const encodedUrl = encodeURIComponent(shareUrl);

    const urls: { [key: string]: string } = {
      x: `https://x.com/intent/post?text=${encodedText}&url=${encodedUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`,
      whatsapp: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
      tiktok: "",
      instagram: "",
      copy: "",
    };

    if (platform === "copy") {
      navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
      alert("Lien copié ! 📋");
    } else if (platform === "tiktok" || platform === "instagram") {
      navigator.clipboard.writeText(`${shareText} ${shareUrl}`);

      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      if (platform === "tiktok") {
        if (isMobile) {
          window.location.href = "snssdk1128://";
          setTimeout(() => {
            alert("📱 Texte copié ! Ouvre TikTok et colle-le dans ta vidéo 🎥\n\n#Delulu #DeluluCalculator");
          }, 500);
        } else {
          alert("📱 Texte copié ! Ouvre TikTok sur ton téléphone et colle-le dans ta vidéo 🎥\n\n#Delulu #DeluluCalculator");
        }
      } else {
        window.open("https://www.instagram.com/", "_blank");
        alert("📸 Texte copié ! Ouvre Instagram et colle-le dans ta story 🔥\n\n#Delulu #DeluluCalculator");
      }
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
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Animated Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-pink-400 to-pink-300 rounded-full opacity-30 blur-3xl animate-blob-1"></div>
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-purple-400 to-purple-300 rounded-full opacity-30 blur-3xl animate-blob-2"></div>
      </div>

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

      {/* Floating Emojis */}
      <div className="absolute top-20 left-[10%] text-7xl animate-float-1 opacity-60">✨</div>
      <div className="absolute top-40 right-[15%] text-6xl animate-float-2 opacity-60">💫</div>
      <div className="absolute bottom-32 left-[15%] text-7xl animate-float-3 opacity-60">🌟</div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-8 md:py-12">
        {/* Result Card */}
        <div className="backdrop-blur-xl bg-white/80 rounded-3xl shadow-2xl p-8 md:p-12 mb-8 border border-white/50 text-center">
          {/* Score Badge */}
          <div className="mb-6">
            <div className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full text-base font-bold shadow-xl">
              Score: {score}/45
            </div>
          </div>

          {/* Result Emoji Box */}
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-gradient-to-br from-pink-100 to-purple-100 border-4 border-white shadow-xl">
              <div className="text-6xl md:text-7xl">
                {result.emoji}
              </div>
            </div>
          </div>

          {/* Result Title */}
          <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {result.title}
          </h1>

          {/* Result Description */}
          <div className="space-y-2 mb-8 max-w-xl mx-auto">
            {result.description.map((line, index) => (
              <p key={index} className="text-lg md:text-xl text-gray-700 font-medium">
                {line}
              </p>
            ))}
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mb-8">
            <div className="backdrop-blur-xl bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 border-2 border-pink-200/50 shadow-lg">
              <div className="text-5xl font-black bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-2">{percentage}%</div>
              <div className="text-sm text-gray-600 font-semibold">Niveau Delulu</div>
            </div>
            <div className="backdrop-blur-xl bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 border-2 border-purple-200/50 shadow-lg">
              <div className="text-5xl font-black bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-2">{comparison}%</div>
              <div className="text-sm text-gray-600 font-semibold">Plus delulu que</div>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Partage ton résultat !</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => handleShare("tiktok")}
                className="px-5 py-3 bg-black text-white rounded-full font-semibold hover:scale-110 transition-all shadow-xl flex items-center gap-2 text-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
                TikTok
              </button>

              <button
                onClick={() => handleShare("x")}
                className="px-5 py-3 bg-black text-white rounded-full font-semibold hover:scale-110 transition-all shadow-xl flex items-center gap-2 text-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.901 1.153h3.69l-8.06 9.217L24 22.847h-7.406l-5.8-7.59-6.638 7.59H.48l8.618-9.85L0 1.153h7.594l5.243 6.932 6.064-6.932zm-1.293 19.49h2.043L6.479 3.246H4.29l13.318 17.397z"/>
                </svg>
                X
              </button>

              <button
                onClick={() => handleShare("instagram")}
                className="px-5 py-3 bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white rounded-full font-semibold hover:scale-110 transition-all shadow-xl flex items-center gap-2 text-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11zm0 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm5.25-.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z"/>
                </svg>
                Instagram
              </button>

              <button
                onClick={() => handleShare("facebook")}
                className="px-5 py-3 bg-[#4267B2] text-white rounded-full font-semibold hover:scale-110 transition-all shadow-xl flex items-center gap-2 text-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </button>

              <button
                onClick={() => handleShare("whatsapp")}
                className="px-5 py-3 bg-[#25D366] text-white rounded-full font-semibold hover:scale-110 transition-all shadow-xl flex items-center gap-2 text-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </button>

              <button
                onClick={() => handleShare("copy")}
                className="px-5 py-3 bg-gray-700 text-white rounded-full font-semibold hover:scale-110 transition-all shadow-xl flex items-center gap-2 text-sm"
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
        <div className="flex gap-4 justify-center flex-wrap mb-8">
          <button
            onClick={handleRestart}
            className="px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-2xl font-bold hover:scale-110 transition-all shadow-2xl text-lg"
          >
            🔄 Refaire le test
          </button>
          <button
            onClick={handleHome}
            className="px-10 py-4 backdrop-blur-xl bg-white/70 text-gray-700 border-2 border-white/50 rounded-2xl font-bold hover:scale-110 hover:shadow-2xl transition-all text-lg"
          >
            🏠 Accueil
          </button>
        </div>

        {/* Hashtags */}
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {["#Delulu", "#DeluluCalculator", "#Dating", "#GenZ", "#Trending"].map((tag) => (
              <span
                key={tag}
                className="backdrop-blur-xl bg-white/60 px-4 py-2 rounded-full font-semibold text-gray-700 border border-white/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
