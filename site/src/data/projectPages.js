const DEV = import.meta.env.DEV;
export const HOSTED = {
  etodo: import.meta.env.VITE_ETODO_URL || (DEV ? "http://localhost:5173" : ""),
  yowl: import.meta.env.VITE_YOWL_URL || (DEV ? "http://localhost:5174" : ""),
  elizaApi: import.meta.env.VITE_ELIZA_API || (DEV ? "http://127.0.0.1:8787" : ""),
  elizaInvite: "",
};

export const FIGMA = {
  desktop:
    "https://www.figma.com/proto/1dDHq996Kk5qa3rWck6MTT/Yowl?node-id=134-748&t=IoiZUiW3qF1CAb0v-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=57%3A470",
  mobile:
    "https://www.figma.com/proto/1dDHq996Kk5qa3rWck6MTT/Yowl?node-id=44-363&t=fB4sr2TDGq1xFPMZ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=57%3A630&show-proto-sidebar=1",
};

export const projectPages = {
  eliza: {
    slug: "eliza",
    title: "ELIZA",
    subtitle: "Epibot, un assistant pédagogique pour Discord",
    year: "2025",
    module: "Epitech · B-AIA-210",
    intro:
      "Epibot répond aux questions des élèves avec un modèle de langage, garde le fil de la conversation et se défend contre les détournements de prompt. Il guide avec des indices au lieu de donner le code complet.",
    tags: ["Python", "discord.py", "Hugging Face", "Llama 3", "NLP"],
    facts: [
      ["Modèle", "Meta-Llama-3-8B-Instruct, via l'API Hugging Face"],
      ["Mémoire", "10 derniers messages gardés par utilisateur"],
      ["Contexte PDF", "Texte extrait avec PyMuPDF, jusqu'à ~2000 caractères"],
      ["Sécurité", "11 règles de détection, blocage au 3e avertissement"],
    ],
    reflection:
      "Projet collaboratif. J'y ai construit ma première IA utilisable sur un bot Discord, et j'ai appris à gérer sa sécurité et son éthique.",
  },
  "hack-juice": {
    slug: "hack-juice",
    title: "Hack & Juice",
    subtitle: "Pentest de l'OWASP Juice Shop",
    year: "2025",
    module: "Epitech · B-SEC-100",
    intro:
      "Mon premier projet de cybersécurité : attaquer l'OWASP Juice Shop, une application volontairement vulnérable, et documenter chaque faille avec sa méthode, sa technique et des preuves en captures.",
    tags: ["Pentesting", "Burp Suite", "OWASP", "SQLi", "XSS"],
    facts: [
      ["Cible", "OWASP Juice Shop, en environnement de test contrôlé"],
      ["Résultat", "Top 2 Strasbourg · 37e en France"],
      ["Livrable", "Un rapport par challenge : méthodologie, technique, preuves"],
      ["Équipe", "En binôme, sous le nom GoOf Industry"],
    ],
    reflection:
      "J'ai appris à trouver des failles critiques et à prioriser les vulnérabilités selon leur criticité.",
  },
  exegol: {
    slug: "exegol",
    title: "Exegol",
    subtitle: "Hacking éthique : douze machines vulnérables à compromettre",
    year: "2026",
    module: "Epitech · B-SPE-321",
    intro:
      "Une série de machines volontairement vulnérables à attaquer de la reconnaissance jusqu'à l'élévation de privilèges, en environnement de test isolé. Chaque compromission donne lieu à un write-up : la méthode, les commandes, et des captures qui prouvent chaque étape.",
    tags: ["Hacking éthique", "Nmap", "Hydra", "Linux", "Reconnaissance"],
    facts: [
      ["Cible", "Machines Linux isolées, redéployées à chaque session"],
      ["Démarche", "Reconnaissance → énumération → accès → élévation de privilèges"],
      ["Livrable", "Un write-up par machine, avec les preuves en captures"],
      ["Équipe", "En binôme, sept des douze write-ups rédigés avec mon contribution"],
    ],
    reflection:
      "J'ai appris à enchaîner les étapes d'une intrusion de façon méthodique et à documenter chaque faille pour qu'un autre puisse la reproduire et la corriger.",
  },
  cybergrange: {
    slug: "cybergrange",
    title: "Stage - La CyberGrange",
    subtitle: "Consultant cybersécurité : une plateforme de sensibilisation immersive",
    year: "2026",
    module: "Stage en entreprise · La CyberGrange",
    intro:
      "Mon stage de consultant en cybersécurité, où j'ai conçu une plateforme de sensibilisation : une formation immersive qui place l'utilisateur dans une journée d'entreprise en 3D, doublée d'un simulateur de poste Windows. À travers douze mises en situation réelles, le joueur forge ses réflexes face aux mots de passe faibles, au phishing, au verrouillage de session.",
    tags: ["Cybersécurité", "Sensibilisation", "Babylon.js", "JavaScript", "Jeu web"],
    facts: [
      ["Objectif", "Apprendre les bons réflexes de sécurité par le jeu, pas par un diaporama"],
      ["Jeu 3D", "Une journée d'intégration à la première personne, dans les bureaux de l'entreprise"],
      ["Simulateur 2D", "Un poste Windows reconstitué, avec douze niveaux de mises en situation"],
      ["Thèmes", "Mots de passe forts, verrouillage de session, phishing, faux support, mobilité"],
    ],
    reflection:
      "Un vrai projet de consultant : traduire des enjeux de sécurité en une expérience que n'importe quel employé comprend et retient. C'est là que j'ai mesuré à quel point la sensibilisation compte autant que la technique.",
    demo: "https://maisonseyf.com/CybergrangeV2/frontend/public/",
  },
  "stage-beyer": {
    slug: "stage-beyer",
    title: "Stages - Groupe Beyer",
    subtitle: "Administration système et sécurité, au fil de cinq stages",
    year: "5 stages",
    module: "Cinq stages en entreprise · Groupe Beyer",
    intro:
      "Cinq stages au sein du groupe Beyer, qui m'ont vu passer de la découverte à des missions déployées en production pour tout le personnel. Trois en ressortent : un gestionnaire de mots de passe, le déploiement de Windows 11 sur les postes, et un script PowerShell pour les configurer. S'y ajoutent du réseau, du transfert de données et beaucoup de support au quotidien.",
    tags: ["Sécurité", "Windows Server", "MDT", "PowerShell", "Réseau", "Linux"],
    facts: [
      ["Fidélité", "Cinq stages dans la même entreprise, de la découverte aux missions de confiance"],
      ["Mots de passe", "Gestionnaire open source configuré pour tout le groupe, avec renouvellement automatique"],
      ["Déploiement", "Windows 11 installé par le réseau grâce à un serveur Windows et MDT"],
      ["Script", "Outil PowerShell avec interface pour installer les logiciels et configurer un poste"],
      ["Terrain", "Brassage réseau d'un nouveau secrétariat, transfert de données, support quotidien"],
    ],
    reflection:
      "Cinq stages dans la même entreprise, c'est une relation de confiance qui se construit : on finit par me confier des outils critiques utilisés chaque jour. C'est là que ma perception de la sécurité et de la responsabilité en entreprise a vraiment évolué.",
  },
  yowl: {
    slug: "yowl",
    title: "Yowl",
    subtitle: "Un seul endroit pour suivre films, séries, livres et jeux",
    year: "2025",
    module: "Epitech · B-TBM-100",
    intro:
      "Yowl rassemble le suivi, la notation et la découverte d'œuvres culturelles dans une seule application, avec une communauté qui partage ses avis. Le projet suit toute la démarche produit, de la recherche au pitch.",
    tags: ["Figma", "UX", "React", "Tailwind", "MySQL"],
    facts: [
      ["Problème", "Les œuvres sont dispersées entre plusieurs plateformes"],
      ["Benchmark", "Letterboxd, Metacritic, Serializd, BookVillage"],
      ["Objectif", "100 inscrits le premier mois, satisfaction > 8/10 à six mois"],
      ["Méthode", "Personas, parcours, maquettes, tests, priorisation MoSCoW"],
    ],
    reflection:
      "J'ai dû imaginer une plateforme capable de se démarquer de ses concurrentes tout en reprenant les fonctionnalités les plus utilisées.",
  },
  etodo: {
    slug: "etodo",
    title: "E-TODO",
    subtitle: "Une badgeuse et une todo list pour les équipes",
    year: "2025",
    module: "Epitech · B-WEB-101",
    intro:
      "Un manager crée des utilisateurs et suit leur présence grâce à un chronomètre de badgeage. Chaque employé gère aussi ses tâches dans une todo list en colonnes.",
    tags: ["React", "Express.js", "Prisma", "MySQL", "Docker"],
    facts: [
      ["Front-end", "React 19, Vite, Tailwind 4, glisser-déposer des tâches"],
      ["API", "Express, authentification JWT (1 h), mots de passe hachés avec bcrypt"],
      ["Données", "MySQL via Prisma : utilisateurs, tâches, sessions de badgeage"],
      ["Confort", "4 langues, thème sombre, mode daltonien, widget météo"],
    ],
    reflection:
      "J'ai appris à utiliser Express.js et MySQL, et amélioré mes connaissances sur Docker.",
  },
};

export const projectOrder = ["cybergrange", "hack-juice", "exegol", "stage-beyer", "etodo", "yowl", "eliza"];
