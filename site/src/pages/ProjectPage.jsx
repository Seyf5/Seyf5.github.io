import { lazy, Suspense } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import PageWrapper from "@/components/site/PageWrapper";
import Section, { Eyebrow } from "@/components/site/Section";
import NotFound from "@/pages/NotFound";
import { projectPages, projectOrder } from "@/data/projectPages";
import { CARD, H2, Reveal, StatusPill } from "@/components/projects/Blocks";
import { YowlGallery, YowlPitch, YowlProcess } from "@/components/projects/YowlGallery";
import Captures from "@/components/projects/Captures";

const CAPTURES_ETODO = [
  ["tableau-de-bord", "Vue manager : sa pointeuse à gauche, l'historique de badgeage de toute l'équipe au centre, sa todo list à droite"],
  ["espace-employe", "Vue employé : le même écran, mais il ne voit que ses propres sessions. L'API renvoie une erreur 403 s'il réclame celles des autres"],
  ["creation-utilisateur", "Création d'un compte, avec le choix du rôle : manager ou employé"],
  ["profil", "Profil : modifier son nom, son email ou son mot de passe, et supprimer son compte"],
  ["connexion", "Connexion, avec thème clair ou sombre, mode daltonien et quatre langues"],
];

const CAPTURES_CYBERGRANGE = [
  ["les-niveaux", "Le cœur pédagogique : douze mises en situation, du premier réflexe à la gestion de crise - phishing, faux support, sécurité en mobilité"],
  ["accueil", "L'écran d'accueil de la formation immersive : une journée d'intégration en entreprise"],
  ["jeu-3d", "Le jeu 3D à la première personne : le joueur arrive dans les bureaux pour son premier jour"],
  ["simulateur-windows", "Le simulateur reconstitue un vrai poste Windows, jusqu'à l'écran de verrouillage"],
];

const CAPTURES_EXEGOL = [
  ["scan-nmap", "Reconnaissance : un scan Nmap révèle les services exposés et leurs versions"],
  ["reconnaissance", "Énumération du système une fois à l'intérieur : processus en cours et clé SSH privée laissée accessible"],
  ["brute-force", "Attaque par force brute d'un service d'authentification avec Hydra"],
  ["acces-obtenu", "Accès obtenu à la machine après exploitation de la faille"],
  ["elevation-privileges", "Élévation de privilèges : passage d'un compte limité à un compte à droits étendus"],
  ["flag-capture", "Preuve de compromission : le drapeau user.txt récupéré sur la cible"],
];

const HackExplorer = lazy(() => import("@/components/projects/HackExplorer"));

function Block({ eyebrow, title, pill, children, className = "" }) {
  return (
    <Section className={`!pt-0 ${className}`}>
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4 mb-7">
          <div>
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <H2>{title}</H2>
          </div>
          {pill}
        </div>
        {children}
      </Reveal>
    </Section>
  );
}

function Facts({ facts }) {
  return (
    <dl className="grid gap-3 sm:grid-cols-2">
      {facts.map(([k, v]) => (
        <div key={k} className={`${CARD} p-5`}>
          <dt className="text-xs uppercase tracking-[0.2em] font-bold text-[#5865f2]">{k}</dt>
          <dd className="mt-2 text-[15px] text-[#dbdee1] leading-relaxed">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

function Steps({ items }) {
  return (
    <ol className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
      {items.map(([k, v], i) => (
        <li key={k} className={`${CARD} p-5`}>
          <span className="font-mono text-xs text-[#5865f2]">{String(i + 1).padStart(2, "0")}</span>
          <p className="mt-1 font-display text-lg font-semibold text-white">{k}</p>
          <p className="mt-2 text-sm text-[#b5bac1] leading-relaxed">{v}</p>
        </li>
      ))}
    </ol>
  );
}

function Table({ head, rows }) {
  return (
    <div className={`${CARD} overflow-x-auto`}>
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-[#313338] text-xs uppercase tracking-[0.15em] text-[#80848e]">
            {head.map((h) => (
              <th key={h} className="px-5 py-3 font-bold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-[#313338]/60 last:border-0 align-top">
              {r.map((c, j) => (
                <td
                  key={j}
                  className={`px-5 py-3 ${j === 0 ? "font-mono text-[13px] text-white whitespace-nowrap" : "text-[#b5bac1]"}`}
                >
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Flow({ nodes }) {
  return (
    <div className="flex flex-col md:flex-row md:items-stretch gap-3">
      {nodes.map(([k, v], i) => (
        <div key={k} className="flex md:flex-1 flex-col md:flex-row items-stretch gap-3">
          <div className={`${CARD} p-4 flex-1`}>
            <p className="font-display font-semibold text-white">{k}</p>
            <p className="mt-1 text-xs text-[#b5bac1] leading-relaxed">{v}</p>
          </div>
          {i < nodes.length - 1 && (
            <span
              className="self-center text-[#5865f2] font-mono rotate-90 md:rotate-0"
              aria-hidden="true"
            >
              →
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

function Bullets({ items }) {
  return (
    <ul className="space-y-3">
      {items.map(([k, v]) => (
        <li key={k} className={`${CARD} p-5`}>
          <p className="font-semibold text-white">{k}</p>
          <p className="mt-1.5 text-sm text-[#b5bac1] leading-relaxed">{v}</p>
        </li>
      ))}
    </ul>
  );
}

function ElizaBody() {
  return (
    <>

      <Block eyebrow="Fonctionnement" title="Le trajet d'une question.">
        <Flow
          nodes={[
            ["/chat", "L'élève pose sa question, avec un PDF en option."],
            ["Garde-fous", "11 motifs repèrent les détournements. 3 alertes bloquent l'utilisateur."],
            ["Contexte", "Texte du PDF (~2000 caractères) et 10 derniers messages."],
            ["Llama 3 8B", "Modèle interrogé via Hugging Face, avec un prompt pédagogique."],
            ["Filtre de sortie", "Réponse remplacée si suspecte, coupée à 1900 caractères."],
          ]}
        />
      </Block>

      <Block eyebrow="Commandes" title="Trois commandes slash.">
        <Table
          head={["Commande", "Ce qu'elle fait"]}
          rows={[
            ["/chat question [fichier]", "Pose une question à Epibot, avec un PDF optionnel comme contexte."],
            ["/reset", "Efface la mémoire de conversation de l'utilisateur."],
            ["/revoke membre", "Remet à zéro les avertissements d'un membre. Réservée au propriétaire."],
          ]}
        />
      </Block>

      <Block eyebrow="Recul" title="Ce que je corrigerais.">
        <Bullets
          items={[
            [
              "Les secrets dans des variables d'environnement",
              "Les jetons d'accès ne doivent jamais vivre dans le code source : ils se chargent depuis l'environnement et se régénèrent s'ils ont été exposés.",
            ],
            [
              "Des motifs moins sensibles à l'ordre des mots",
              "« Le corrigé complet avec tout le code » est bloqué alors que « le code complet » passe : les règles dépendent de l'ordre des mots. Une liste de motifs ne suffit pas, il faudrait la compléter par une modération côté modèle.",
            ],
            [
              "Restreindre /revoke par identifiant Discord",
              "Comparer le nom d'utilisateur est fragile, car un nom se change. L'identifiant, lui, est stable.",
            ],
            [
              "Garder les avertissements au redémarrage",
              "Mémoire et strikes vivent en RAM. Une petite base SQLite ou un fichier JSON suffirait à les conserver.",
            ],
          ]}
        />
      </Block>
    </>
  );
}

function HackBody() {
  return (
    <>
      <Block
        eyebrow="Write-ups"
        title="Parcours mes write-ups."
        pill={<StatusPill kind="browser">Tourne dans ton navigateur</StatusPill>}
      >
        <Suspense
          fallback={
            <div className={`${CARD} p-10 text-center text-sm text-[#80848e]`}>
              Chargement des write-ups…
            </div>
          }
        >
          <HackExplorer />
        </Suspense>
      </Block>

      <Block eyebrow="Méthode" title="Un rapport, toujours la même structure.">
        <Steps
          items={[
            ["Vulnérabilité", "Le challenge est situé dans la classification OWASP et son niveau de difficulté."],
            ["Méthodologie", "Les étapes exactes, de la reconnaissance à l'exploitation, rejouables par un autre."],
            ["Risques", "L'impact réel : ce qu'un attaquant gagne et ce que l'entreprise perd."],
            ["Actions recommandées", "Les correctifs à appliquer, car trouver la faille ne suffit pas."],
            ["Preuves", "Captures des requêtes et des réponses, souvent interceptées avec Burp Suite."],
            ["Outils et techniques", "Burp Suite, injections SQL, XSS, manipulation de JWT, entre autres."],
          ]}
        />
        <p className="mt-6 text-xs text-[#80848e] leading-relaxed max-w-3xl">
          Projet strictement pédagogique, réalisé sur l'OWASP Juice Shop, une application
          volontairement vulnérable et isolée. Ces techniques ne doivent jamais être utilisées sur un
          système réel sans autorisation explicite.
        </p>
      </Block>
    </>
  );
}

function YowlBody() {
  return (
    <>
      <Block eyebrow="Démarche" title="Neuf étapes, de l'idée au pitch.">
        <YowlProcess />
        <p className="mt-5 text-sm text-[#b5bac1] max-w-3xl leading-relaxed">
          Chaque étape a son livrable dans le dépôt : benchmark et interviews, quatre personas, parcours
          utilisateur, wireframes, maquettes, prototype, protocole de test, définition du MVP et pitch deck.
        </p>
      </Block>

      <Block eyebrow="Design" title="Des wireframes aux maquettes.">
        <YowlGallery />
      </Block>

      <Block eyebrow="Priorisation" title="Ce qui entre dans le MVP.">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] items-start">
          <figure className={`${CARD} overflow-hidden`}>
            <img
              src="/projets/yowl/moscow.webp"
              alt="Matrice MoSCoW de Yowl : fonctionnalités Must have, Should have, Could have et Won't have"
              loading="lazy"
              className="block w-full h-auto"
            />
          </figure>
          <div className="space-y-4 text-[15px] text-[#b5bac1] leading-relaxed">
            <p>
              Le MVP doit permettre de cataloguer des œuvres, de les marquer « à voir » ou « vu », de les
              noter, d'écrire un court avis et de consulter les profils publics des autres.
            </p>
            <p>
              Les premiers tests utilisateurs ont montré que la navigation est jugée plus logique sur
              ordinateur que sur mobile, et que les boutons demandaient parfois un instant pour être repérés.
            </p>
          </div>
        </div>
      </Block>

      <Block eyebrow="Pitch" title="Le pitch deck.">
        <YowlPitch />
      </Block>
    </>
  );
}

function EtodoBody() {
  return (
    <>
      <Block eyebrow="L'application" title="Les écrans principaux.">
        <Captures base="/projets/etodo" items={CAPTURES_ETODO} />
      </Block>

      <Block eyebrow="Architecture" title="De l'interface à la base.">
        <Flow
          nodes={[
            ["Front-end", "React 19 et Vite, avec Tailwind 4. Port 5173."],
            ["API Express", "Routes protégées par un jeton JWT d'une heure. Port 4000."],
            ["Prisma", "Couche d'accès aux données, avec un schéma versionné."],
            ["MySQL 8", "Utilisateurs, tâches et sessions de badgeage."],
          ]}
        />
      </Block>

      <Block eyebrow="API" title="Les routes de l'API.">
        <Table
          head={["Route", "Rôle"]}
          rows={[
            ["POST /register · /login", "Création de compte et connexion, avec jeton JWT."],
            ["GET /user · /user/todos", "Profil de l'utilisateur connecté et ses tâches."],
            ["GET · PUT · DELETE /users/:id", "Consultation, modification et suppression d'un utilisateur."],
            ["GET · POST /todos", "Liste des tâches et création."],
            ["GET · PUT · DELETE /todos/:id", "Lecture, mise à jour du statut et suppression d'une tâche."],
            ["POST /timer/start · /timer/stop", "Début et fin d'une session de badgeage."],
            ["GET /timer · /timer/all", "Historique personnel, et historique de toute l'équipe pour le manager."],
          ]}
        />
      </Block>

      <Block eyebrow="Données" title="Trois tables, deux rôles.">
        <Facts
          facts={[
            ["user", "Email unique, mot de passe haché, rôle manager ou employé."],
            ["todo", "Titre, description, échéance et statut : not_started, todo, in_progress ou done."],
            ["timer_sessions", "Début, fin, durée et note, liées à un utilisateur et supprimées avec lui."],
            ["Droits", "Le manager suit la présence de toute l'équipe : cette route renvoie une erreur 403 à un employé."],
          ]}
        />
      </Block>
    </>
  );
}

function ExegolBody() {
  return (
    <>
      <Block eyebrow="Preuves" title="Une intrusion, étape par étape.">
        <Captures base="/projets/exegol" items={CAPTURES_EXEGOL} />
      </Block>

      <Block eyebrow="Méthode" title="Toujours la même chaîne d'attaque.">
        <Steps
          items={[
            ["Reconnaissance", "Identifier les services exposés et leurs versions avec Nmap, repérer les points d'entrée."],
            ["Énumération", "Explorer l'application et le système : utilisateurs, fichiers accessibles, configurations faibles."],
            ["Accès initial", "Exploiter une faille pour obtenir un premier accès, parfois par brute force ou téléversement malveillant."],
            ["Élévation de privilèges", "Passer d'un compte limité à un compte administrateur en exploitant une erreur de configuration."],
            ["Preuve et write-up", "Récupérer le drapeau, puis rédiger la méthode complète pour qu'elle soit reproductible et corrigeable."],
          ]}
        />
        <p className="mt-6 text-xs text-[#80848e] leading-relaxed max-w-3xl">
          Projet strictement pédagogique, mené sur des machines volontairement vulnérables et isolées,
          avec autorisation. Ces techniques ne doivent jamais être utilisées sur un système réel sans
          autorisation explicite.
        </p>
      </Block>
    </>
  );
}

function StageBody() {
  return (
    <>
      <Block eyebrow="Le contexte" title="Cinq stages dans la même entreprise.">
        <p className="text-[15px] text-[#b5bac1] leading-relaxed max-w-3xl">
          J'ai effectué cinq stages au sein du groupe Beyer. Cette fidélité a compté : on m'a
          confié des responsabilités croissantes, de la découverte jusqu'à des outils déployés en
          production pour tout le personnel. Voici les missions qui en ressortent.
        </p>
      </Block>

      <Block eyebrow="Mission 1" title="Sécuriser les mots de passe du groupe.">
        <Steps
          items={[
            ["Le besoin", "La gestion des mots de passe de l'entreprise devait être améliorée et centralisée."],
            ["La solution", "J'ai configuré un gestionnaire de mots de passe open source pour l'ensemble du groupe, hébergé et sécurisé en local sur une machine Linux, avec une extension navigateur pour les utilisateurs."],
            ["Le renouvellement", "J'ai mis en place un système de renouvellement automatique : chaque mot de passe change tous les quelques mois, sans intervention manuelle."],
            ["La portée", "Un outil critique, utilisé par une centaine de personnes : la moindre erreur se voyait tout de suite."],
          ]}
        />
      </Block>

      <Block eyebrow="Mission 2" title="Déployer Windows 11 sur tous les postes.">
        <Steps
          items={[
            ["L'objectif", "Passer tous les postes de l'entreprise sur Windows 11, sans les installer un par un à la main."],
            ["Le serveur", "J'ai installé un serveur Windows avec l'Active Directory, à partir de l'ISO de Windows Server, gravée sur une clé bootable avec Rufus. J'ai ensuite ajouté les outils nécessaires depuis le gestionnaire de serveur, en suivant un tutoriel de déploiement avec MDT."],
            ["Le poste de test", "Le serveur était relié par un switch à un autre PC, sur lequel j'installais Windows pour vérifier que tout fonctionnait."],
            ["La tâche de déploiement", "Dans MDT (Deployment Workbench), j'ai préparé une tâche à partir de l'ISO de Windows. Il suffit d'activer le démarrage réseau dans le BIOS du poste et d'appuyer sur F12 : Windows s'installe tout seul."],
            ["Le rangement", "Le contenu de l'ISO est copié dans un dossier du serveur portant son nom, et c'est ce dossier que la tâche utilise."],
          ]}
        />
      </Block>

      <Block eyebrow="Mission 3" title="Un script PowerShell pour configurer un poste.">
        <Steps
          items={[
            ["Le besoin", "Configurer un poste neuf demandait toujours la même série d'actions, à refaire à la main sur chaque machine."],
            ["L'interface", "Un outil avec une vraie fenêtre, en Windows Forms : le technicien coche ce qu'il veut, puis clique sur Installer. La fenêtre porte le logo de l'entreprise."],
            ["Les logiciels", "Navigateurs, outil d'archivage, lecteur PDF, client VPN, agents de sécurité... Tout est coché par défaut : il suffit de décocher ce dont on n'a pas besoin."],
            ["Les réglages", "Ajouter le poste au domaine, lancer les mises à jour Windows, définir Google comme moteur de recherche par défaut, désinstaller un ancien antivirus ou une suite Office."],
            ["La prudence", "Le script vérifie d'abord qu'il est lancé en administrateur, et refuse de continuer dans le cas contraire."],
          ]}
        />
      </Block>

      <Block eyebrow="Sur le terrain" title="Du réseau et des données.">
        <p className="text-[15px] text-[#b5bac1] leading-relaxed max-w-3xl">
          J'ai aussi fait du brassage réseau pour relier un nouveau secrétariat, dans des locaux où
          des travaux étaient en cours, ainsi que du transfert de données. Des tâches moins
          techniques en apparence, mais qui demandent de la méthode : un mauvais câble ou une
          donnée oubliée se remarque tout de suite.
        </p>
      </Block>

      <Block eyebrow="Au quotidien" title="Le support utilisateur.">
        <p className="text-[15px] text-[#b5bac1] leading-relaxed max-w-3xl">
          En parallèle de ces missions, j'ai assuré beaucoup de support : accompagner les
          utilisateurs sur leurs postes et leurs logiciels, diagnostiquer les problèmes et les
          résoudre. C'est ce qui m'a appris à expliquer simplement et à rester disponible, deux
          réflexes indispensables en entreprise.
        </p>
      </Block>

      <Block eyebrow="Ce que j'en retire" title="La sécurité vue de l'intérieur.">
        <Facts
          facts={[
            ["Responsabilité", "Travailler sur des outils que des gens utilisent chaque jour change la façon de coder : on teste avant, on documente, on prévoit les erreurs."],
            ["Sécurité", "Gérer les mots de passe de tout un groupe m'a fait comprendre les enjeux concrets de la sécurité en entreprise."],
            ["Autonomie", "On m'a confié des missions de bout en bout, du besoin jusqu'au déploiement en production."],
          ]}
        />
      </Block>
    </>
  );
}

function CybergrangeBody() {
  const p = projectPages.cybergrange;
  return (
    <>
      <Block
        eyebrow="En ligne"
        title="La plateforme est jouable."
        pill={<StatusPill kind="live">Démo en ligne</StatusPill>}
      >
        <div className={`${CARD} p-6 flex flex-wrap items-center justify-between gap-4`}>
          <p className="text-[15px] text-[#b5bac1] leading-relaxed max-w-xl">
            La formation tourne dans le navigateur, sans rien installer. Le jeu 3D se joue au
            clavier et à la souris, et le simulateur 2D est accessible directement.
          </p>
          <a
            href={p.demo}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-lg bg-[#5865f2] hover:bg-[#4752c4] px-5 py-3 text-sm font-semibold text-white transition-colors"
          >
            Ouvrir la plateforme <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </Block>

      <Block eyebrow="Aperçu" title="Deux expériences, un même objectif.">
        <Captures base="/projets/cybergrange" items={CAPTURES_CYBERGRANGE} />
      </Block>

      <Block eyebrow="Démarche" title="Sensibiliser par la mise en situation.">
        <Steps
          items={[
            ["Le constat", "Un employé retient mal un diaporama de sécurité. Il retient ce qu'il a vécu."],
            ["Le parti pris", "Mettre l'utilisateur en scène dans une journée d'entreprise, et le laisser se tromper sans conséquence réelle."],
            ["Les situations", "Douze scénarios tirés du quotidien : mot de passe faible, session non verrouillée, phishing, faux support technique."],
            ["Le retour", "À chaque erreur, la plateforme explique le bon réflexe, puis laisse rejouer la situation."],
          ]}
        />
      </Block>
    </>
  );
}

const BODIES = {
  eliza: ElizaBody,
  "hack-juice": HackBody,
  exegol: ExegolBody,
  cybergrange: CybergrangeBody,
  "stage-beyer": StageBody,
  yowl: YowlBody,
  etodo: EtodoBody,
};

export default function ProjectPage() {
  const { slug } = useParams();
  const p = projectPages[slug];
  const Body = BODIES[slug];
  if (!p || !Body) return <NotFound />;

  const others = projectOrder.filter((s) => s !== slug);

  return (
    <PageWrapper>
      <Section className="!pb-10">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-[#b5bac1] hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Tous les projets
        </Link>

        <div className="mt-10 flex flex-wrap items-center gap-3 text-xs">
          <span className="font-mono text-[#80848e]">{p.year}</span>
          <span className="px-2 py-0.5 rounded border font-semibold text-[#5865f2] bg-[#5865f2]/10 border-[#5865f2]/30">
            {p.module}
          </span>
        </div>
        <h1 className="mt-4 font-display text-4xl sm:text-6xl font-bold tracking-tight text-white">
          {p.title}
        </h1>
        <p className="mt-3 font-display text-xl sm:text-2xl text-[#b5bac1]">{p.subtitle}</p>
        <p className="mt-6 max-w-2xl text-[#b5bac1] leading-relaxed">{p.intro}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-md bg-[#2b2d31] text-[#b5bac1] border border-[#313338] text-xs font-mono"
            >
              {t}
            </span>
          ))}
        </div>
      </Section>

      <Body />

      <Block eyebrow="Recul" title="Ce que j'en retiens.">
        <div className="border-l-2 border-[#5865f2] pl-4 max-w-2xl">
          <p className="text-[15px] text-[#b5bac1] italic leading-relaxed">{p.reflection}</p>
        </div>
      </Block>

      <Section className="!pt-0">
        <p className="text-xs uppercase tracking-[0.25em] font-bold text-[#80848e]">Autres projets</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {others.slice(0, 3).map((s) => (
            <Link
              key={s}
              to={`/projects/${s}`}
              className={`${CARD} p-5 flex items-center justify-between hover-lift`}
            >
              <span className="font-display text-lg font-semibold text-white">
                {projectPages[s].title}
              </span>
              <ArrowUpRight className="w-4 h-4 text-[#b5bac1]" />
            </Link>
          ))}
        </div>
      </Section>
    </PageWrapper>
  );
}
