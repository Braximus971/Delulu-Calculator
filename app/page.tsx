"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [count, setCount] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const fetchCount = async () => {
      try {
        const response = await fetch("/api/stats", { cache: "no-store" });
        if (!response.ok) return;
        const data = await response.json();
        setCount(data.total);
      } catch {
        // no-op
      }
    };
    fetchCount();
    const interval = setInterval(fetchCount, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Animated Background Gradients - ULTRA VISIBLE */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-pink-400 to-pink-300 rounded-full opacity-30 blur-3xl animate-blob-1"></div>
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-purple-400 to-purple-300 rounded-full opacity-30 blur-3xl animate-blob-2"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-pink-300 to-purple-300 rounded-full opacity-20 blur-3xl animate-blob-3"></div>
      </div>

      {/* Floating Emojis - BIGGER and MORE VISIBLE */}
      <div className="absolute top-20 left-[10%] text-8xl animate-float-1 opacity-70">✨</div>
      <div className="absolute top-40 right-[15%] text-7xl animate-float-2 opacity-70">💖</div>
      <div className="absolute bottom-32 left-[15%] text-8xl animate-float-3 opacity-70">💫</div>
      <div className="absolute bottom-20 right-[10%] text-7xl animate-float-4 opacity-70">🌟</div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <div className="max-w-5xl w-full">

          {/* Stats Badge */}
          <div className="flex justify-center mb-8">
            <div className="backdrop-blur-xl bg-white/70 px-6 py-3 rounded-full shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
              <p className="text-sm font-semibold text-gray-700">
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent font-bold text-lg">
                  {count === null ? "—" : count.toLocaleString()}
                </span>{" "}
                tests complétés
                <span className="inline-flex items-center gap-1 text-xs text-gray-500 ml-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-lg shadow-green-400/50"></span>
                  Live
                </span>
              </p>
            </div>
          </div>

          {/* Hero Section */}
          <div className="text-center space-y-8 mb-16">
            {/* Title with Gradient */}
            <div className="space-y-3">
              <h1 className="text-8xl md:text-9xl font-black tracking-tight">
                <span
                  className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  DELULU
                </span>
              </h1>
              <p
                className="text-3xl md:text-4xl font-bold text-gray-400 tracking-[0.3em]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                CALCULATOR
              </p>
            </div>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Un quiz viral, un score instantané, et un résultat prêt à poster.
              <br className="hidden md:block" />
              Fais le test et partage ta vibe avec un visuel premium.
            </p>

            {/* CTA Button - HUGE and VISIBLE */}
            <div className="flex flex-col items-center gap-4 mt-12">
              <Link href="/quiz" className="group">
                <button className="relative px-16 py-6 text-2xl font-bold text-white rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-pink-500/50 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-3">
                    Commencer le test
                    <svg className="w-7 h-7 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </button>
              </Link>
              <div className="backdrop-blur-xl bg-white/60 px-6 py-3 rounded-xl text-base text-gray-600 font-medium border border-white/50">
                ⏱️ Moins de 2 minutes • Résultat immédiat
              </div>
            </div>
          </div>

          {/* Example Results Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
            <div className="backdrop-blur-xl bg-white/70 rounded-3xl shadow-2xl p-8 text-center border border-white/50 hover:shadow-pink-500/20 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">Exemple de résultat</span>
                <span className="text-xs text-gray-400">#1</span>
              </div>
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-xl mb-4 shadow-xl">
                34/45
              </div>
              <div className="text-7xl mb-4">🌟</div>
              <h3 className="text-3xl font-black bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-3">
                MEGA DELULU
              </h3>
              <p className="text-base text-gray-600 mb-4 font-medium">
                "Tu t'inventes des stories Netflix dans ta tête." 😏
              </p>
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl px-4 py-3 text-sm text-gray-700 border border-pink-200/50 font-medium">
                Partage ce résultat et tag tes potes 💫
              </div>
            </div>

            <div className="backdrop-blur-xl bg-white/70 rounded-3xl shadow-2xl p-8 text-center border border-white/50 hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">Autre vibe</span>
                <span className="text-xs text-gray-400">#2</span>
              </div>
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white text-pink-500 border-4 border-pink-200 font-bold text-xl mb-4 shadow-xl">
                18/45
              </div>
              <div className="text-7xl mb-4">💖</div>
              <h3 className="text-3xl font-black text-gray-800 mb-3">
                SOFT DELULU
              </h3>
              <p className="text-base text-gray-600 mb-4 font-medium">
                "Tu restes réaliste, mais tu rêves un peu quand même." 💭
              </p>
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl px-4 py-3 text-sm text-gray-700 border border-pink-200/50 font-medium">
                Montre à tes potes que tu es sage 😌
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="backdrop-blur-xl bg-white/60 p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-white/50">
              <div className="text-5xl mb-3">✨</div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">15 questions</h3>
              <p className="text-sm text-gray-600">Des questions fun qui vont droit au but</p>
            </div>
            <div className="backdrop-blur-xl bg-white/60 p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-white/50">
              <div className="text-5xl mb-3">🎯</div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">5 catégories</h3>
              <p className="text-sm text-gray-600">Du réaliste au delulu terminal</p>
            </div>
            <div className="backdrop-blur-xl bg-white/60 p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-white/50">
              <div className="text-5xl mb-3">📱</div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Partage facile</h3>
              <p className="text-sm text-gray-600">TikTok, Instagram, X & plus</p>
            </div>
          </div>

          {/* Social Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["#Delulu", "#DeluluCalculator", "#Dating", "#GenZ", "#Trending"].map((tag) => (
              <span
                key={tag}
                className="backdrop-blur-xl bg-white/60 px-5 py-2 rounded-full text-sm font-semibold text-gray-700 hover:bg-white/80 hover:scale-110 transition-all duration-300 border border-white/50 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="text-center">
            <p className="text-sm text-gray-400 font-medium">
              Made with 💖 by delulu people, for delulu people
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
