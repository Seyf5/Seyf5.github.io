# Portfolio - Seyf Sfaxi

Mon portfolio de developpeur : **https://seyf5.github.io**

Etudiant a Epitech, je rassemble ici les projets que j'ai construits, chacun
avec son contexte, ses choix techniques et ce que j'en ai retenu.

## Les projets

### Projet NationsGlory
Plugin Minecraft de tracage d'items, ecrit en Java pour un serveur Bukkit 1.6.4.
Il marque chaque objet d'un identifiant unique et journalise ses echanges entre
joueurs, pour retrouver l'origine d'un item duplique.

### E-TODO
Badgeuse et todo list pour les equipes. Un manager cree des comptes et suit la
presence de ses employes ; chacun gere ses taches.
React, Express, Prisma, MySQL, le tout dans Docker.

### Yowl
Application pour suivre films, series, livres et jeux au meme endroit.
Projet de recherche utilisateur : interviews, personas, wireframes, maquettes
Figma, tests et priorisation du MVP.

### Hack & Juice
Pentest de l'OWASP Juice Shop, une application volontairement vulnerable.
33 write-ups detaillant la methodologie, les risques et les correctifs.

### ELIZA
Epibot, un assistant pedagogique pour Discord. Il repond aux questions des
eleves a partir d'un PDF de cours, avec des garde-fous qui bloquent les
demandes de corriges.

## Le code du site

Le site est fait avec React, Vite et Tailwind.

Tout est dans le dossier `site/` :

- `src/` : les pages et les composants React (fichiers `.jsx`)
- `static/` : les images, vidéos et le CV
- `config/` : la configuration de Vite, Tailwind et PostCSS
- `public/` : le site construit, créé par `npm run build` (non versionné)

Pour le lancer chez soi : `cd site`, `npm install` puis `npm run dev`.
À chaque push, GitHub construit le site et le publie sur GitHub Pages.
