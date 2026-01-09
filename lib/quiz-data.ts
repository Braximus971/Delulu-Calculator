export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    value: number;
  }[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Ton ex regarde tes stories. Ça veut dire quoi ?",
    options: [
      { text: "Rien, c'est random", value: 0 },
      { text: "Il/elle pense à moi", value: 1 },
      { text: "C'est un signe qu'on va se remettre ensemble", value: 2 },
      { text: "Le destin nous rapproche", value: 3 },
    ],
  },
  {
    id: 2,
    question: "Il/elle a mis 3h à répondre. Tu penses quoi ?",
    options: [
      { text: "Il/elle était occupé(e), normal", value: 0 },
      { text: "Il/elle a oublié de répondre", value: 1 },
      { text: "Il/elle joue avec moi pour me tester", value: 2 },
      { text: "Il/elle est en train de composer LA réponse parfaite", value: 3 },
    ],
  },
  {
    id: 3,
    question: "Il/elle a liké ta photo. C'est un signe ?",
    options: [
      { text: "Non, juste un like", value: 0 },
      { text: "Peut-être qu'il/elle pense à moi", value: 1 },
      { text: "Clairement il/elle veut qu'on parle", value: 2 },
      { text: "C'est un appel au secours, il/elle m'aime encore", value: 3 },
    ],
  },
  {
    id: 4,
    question: "Combien de fois tu checks son profil par jour ?",
    options: [
      { text: "Jamais", value: 0 },
      { text: "1-2 fois", value: 1 },
      { text: "5-10 fois", value: 2 },
      { text: "J'ai perdu le compte", value: 3 },
    ],
  },
  {
    id: 5,
    question: "Tu vois des \"signes du destin\" partout ?",
    options: [
      { text: "Non, pas vraiment", value: 0 },
      { text: "Parfois, quelques coïncidences", value: 1 },
      { text: "Souvent, c'est troublant", value: 2 },
      { text: "Tout est un signe, l'univers nous parle", value: 3 },
    ],
  },
  {
    id: 6,
    question: "Tu imagines votre mariage après le 1er date ?",
    options: [
      { text: "Non, jamais", value: 0 },
      { text: "Ça m'a traversé l'esprit", value: 1 },
      { text: "Oui, j'ai déjà des idées", value: 2 },
      { text: "J'ai choisi les prénoms des enfants", value: 3 },
    ],
  },
  {
    id: 7,
    question: "\"On est fait l'un pour l'autre\" après combien de temps ?",
    options: [
      { text: "Jamais dit ça", value: 0 },
      { text: "Après plusieurs mois", value: 1 },
      { text: "Après quelques semaines", value: 2 },
      { text: "Dès le premier regard", value: 3 },
    ],
  },
  {
    id: 8,
    question: "Tu analyses chaque emoji ?",
    options: [
      { text: "Non, c'est juste des emojis", value: 0 },
      { text: "Un peu, selon le contexte", value: 1 },
      { text: "Oui, chaque emoji compte", value: 2 },
      { text: "J'ai un tableau d'analyse", value: 3 },
    ],
  },
  {
    id: 9,
    question: "Tu crois qu'il/elle pense à toi là maintenant ?",
    options: [
      { text: "Probablement pas", value: 0 },
      { text: "Peut-être de temps en temps", value: 1 },
      { text: "Oui, souvent", value: 2 },
      { text: "Tout le temps, j'en suis sûr(e)", value: 3 },
    ],
  },
  {
    id: 10,
    question: "Tu stalk ses ex ?",
    options: [
      { text: "Jamais", value: 0 },
      { text: "Une fois par curiosité", value: 1 },
      { text: "Régulièrement", value: 2 },
      { text: "Je connais leur vie mieux qu'eux", value: 3 },
    ],
  },
  {
    id: 11,
    question: "Tu lis entre les lignes de chaque message ?",
    options: [
      { text: "Non, je prends au premier degré", value: 0 },
      { text: "Parfois", value: 1 },
      { text: "Souvent", value: 2 },
      { text: "Chaque mot a 10 significations", value: 3 },
    ],
  },
  {
    id: 12,
    question: "\"Peut-être\" = oui pour toi ?",
    options: [
      { text: "Non, peut-être = peut-être", value: 0 },
      { text: "Ça dépend du contexte", value: 1 },
      { text: "Généralement oui", value: 2 },
      { text: "Peut-être = oui confirmé", value: 3 },
    ],
  },
  {
    id: 13,
    question: "Le silence = il/elle est occupé(e) ou t'oublie ?",
    options: [
      { text: "Occupé(e), logique", value: 0 },
      { text: "Les deux sont possibles", value: 1 },
      { text: "Probablement il/elle m'oublie", value: 2 },
      { text: "C'est fini, il/elle me ghoste", value: 3 },
    ],
  },
  {
    id: 14,
    question: "Tu crois aux âmes sœurs ?",
    options: [
      { text: "Non", value: 0 },
      { text: "Peut-être", value: 1 },
      { text: "Oui", value: 2 },
      { text: "J'ai trouvé la mienne", value: 3 },
    ],
  },
  {
    id: 15,
    question: "\"On se voit quand tu veux\" = quand pour toi ?",
    options: [
      { text: "Quand on aura le temps", value: 0 },
      { text: "Cette semaine ?", value: 1 },
      { text: "Demain !", value: 2 },
      { text: "Maintenant, j'arrive", value: 3 },
    ],
  },
];

export interface ResultCategory {
  title: string;
  emoji: string;
  description: string[];
  minScore: number;
  maxScore: number;
}

export const resultCategories: ResultCategory[] = [
  {
    title: "RÉALISTE",
    emoji: "😐",
    description: [
      "Tu gardes les pieds sur terre.",
      "Peut-être même trop...",
      "Tu ne rêves jamais ?",
    ],
    minScore: 0,
    maxScore: 9,
  },
  {
    title: "LÉGER DELULU",
    emoji: "😊",
    description: [
      "Tu as un peu d'espoir.",
      "C'est sain. C'est normal.",
      "Tu rêves juste ce qu'il faut.",
    ],
    minScore: 10,
    maxScore: 18,
  },
  {
    title: "DELULU MODÉRÉ",
    emoji: "✨",
    description: [
      "Tu navigues entre rêve et réalité.",
      "Parfois tu décroches, mais tu reviens.",
      "L'équilibre est fragile.",
    ],
    minScore: 19,
    maxScore: 27,
  },
  {
    title: "MEGA DELULU",
    emoji: "🌟",
    description: [
      "Tu vis dans ton propre film romantique.",
      "La réalité est devenue optionnelle.",
      "Mais au moins tu es heureux/heureuse ?",
    ],
    minScore: 28,
    maxScore: 36,
  },
  {
    title: "DELULU TERMINAL",
    emoji: "💫",
    description: [
      "Houston, on a un problème.",
      "Tu vis dans une fanfiction.",
      "La réalité t'a dit aurevoir il y a longtemps.",
      "Delulu is NOT the solulu.",
    ],
    minScore: 37,
    maxScore: 45,
  },
];

export function getResultCategory(score: number): ResultCategory {
  return resultCategories.find(
    (category) => score >= category.minScore && score <= category.maxScore
  ) || resultCategories[0];
}

export function getPercentage(score: number): number {
  return Math.round((score / 45) * 100);
}
