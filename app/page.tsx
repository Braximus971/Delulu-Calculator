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

      {/* Animated blur orbs - MUCH more visible! */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-pink-400/40 rounded-full blur-3xl animate-pulse-soft animate-blob-morph"></div>
      <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-purple-400/40 rounded-full blur-3xl animate-pulse-soft animate-blob-morph" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-300/30 rounded-full blur-3xl animate-float-slow"></div>

      {/* Floating animated elements */}
      <div className="absolute top-20 left-10 text-6xl animate-float-smooth opacity-60">✨</div>
      <div className="absolute top-40 right-20 text-5xl animate-float-smooth opacity-50" style={{ animationDelay: "1s" }}>💖</div>
      <div className="absolute bottom-32 left-20 text-6xl animate-float-smooth opacity-60" style={{ animationDelay: "2s" }}>💫</div>
      <div className="absolute bottom-20 right-32 text-5xl animate-float-smooth opacity-50" style={{ animationDelay: "3s" }}>🌟</div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <div className="max-w-4xl w-full">
          {/* Stats Badge */}
          <div className="flex justify-center mb-8 animate-slide-up">
            <div className="glass px-6 py-2 rounded-full shadow-premium animate-pulse-glow">
              <p className="text-sm font-medium text-gray-700">
                <span className="gradient-text font-bold">{count.toLocaleString()}</span> tests complétés
              </p>
            </div>
          </div>

          {/* Hero Section */}
          <div className="text-center space-y-6 mb-12">
            {/* Main Title */}
            <div className="space-y-2 animate-bounce-in">
              <h1 className="text-7xl md:text-9xl font-black tracking-tight animate-gradient">
                <span className="gradient-text" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  DELULU
                </span>
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-gray-400 tracking-widest animate-slide-up" style={{ fontFamily: "'Space Grotesk', sans-serif", animationDelay: "0.2s" }}>
                CALCULATOR
              </p>
            </div>

            {/* Tagline */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-8">
              À quel point es-tu <span className="gradient-text">delulu</span> ?
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              15 questions pour découvrir ton vrai niveau de délire en amour
            </p>
          </div>

          {/* CTA Card */}
          <div className="flex justify-center mb-12 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Link href="/quiz" className="group">
              <div className="glass hover:glass-dark p-8 rounded-3xl shadow-premium hover:shadow-glow transition-all duration-500 animate-pulse-glow">
                <button className="relative px-12 py-6 text-xl md:text-2xl font-bold text-white rounded-2xl gradient-bg hover:scale-110 transition-all duration-300 shadow-lg overflow-hidden">
                  <span className="relative z-10 flex items-center gap-3">
                    Commencer le test
                    <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                </button>
                <p className="text-center text-sm text-gray-500 mt-4 animate-pulse">
                  ⏱️ Moins de 2 minutes
                </p>
              </div>
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="glass p-6 rounded-2xl shadow-premium hover:shadow-glow hover:scale-105 transition-all duration-300 animate-slide-up" style={{ animationDelay: "0.5s" }}>
              <div className="text-3xl mb-3 animate-bounce-in" style={{ animationDelay: "0.6s" }}>✨</div>
              <h3 className="font-bold text-gray-900 mb-2">15 questions</h3>
              <p className="text-sm text-gray-600">Tests scientifiquement délirants</p>
            </div>
            <div className="glass p-6 rounded-2xl shadow-premium hover:shadow-glow hover:scale-105 transition-all duration-300 animate-slide-up" style={{ animationDelay: "0.6s" }}>
              <div className="text-3xl mb-3 animate-bounce-in" style={{ animationDelay: "0.7s" }}>🎯</div>
              <h3 className="font-bold text-gray-900 mb-2">5 catégories</h3>
              <p className="text-sm text-gray-600">Du réaliste au delulu terminal</p>
            </div>
            <div className="glass p-6 rounded-2xl shadow-premium hover:shadow-glow hover:scale-105 transition-all duration-300 animate-slide-up" style={{ animationDelay: "0.7s" }}>
              <div className="text-3xl mb-3 animate-bounce-in" style={{ animationDelay: "0.8s" }}>📱</div>
              <h3 className="font-bold text-gray-900 mb-2">Partage facile</h3>
              <p className="text-sm text-gray-600">TikTok, Twitter, Instagram</p>
            </div>
          </div>

          {/* Social Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
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
