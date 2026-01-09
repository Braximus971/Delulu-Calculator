"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { quizQuestions } from "@/lib/quiz-data";

export default function QuizPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  const handleSelectOption = (value: number) => {
    setSelectedOption(value);
  };

  const handleNext = () => {
    if (selectedOption === null) return;

    const newAnswers = [...answers, selectedOption];
    setAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      // Quiz completed, calculate total score
      const totalScore = newAnswers.reduce((sum, val) => sum + val, 0);
      router.push(`/results?score=${totalScore}`);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(answers[currentQuestion - 1]);
      setAnswers(answers.slice(0, -1));
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-white">
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 text-4xl animate-float opacity-20">✨</div>
      <div className="absolute top-20 right-10 text-4xl animate-float opacity-20" style={{ animationDelay: "1s" }}>💫</div>
      <div className="absolute bottom-20 left-20 text-4xl animate-float opacity-20" style={{ animationDelay: "2s" }}>☁️</div>

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 py-8 md:py-12">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-gray-600">
              Question {currentQuestion + 1} / {quizQuestions.length}
            </span>
            <span className="text-sm font-semibold gradient-text">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="h-full gradient-bg transition-all duration-500 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8 border-2 border-pink-100">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            {question.question}
          </h2>

          {/* Options */}
          <div className="space-y-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelectOption(option.value)}
                className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 ${
                  selectedOption === option.value
                    ? "border-pink-500 bg-gradient-to-r from-pink-50 to-purple-50 shadow-lg scale-[1.02]"
                    : "border-gray-200 bg-white hover:border-pink-300 hover:shadow-md"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      selectedOption === option.value
                        ? "border-pink-500 bg-pink-500"
                        : "border-gray-300"
                    }`}
                  >
                    {selectedOption === option.value && (
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    )}
                  </div>
                  <span className="text-lg font-medium text-gray-700">
                    {option.text}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className={`px-8 py-4 rounded-full font-semibold transition-all ${
              currentQuestion === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-700 border-2 border-gray-300 hover:border-pink-400 hover:shadow-lg"
            }`}
          >
            ← Précédent
          </button>

          <button
            onClick={handleNext}
            disabled={selectedOption === null}
            className={`px-8 py-4 rounded-full font-semibold transition-all ${
              selectedOption === null
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "gradient-bg text-white hover:scale-105 hover:shadow-xl"
            }`}
          >
            {currentQuestion === quizQuestions.length - 1 ? "Voir les résultats ✨" : "Suivant →"}
          </button>
        </div>
      </div>
    </div>
  );
}
