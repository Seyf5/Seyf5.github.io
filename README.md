# Portfolio — Seyf Sfaxi

Portfolio — Epitech Strasbourg, promo 2028.

## Stack

- **React 18** + **Vite**
- **Tailwind CSS** + **tailwindcss-animate**
- **Framer Motion** pour les animations
- **Lucide React** pour les icônes
- **Sonner** pour les toasts
- **React Router v6**

## Lancer en local

```bash
npm install
npm run dev
```

## Build pour GitHub Pages

```bash
npm run build
```

Déployer le dossier `dist/` sur GitHub Pages.

## Structure

```
src/
├── components/
│   └── site/          # Navbar, Footer, Section, PageWrapper, ScrollToTop
├── lib/               # motion.js, utils.js
├── pages/             # Home, About, Projects, Journey, Contact, NotFound
├── App.jsx
├── main.jsx
└── index.css
```

## Pages

| Route | Contenu |
|-------|---------|
| `/` | Hero, stats, highlights, CTA |
| `/about` | Bio, traits, stack, hors-école |
| `/projects` | 6 projets avec réflexions |
| `/journey` | Timeline parcours + leçons |
| `/contact` | Formulaire + coordonnées |