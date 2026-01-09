# 💫 Delulu Calculator

Un calculateur viral pour mesurer ton niveau de "delulu" en amour !

**15 questions pertinentes pour calculer ton niveau de Delulu**

## ✨ Concept

"Delulu Calculator" permet aux utilisateurs de découvrir leur niveau de délire en amour/dating à travers 15 questions fun et engageantes. Le projet s'inspire de la tendance massive TikTok/Gen Z où les gens s'auto-analysent sur leur niveau de "delulu" (delusional).

### Tagline
**"À quel point es-tu delulu ?"**

## 🎯 Fonctionnalités

- ✅ Quiz interactif de 15 questions
- ✅ Système de scoring intelligent (0-45 points)
- ✅ 5 catégories de résultats :
  - 😐 **RÉALISTE** (0-9 pts)
  - 😊 **LÉGER DELULU** (10-18 pts)
  - ✨ **DELULU MODÉRÉ** (19-27 pts)
  - 🌟 **MEGA DELULU** (28-36 pts)
  - 💫 **DELULU TERMINAL** (37-45 pts)
- ✅ Partage social (Twitter, Facebook, WhatsApp)
- ✅ Design responsive mobile-first
- ✅ Animations et effets dreamy
- ✅ Compteur de participants en temps réel

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Database**: Turso (SQLite edge database)
- **Hosting**: Vercel
- **Domain**: delulu-calculator.fr

## 📦 Installation

```bash
# Clone le repository
git clone https://github.com/Braximus971/Delulu-Calculator.git
cd Delulu-Calculator

# Installe les dépendances
npm install

# Copie le fichier d'environnement
cp .env.example .env

# Lance le serveur de développement
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000) dans ton navigateur.

## 🗄️ Configuration Turso (Optionnel)

Pour activer le système de statistiques et le leaderboard :

1. Crée un compte sur [turso.tech](https://turso.tech)
2. Crée une nouvelle database :
   ```bash
   turso db create delulu-calculator
   ```
3. Récupère les credentials :
   ```bash
   turso db show delulu-calculator
   ```
4. Ajoute les variables d'environnement dans `.env` :
   ```
   TURSO_DATABASE_URL=libsql://your-database.turso.io
   TURSO_AUTH_TOKEN=your-auth-token
   ```

### Schema de la base de données

```sql
CREATE TABLE results (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  score INTEGER NOT NULL,
  category TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE stats (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  total_tests INTEGER DEFAULT 0,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## 🎨 Design

- **Couleurs**: Dégradé rose/violet (#FF6B9D → #C44BD1)
- **Fonts**: Inter, Plus Jakarta Sans
- **Vibe**: Dreamy, cute, Gen Z
- **Mobile-first**: Responsive et touch-friendly

## 📱 Stratégie de Viralité

### Hashtags recommandés
- #Delulu
- #DeluluCalculator
- #Dating
- #GenZ
- #Trending

### Posts suggestions
- "Je teste mon niveau de delulu... 89% 💀"
- Screenshot du résultat + "Et toi ?"
- Stories Instagram/TikTok avec le lien

## 💰 Monétisation

- Google AdSense après les résultats
- Estimation : 10k visiteurs = 50-200€
- Non-intrusif pour préserver l'expérience utilisateur

## 🚢 Déploiement sur Vercel

```bash
# Build du projet
npm run build

# Déploiement automatique via Vercel
# ou push sur GitHub (si connecté à Vercel)
git push origin main
```

Le site sera automatiquement déployé sur Vercel.

## 📂 Structure du projet

```
delulu-calculator/
├── app/
│   ├── api/
│   │   └── stats/
│   │       └── route.ts      # API pour statistiques
│   ├── quiz/
│   │   └── page.tsx          # Page du quiz
│   ├── results/
│   │   └── page.tsx          # Page des résultats
│   ├── globals.css           # Styles globaux
│   ├── layout.tsx            # Layout principal
│   └── page.tsx              # Page d'accueil
├── components/               # Composants réutilisables (à venir)
├── lib/
│   └── quiz-data.ts          # Données du quiz et logique
├── public/                   # Assets statiques
└── README.md
```

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésite pas à ouvrir une issue ou une pull request.

## 📄 License

MIT

---

**Made with 💖 by delulu people, for delulu people**

🌟 Si tu aimes ce projet, n'oublie pas de lui mettre une étoile !
