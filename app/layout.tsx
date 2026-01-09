import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Delulu Calculator - À quel point es-tu delulu ?",
  description: "Réponds à 15 questions et découvre ton niveau de délire en amour. Es-tu réaliste ou delulu terminal ? 💫",
  keywords: ["delulu", "calculator", "test", "quiz", "dating", "amour", "gen z", "tiktok"],
  openGraph: {
    title: "Delulu Calculator - À quel point es-tu delulu ?",
    description: "Réponds à 15 questions et découvre ton niveau de délire en amour 💫",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Delulu Calculator",
    description: "Découvre ton niveau de delulu 💫",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
