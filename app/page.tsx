"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [count, setCount] = useState(127543);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCount((prev) => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 gradient-mesh"></div>

      {/* Subtle blur orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl animate-pulse-soft"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "2s" }}></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <div className="max-w-4xl w-full">
          {/* Stats Badge */}
          <div className="flex justify-center mb-8">
            <div className="glass px-6 py-2 rounded-full shadow-premium">
              <p className="text-sm font-medium text-gray-700">
                <span className="gradient-text font-bold">{count.toLocaleString()}</span> tests complétés
              </p>
            </div>
          </div>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center mb-12">
            <div className="text-center lg:text-left space-y-6">
              {/* Main Title */}
              <div className="space-y-2">
                <h1 className="text-7xl md:text-9xl font-black tracking-tight">
                  <span className="gradient-text" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    DELULU
                  </span>
                </h1>
                <p className="text-2xl md:text-3xl font-bold text-gray-400 tracking-widest" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  CALCULATOR
                </p>
              </div>

              {/* Tagline */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Découvre ton niveau de <span className="gradient-text">delulu</span> en 2 minutes !
              </h2>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                15 questions fun, un score instantané, et un résultat prêt à partager.
              </p>
            </div>

            {/* Example Result */}
            <div className="glass rounded-3xl shadow-premium p-6 md:p-8 text-center">
              <p className="text-sm uppercase tracking-widest text-gray-500 font-semibold mb-4">
                Exemple de résultat
              </p>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-bg text-white font-bold text-lg mb-4">
                34/45
              </div>
              <div className="text-6xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold gradient-text mb-2">MEGA DELULU</h3>
              <p className="text-sm text-gray-600 mb-4">
                “Tu t’inventes des stories Netflix dans ta tête.” 😏
              </p>
              <div className="bg-white/70 rounded-2xl px-4 py-3 text-sm text-gray-700">
                Partage ce résultat et tag tes potes 💫
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="flex justify-center mb-12">
            <Link href="/quiz" className="group">
              <div className="glass hover:glass-dark p-8 rounded-3xl shadow-premium hover:shadow-glow transition-all duration-500">
                <button className="relative px-12 py-6 text-xl md:text-2xl font-bold text-white rounded-2xl gradient-bg hover:scale-105 transition-all duration-300 shadow-lg overflow-hidden">
                  <span className="relative z-10 flex items-center gap-3">
                    Commencer le test
                    <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                </button>
                <p className="text-center text-sm text-gray-500 mt-4">
                  ⏱️ Moins de 2 minutes
                </p>
              </div>
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="glass p-6 rounded-2xl shadow-premium hover:shadow-glow transition-all duration-300">
              <div className="text-3xl mb-3">✨</div>
              <h3 className="font-bold text-gray-900 mb-2">15 questions</h3>
              <p className="text-sm text-gray-600">Tests scientifiquement délirants</p>
            </div>
            <div className="glass p-6 rounded-2xl shadow-premium hover:shadow-glow transition-all duration-300">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold text-gray-900 mb-2">5 catégories</h3>
              <p className="text-sm text-gray-600">Du réaliste au delulu terminal</p>
            </div>
            <div className="glass p-6 rounded-2xl shadow-premium hover:shadow-glow transition-all duration-300">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-bold text-gray-900 mb-2">Partage facile</h3>
              <p className="text-sm text-gray-600">TikTok, Twitter, Instagram</p>
            </div>
          </div>

          {/* Social Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {["#Delulu", "#DeluluCalculator", "#Dating", "#GenZ", "#Trending"].map((tag) => (
              <span key={tag} className="glass px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:shadow-glow transition-all duration-300">
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="text-center">
            <p className="text-sm text-gray-400">
              Made with 💖 by delulu people, for delulu people
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
