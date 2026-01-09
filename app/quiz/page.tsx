"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { quizQuestions } from "@/lib/quiz-data";
import { QuizIllustrations } from "@/components/QuizIllustrations";

// Map question IDs to illustration components
const illustrationMap: Record<number, () => React.JSX.Element> = {
  1: QuizIllustrations.ExWatchingStories,
  2: QuizIllustrations.ThreeHoursWaiting,
  3: QuizIllustrations.LikedPhoto,
  4: QuizIllustrations.CheckingProfile,
  5: QuizIllustrations.SignsDestiny,
  6: QuizIllustrations.MarriageRings,
  7: QuizIllustrations.PuzzlePieces,
  8: QuizIllustrations.AnalyzingEmojis,
  9: QuizIllustrations.ThinkingAboutYou,
  10: QuizIllustrations.StalkingExes,
  11: QuizIllustrations.ReadingBetweenLines,
  12: QuizIllustrations.MaybeEqualsYes,
  13: QuizIllustrations.SilenceGhost,
  14: QuizIllustrations.Soulmates,
  15: QuizIllustrations.WhenYouWant,
};

export default function QuizPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
  const IllustrationComponent = illustrationMap[question.id];

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
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 gradient-mesh"></div>

      {/* Animated blur orbs */}
      <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-pink-400/30 rounded-full blur-3xl animate-pulse-soft animate-blob-morph"></div>
      <div className="absolute bottom-20 left-1/4 w-[400px] h-[400px] bg-purple-400/30 rounded-full blur-3xl animate-pulse-soft animate-blob-morph" style={{ animationDelay: "2s" }}></div>

      {/* Floating animated elements */}
      <div className="absolute top-10 left-10 text-5xl animate-float-smooth opacity-50">✨</div>
      <div className="absolute top-20 right-10 text-4xl animate-float-smooth opacity-40" style={{ animationDelay: "1s" }}>💫</div>
      <div className="absolute bottom-20 left-20 text-5xl animate-float-smooth opacity-50" style={{ animationDelay: "2s" }}>💖</div>
      <div className="absolute bottom-32 right-20 text-4xl animate-float-smooth opacity-40" style={{ animationDelay: "3s" }}>🌟</div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-8 md:py-12">
        {/* Progress Bar */}
        <div className="mb-8 animate-slide-up">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-gray-600">
              Question {currentQuestion + 1} / {quizQuestions.length}
            </span>
            <span className="text-sm font-semibold gradient-text">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
            <div
              className="h-full gradient-bg transition-all duration-500 ease-out rounded-full shadow-glow"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card with Illustration */}
        <div className="glass rounded-3xl shadow-premium hover:shadow-glow p-6 md:p-10 mb-8 border border-white/50 animate-bounce-in">
          {/* Illustration */}
          <div className="mb-8 flex justify-center">
            <div className="w-48 h-48 md:w-56 md:h-56">
              {IllustrationComponent && <IllustrationComponent />}
            </div>
          </div>

          {/* Question Text */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center animate-slide-up" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {question.question}
          </h2>

          {/* Options */}
          <div className="space-y-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelectOption(option.value)}
                className={`w-full text-left p-5 md:p-6 rounded-2xl border-2 transition-all duration-300 animate-slide-up ${
                  selectedOption === option.value
                    ? "border-pink-500 glass shadow-glow scale-[1.03] animate-pulse-glow"
                    : "border-gray-200/50 glass-dark hover:border-pink-300 hover:shadow-premium hover:scale-[1.01]"
                }`}
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      selectedOption === option.value
                        ? "border-pink-500 bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg"
                        : "border-gray-400 bg-white"
                    }`}
                  >
                    {selectedOption === option.value && (
                      <div className="w-3 h-3 bg-white rounded-full animate-bounce-in"></div>
                    )}
                  </div>
                  <span className="text-base md:text-lg font-medium text-gray-700">
                    {option.text}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 justify-between animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className={`px-6 md:px-8 py-4 rounded-full font-semibold transition-all ${
              currentQuestion === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "glass text-gray-700 border-2 border-gray-300/50 hover:border-pink-400 hover:shadow-glow hover:scale-105"
            }`}
          >
            ← Précédent
          </button>

          <button
            onClick={handleNext}
            disabled={selectedOption === null}
            className={`px-6 md:px-8 py-4 rounded-full font-semibold transition-all ${
              selectedOption === null
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "gradient-bg text-white hover:scale-110 shadow-glow animate-pulse-glow"
            }`}
          >
            {currentQuestion === quizQuestions.length - 1 ? "Voir les résultats ✨" : "Suivant →"}
          </button>
        </div>
      </div>
    </div>
  );
}
