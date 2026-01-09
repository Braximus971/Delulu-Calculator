"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [count, setCount] = useState(127543);

  useEffect(() => {
    // Simulate increasing counter
    const interval = setInterval(() => {
      setCount((prev) => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-bg opacity-10"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-6xl animate-float opacity-20">✨</div>
      <div className="absolute top-40 right-20 text-6xl animate-float opacity-20" style={{ animationDelay: "1s" }}>💫</div>
      <div className="absolute bottom-40 left-20 text-6xl animate-float opacity-20" style={{ animationDelay: "2s" }}>☁️</div>
      <div className="absolute bottom-20 right-10 text-6xl animate-float opacity-20" style={{ animationDelay: "1.5s" }}>✨</div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <div className="max-w-2xl w-full text-center space-y-8">
          {/* Logo/Title */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold gradient-text animate-pulse-glow">
              ✨ DELULU
            </h1>
            <h2 className="text-5xl md:text-7xl font-bold gradient-text">
              CALCULATOR
            </h2>
          </div>

          {/* Tagline */}
          <p className="text-2xl md:text-3xl font-semibold text-gray-800">
            À quel point es-tu delulu ?
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto">
            Réponds à 15 questions et découvre ton niveau de délire
          </p>

          {/* CTA Button */}
          <div className="pt-6">
            <Link href="/quiz">
              <button className="group relative px-12 py-5 text-2xl font-bold text-white rounded-full gradient-bg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-pink-500/50">
                <span className="relative z-10">COMMENCER LE TEST</span>
                <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </button>
            </Link>
          </div>

          {/* Counter */}
          <div className="pt-8">
            <p className="text-gray-500 text-lg">
              <span className="font-semibold gradient-text">{count.toLocaleString()}</span> personnes testées
            </p>
          </div>

          {/* Social Proof */}
          <div className="pt-6 flex flex-wrap justify-center gap-3 text-sm text-gray-400">
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

      {/* Footer */}
      <div className="absolute bottom-4 left-0 right-0 text-center text-sm text-gray-400">
        <p>Made with 💖 by delulu people, for delulu people</p>
      </div>
    </div>
  );
}
