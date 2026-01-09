// SVG Illustrations for each quiz question
export const QuizIllustrations = {
  // Q1: Ex watching stories
  ExWatchingStories: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ff6b9d', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#c44bd1', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      {/* Phone */}
      <rect x="60" y="30" width="80" height="140" rx="10" fill="url(#grad1)" opacity="0.9" />
      <rect x="65" y="40" width="70" height="110" rx="5" fill="white" />
      {/* Story circle */}
      <circle cx="100" cy="65" r="15" fill="url(#grad1)" className="animate-pulse" />
      {/* Eye watching */}
      <ellipse cx="70" cy="180" rx="12" ry="8" fill="#ff6b9d" className="animate-pulse-soft" />
      <ellipse cx="130" cy="180" rx="12" ry="8" fill="#ff6b9d" className="animate-pulse-soft" style={{ animationDelay: '0.5s' }} />
      <circle cx="70" cy="180" r="5" fill="#000" />
      <circle cx="130" cy="180" r="5" fill="#000" />
    </svg>
  ),

  // Q2: 3h response time - Clock/waiting
  ThreeHoursWaiting: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ff6b9d', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#c44bd1', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      {/* Clock circle */}
      <circle cx="100" cy="100" r="60" fill="url(#grad2)" opacity="0.9" />
      <circle cx="100" cy="100" r="55" fill="white" />
      {/* Clock hands - rotating */}
      <line x1="100" y1="100" x2="100" y2="60" stroke="url(#grad2)" strokeWidth="4" strokeLinecap="round" className="animate-rotate-slow" style={{ transformOrigin: '100px 100px' }} />
      <line x1="100" y1="100" x2="130" y2="100" stroke="url(#grad2)" strokeWidth="3" strokeLinecap="round" />
      {/* Dots for hours */}
      <circle cx="100" cy="50" r="3" fill="#c44bd1" />
      <circle cx="150" cy="100" r="3" fill="#c44bd1" />
      <circle cx="100" cy="150" r="3" fill="#c44bd1" />
      <circle cx="50" cy="100" r="3" fill="#c44bd1" />
      {/* "3h" text */}
      <text x="100" y="180" fontSize="20" fontWeight="bold" fill="url(#grad2)" textAnchor="middle">3h</text>
    </svg>
  ),

  // Q3: Liked photo - Heart like
  LikedPhoto: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ff6b9d', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#c44bd1', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      {/* Photo frame */}
      <rect x="50" y="40" width="100" height="100" rx="10" fill="url(#grad3)" opacity="0.2" />
      <rect x="55" y="45" width="90" height="90" rx="8" fill="white" stroke="url(#grad3)" strokeWidth="2" />
      {/* Heart - animated */}
      <path
        d="M 100 150 C 80 130, 60 110, 60 90 C 60 70, 75 60, 90 65 C 95 67, 100 72, 100 72 C 100 72, 105 67, 110 65 C 125 60, 140 70, 140 90 C 140 110, 120 130, 100 150 Z"
        fill="url(#grad3)"
        className="animate-pulse-glow"
      />
      {/* Sparkles */}
      <circle cx="45" cy="150" r="3" fill="#ff6b9d" className="animate-pulse" />
      <circle cx="155" cy="150" r="3" fill="#c44bd1" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
      <circle cx="100" cy="30" r="2" fill="#ff8fab" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
    </svg>
  ),

  // Q4: Checking profile - magnifying glass
  CheckingProfile: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ff6b9d', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#c44bd1', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      {/* Profile card */}
      <rect x="40" y="40" width="80" height="100" rx="10" fill="white" stroke="url(#grad4)" strokeWidth="2" />
      <circle cx="80" cy="70" r="15" fill="url(#grad4)" opacity="0.6" />
      <rect x="50" y="95" width="60" height="8" rx="4" fill="url(#grad4)" opacity="0.4" />
      <rect x="50" y="110" width="50" height="6" rx="3" fill="url(#grad4)" opacity="0.3" />
      {/* Magnifying glass - animated */}
      <circle cx="140" cy="130" r="25" fill="none" stroke="url(#grad4)" strokeWidth="5" className="animate-pulse-soft" />
      <line x1="158" y1="148" x2="180" y2="170" stroke="url(#grad4)" strokeWidth="6" strokeLinecap="round" className="animate-pulse-soft" />
      {/* Eye in magnifying glass */}
      <ellipse cx="140" cy="130" rx="12" ry="8" fill="#ff6b9d" className="animate-pulse" />
      <circle cx="140" cy="130" r="4" fill="#000" />
    </svg>
  ),

  // Q5: Signs from destiny - stars/universe
  SignsDestiny: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ff6b9d', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#c44bd1', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      {/* Stars */}
      <path d="M 100 20 L 105 40 L 125 45 L 105 50 L 100 70 L 95 50 L 75 45 L 95 40 Z" fill="url(#grad5)" className="animate-pulse" />
      <path d="M 50 80 L 53 90 L 63 93 L 53 96 L 50 106 L 47 96 L 37 93 L 47 90 Z" fill="url(#grad5)" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
      <path d="M 150 80 L 153 90 L 163 93 L 153 96 L 150 106 L 147 96 L 137 93 L 147 90 Z" fill="url(#grad5)" className="animate-pulse" style={{ animationDelay: '1s' }} />
      {/* Cosmic circle */}
      <circle cx="100" cy="130" r="40" fill="none" stroke="url(#grad5)" strokeWidth="2" strokeDasharray="5,5" className="animate-rotate-slow" />
      {/* Inner stars */}
      <circle cx="100" cy="130" r="5" fill="url(#grad5)" className="animate-pulse-glow" />
      <circle cx="80" cy="130" r="3" fill="#ff6b9d" className="animate-pulse" />
      <circle cx="120" cy="130" r="3" fill="#c44bd1" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
      {/* Sparkles */}
      <circle cx="170" cy="170" r="2" fill="#ff8fab" className="animate-pulse" />
      <circle cx="30" cy="170" r="2" fill="#ff8fab" className="animate-pulse" style={{ animationDelay: '0.7s' }} />
    </svg>
  ),

  // Q6: Marriage after first date - wedding rings
  MarriageRings: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ff6b9d', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#c44bd1', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      {/* Ring 1 */}
      <circle cx="75" cy="100" r="35" fill="none" stroke="url(#grad6)" strokeWidth="8" className="animate-pulse-soft" />
      <circle cx="75" cy="70" r="8" fill="url(#grad6)" className="animate-pulse" />
      {/* Ring 2 - interlocked */}
      <circle cx="125" cy="100" r="35" fill="none" stroke="url(#grad6)" strokeWidth="8" className="animate-pulse-soft" style={{ animationDelay: '0.5s' }} />
      <circle cx="125" cy="70" r="8" fill="url(#grad6)" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
      {/* Hearts */}
      <path d="M 100 50 C 95 45, 90 45, 88 48 C 86 51, 86 54, 88 56 C 90 58, 95 63, 100 68 C 105 63, 110 58, 112 56 C 114 54, 114 51, 112 48 C 110 45, 105 45, 100 50 Z" fill="url(#grad6)" className="animate-bounce-in" />
      <path d="M 100 140 C 95 135, 90 135, 88 138 C 86 141, 86 144, 88 146 C 90 148, 95 153, 100 158 C 105 153, 110 148, 112 146 C 114 144, 114 141, 112 138 C 110 135, 105 135, 100 140 Z" fill="url(#grad6)" className="animate-bounce-in" style={{ animationDelay: '0.3s' }} />
    </svg>
  ),

  // Q7: Made for each other - puzzle pieces
  PuzzlePieces: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <linearGradient id="grad7" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ff6b9d', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#c44bd1', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      {/* Puzzle piece 1 - left */}
      <path
        d="M 40 80 L 40 120 L 70 120 L 70 135 C 70 135, 75 140, 80 140 C 85 140, 90 135, 90 135 L 90 120 L 90 80 Z"
        fill="url(#grad7)"
        opacity="0.8"
        className="animate-slide-up"
      />
      {/* Puzzle piece 2 - right */}
      <path
        d="M 110 80 L 110 120 L 160 120 L 160 80 L 110 80 L 110 65 C 110 65, 105 60, 100 60 C 95 60, 90 65, 90 65 L 90 80 Z"
        fill="url(#grad7)"
        opacity="0.8"
        className="animate-slide-up"
        style={{ animationDelay: '0.3s' }}
      />
      {/* Heart in center */}
      <path d="M 100 95 C 95 90, 90 90, 88 93 C 86 96, 86 99, 88 101 C 90 103, 95 108, 100 113 C 105 108, 110 103, 112 101 C 114 99, 114 96, 112 93 C 110 90, 105 90, 100 95 Z" fill="white" className="animate-pulse-glow" />
      {/* Sparkles */}
      <circle cx="30" cy="70" r="3" fill="#ff6b9d" className="animate-pulse" />
      <circle cx="170" cy="130" r="3" fill="#c44bd1" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
    </svg>
  ),

  // Q8: Analyzing emojis
  AnalyzingEmojis: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <linearGradient id="grad8" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ff6b9d', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#c44bd1', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      {/* Message bubbles with emojis */}
      <rect x="40" y="50" width="50" height="40" rx="15" fill="url(#grad8)" opacity="0.6" className="animate-slide-up" />
      <text x="65" y="77" fontSize="25" textAnchor="middle">😊</text>
      <rect x="110" y="70" width="50" height="40" rx="15" fill="url(#grad8)" opacity="0.6" className="animate-slide-up" style={{ animationDelay: '0.2s' }} />
      <text x="135" y="97" fontSize="25" textAnchor="middle">❤️</text>
      <rect x="60" y="120" width="50" height="40" rx="15" fill="url(#grad8)" opacity="0.6" className="animate-slide-up" style={{ animationDelay: '0.4s' }} />
      <text x="85" y="147" fontSize="25" textAnchor="middle">💕</text>
      {/* Magnifying glass analyzing */}
      <circle cx="140" cy="140" r="20" fill="none" stroke="url(#grad8)" strokeWidth="4" className="animate-pulse-soft" />
      <line x1="154" y1="154" x2="170" y2="170" stroke="url(#grad8)" strokeWidth="5" strokeLinecap="round" />
      {/* Question marks */}
      <text x="145" y="145" fontSize="16" fill="url(#grad8)" fontWeight="bold" className="animate-pulse">?</text>
    </svg>
  ),

  // Q9: Thinking about you - thought bubble
  ThinkingAboutYou: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <linearGradient id="grad9" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ff6b9d', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#c44bd1', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      {/* Head silhouette */}
      <circle cx="100" cy="140" r="35" fill="url(#grad9)" opacity="0.8" />
      {/* Thought bubbles */}
      <circle cx="110" cy="95" r="8" fill="white" stroke="url(#grad9)" strokeWidth="2" className="animate-bounce-in" style={{ animationDelay: '0.2s' }} />
      <circle cx="120" cy="75" r="12" fill="white" stroke="url(#grad9)" strokeWidth="2" className="animate-bounce-in" style={{ animationDelay: '0.4s' }} />
      {/* Main thought bubble */}
      <ellipse cx="100" cy="45" rx="50" ry="35" fill="white" stroke="url(#grad9)" strokeWidth="3" className="animate-bounce-in" style={{ animationDelay: '0.6s' }} />
      {/* Heart in thought */}
      <path d="M 100 40 C 95 35, 90 35, 88 38 C 86 41, 86 44, 88 46 C 90 48, 95 53, 100 58 C 105 53, 110 48, 112 46 C 114 44, 114 41, 112 38 C 110 35, 105 35, 100 40 Z" fill="url(#grad9)" className="animate-pulse-glow" />
    </svg>
  ),

  // Q10: Stalking exes - binoculars
  StalkingExes: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <linearGradient id="grad10" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ff6b9d', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#c44bd1', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      {/* Binoculars */}
      <circle cx="70" cy="100" r="30" fill="url(#grad10)" opacity="0.8" className="animate-pulse-soft" />
      <circle cx="130" cy="100" r="30" fill="url(#grad10)" opacity="0.8" className="animate-pulse-soft" />
      <rect x="85" y="95" width="30" height="10" fill="url(#grad10)" opacity="0.8" />
      {/* Lenses */}
      <circle cx="70" cy="100" r="22" fill="white" opacity="0.6" />
      <circle cx="130" cy="100" r="22" fill="white" opacity="0.6" />
      {/* Eyes through binoculars */}
      <ellipse cx="70" cy="100" rx="10" ry="6" fill="#ff6b9d" className="animate-pulse" />
      <circle cx="70" cy="100" r="4" fill="#000" />
      <ellipse cx="130" cy="100" rx="10" ry="6" fill="#ff6b9d" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
      <circle cx="130" cy="100" r="4" fill="#000" />
      {/* Search lines */}
      <line x1="40" y1="70" x2="20" y2="50" stroke="url(#grad10)" strokeWidth="2" strokeDasharray="3,3" className="animate-pulse" />
      <line x1="160" y1="70" x2="180" y2="50" stroke="url(#grad10)" strokeWidth="2" strokeDasharray="3,3" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
    </svg>
  ),

  // Q11: Reading between lines
  ReadingBetweenLines: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <linearGradient id="grad11" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ff6b9d', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#c44bd1', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      {/* Text lines */}
      <rect x="40" y="60" width="120" height="6" rx="3" fill="url(#grad11)" opacity="0.4" className="animate-slide-up" />
      <rect x="40" y="80" width="100" height="6" rx="3" fill="url(#grad11)" opacity="0.4" className="animate-slide-up" style={{ animationDelay: '0.1s' }} />
      <rect x="40" y="100" width="110" height="6" rx="3" fill="url(#grad11)" opacity="0.4" className="animate-slide-up" style={{ animationDelay: '0.2s' }} />
      <rect x="40" y="120" width="90" height="6" rx="3" fill="url(#grad11)" opacity="0.4" className="animate-slide-up" style={{ animationDelay: '0.3s' }} />
      {/* Hidden meanings appearing */}
      <text x="50" y="75" fontSize="10" fill="url(#grad11)" fontStyle="italic" className="animate-pulse" style={{ animationDelay: '0.5s' }}>❤️</text>
      <text x="80" y="95" fontSize="10" fill="url(#grad11)" fontStyle="italic" className="animate-pulse" style={{ animationDelay: '0.7s' }}>💭</text>
      <text x="120" y="115" fontSize="10" fill="url(#grad11)" fontStyle="italic" className="animate-pulse" style={{ animationDelay: '0.9s' }}>✨</text>
      {/* Magnifying glass */}
      <circle cx="140" cy="150" r="25" fill="none" stroke="url(#grad11)" strokeWidth="4" className="animate-pulse-soft" />
      <line x1="158" y1="168" x2="175" y2="185" stroke="url(#grad11)" strokeWidth="5" strokeLinecap="round" />
      <text x="140" y="157" fontSize="16" fill="url(#grad11)" textAnchor="middle" className="animate-pulse">?</text>
    </svg>
  ),

  // Q12: Maybe = yes (question mark to checkmark)
  MaybeEqualsYes: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <linearGradient id="grad12" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ff6b9d', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#c44bd1', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      {/* Question mark */}
      <text x="60" y="110" fontSize="60" fill="url(#grad12)" fontWeight="bold" className="animate-pulse-soft">?</text>
      {/* Equal sign */}
      <rect x="95" y="75" width="20" height="8" rx="4" fill="url(#grad12)" />
      <rect x="95" y="95" width="20" height="8" rx="4" fill="url(#grad12)" />
      {/* Checkmark */}
      <path d="M 125 75 L 140 100 L 175 50" fill="none" stroke="url(#grad12)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce-in" style={{ animationDelay: '0.5s' }} />
      {/* Sparkles */}
      <circle cx="170" cy="130" r="3" fill="#ff6b9d" className="animate-pulse" />
      <circle cx="30" cy="50" r="3" fill="#c44bd1" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
      <circle cx="100" cy="140" r="2" fill="#ff8fab" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
    </svg>
  ),

  // Q13: Silence interpretation - ghost
  SilenceGhost: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <linearGradient id="grad13" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ff6b9d', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#c44bd1', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      {/* Ghost body */}
      <path
        d="M 100 50 C 70 50, 50 70, 50 100 L 50 140 L 60 135 L 70 140 L 80 135 L 90 140 L 100 135 L 110 140 L 120 135 L 130 140 L 140 135 L 150 140 L 150 100 C 150 70, 130 50, 100 50 Z"
        fill="url(#grad13)"
        opacity="0.7"
        className="animate-float-smooth"
      />
      {/* Ghost eyes */}
      <circle cx="85" cy="90" r="8" fill="white" className="animate-pulse" />
      <circle cx="115" cy="90" r="8" fill="white" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
      <circle cx="85" cy="90" r="4" fill="#000" />
      <circle cx="115" cy="90" r="4" fill="#000" />
      {/* Silence dots */}
      <circle cx="70" cy="160" r="4" fill="url(#grad13)" className="animate-bounce-in" style={{ animationDelay: '0.5s' }} />
      <circle cx="100" cy="170" r="4" fill="url(#grad13)" className="animate-bounce-in" style={{ animationDelay: '0.7s' }} />
      <circle cx="130" cy="160" r="4" fill="url(#grad13)" className="animate-bounce-in" style={{ animationDelay: '0.9s' }} />
    </svg>
  ),

  // Q14: Soulmates - two hearts connected
  Soulmates: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <linearGradient id="grad14" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ff6b9d', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#c44bd1', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      {/* Heart 1 */}
      <path
        d="M 70 80 C 65 75, 60 75, 58 78 C 56 81, 56 84, 58 86 C 60 88, 65 93, 70 98 C 75 93, 80 88, 82 86 C 84 84, 84 81, 82 78 C 80 75, 75 75, 70 80 Z"
        fill="url(#grad14)"
        className="animate-pulse-glow"
      />
      {/* Heart 2 */}
      <path
        d="M 130 80 C 125 75, 120 75, 118 78 C 116 81, 116 84, 118 86 C 120 88, 125 93, 130 98 C 135 93, 140 88, 142 86 C 144 84, 144 81, 142 78 C 140 75, 135 75, 130 80 Z"
        fill="url(#grad14)"
        className="animate-pulse-glow"
        style={{ animationDelay: '0.5s' }}
      />
      {/* Connection line with hearts */}
      <line x1="70" y1="90" x2="130" y2="90" stroke="url(#grad14)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
      {/* Center heart */}
      <path d="M 100 85 C 95 80, 90 80, 88 83 C 86 86, 86 89, 88 91 C 90 93, 95 98, 100 103 C 105 98, 110 93, 112 91 C 114 89, 114 86, 112 83 C 110 80, 105 80, 100 85 Z" fill="url(#grad14)" className="animate-bounce-in" />
      {/* Sparkles around */}
      <circle cx="50" cy="70" r="2" fill="#ff6b9d" className="animate-pulse" />
      <circle cx="150" cy="70" r="2" fill="#c44bd1" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
      <circle cx="100" cy="50" r="2" fill="#ff8fab" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
      <circle cx="40" cy="100" r="2" fill="#ff6b9d" className="animate-pulse" style={{ animationDelay: '0.9s' }} />
      <circle cx="160" cy="100" r="2" fill="#c44bd1" className="animate-pulse" style={{ animationDelay: '1.2s' }} />
      {/* Text */}
      <text x="100" y="140" fontSize="16" fill="url(#grad14)" textAnchor="middle" fontWeight="bold" className="animate-slide-up">∞</text>
    </svg>
  ),

  // Q15: "When you want" timing - calendar/now
  WhenYouWant: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <linearGradient id="grad15" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ff6b9d', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#c44bd1', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      {/* Calendar */}
      <rect x="50" y="60" width="100" height="90" rx="10" fill="white" stroke="url(#grad15)" strokeWidth="3" />
      <rect x="50" y="60" width="100" height="25" rx="10" fill="url(#grad15)" />
      {/* Calendar rings */}
      <circle cx="70" cy="60" r="5" fill="none" stroke="url(#grad15)" strokeWidth="3" />
      <circle cx="130" cy="60" r="5" fill="none" stroke="url(#grad15)" strokeWidth="3" />
      {/* Calendar grid */}
      <rect x="60" y="95" width="15" height="15" rx="3" fill="url(#grad15)" opacity="0.2" />
      <rect x="80" y="95" width="15" height="15" rx="3" fill="url(#grad15)" opacity="0.2" />
      <rect x="100" y="95" width="15" height="15" rx="3" fill="url(#grad15)" opacity="0.2" />
      <rect x="120" y="95" width="15" height="15" rx="3" fill="url(#grad15)" opacity="0.2" />
      <rect x="60" y="115" width="15" height="15" rx="3" fill="url(#grad15)" opacity="0.2" />
      <rect x="80" y="115" width="15" height="15" rx="3" fill="url(#grad15)" opacity="0.8" className="animate-pulse-glow" />
      {/* "NOW!" text */}
      <text x="100" y="175" fontSize="24" fill="url(#grad15)" textAnchor="middle" fontWeight="bold" className="animate-bounce-in">NOW!</text>
      {/* Urgency arrows */}
      <path d="M 30 100 L 45 100 L 40 95 M 45 100 L 40 105" stroke="url(#grad15)" strokeWidth="3" strokeLinecap="round" className="animate-pulse" />
      <path d="M 170 100 L 155 100 L 160 95 M 155 100 L 160 105" stroke="url(#grad15)" strokeWidth="3" strokeLinecap="round" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
    </svg>
  ),
};

export default QuizIllustrations;
