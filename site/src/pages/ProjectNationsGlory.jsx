import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Boxes,
  Fingerprint,
  Github,
  ScrollText,
  Terminal,
} from "lucide-react";
import PageWrapper from "@/components/site/PageWrapper";
import Section from "@/components/site/Section";
import PixelVideo from "@/components/site/PixelVideo";
import SkinHero from "@/components/site/SkinHero";
import SkinTrio from "@/components/site/SkinTrio";

const GOLD = "#4075f0";

const clips = [
  {
    src: "/nationsglory/look%20id%20normal.mp4",
    label: "/look sur un joueur et l'id recherché permet le Traçage de base pour voir quel est l'id unique de l'item de ce joueur",
    index: 1,
  },
  {
    src: "/nationsglory/look%20id%20unique.mp4",
    label: "/look id: suivi de son id unique permet d'avoir l'historique complet de joueur en joueur sur ce qui est arrivé à cet item. Un /look (numéro de la transaction) à été ajouté pour permettre de se téléporter à l'endroit exact de la transaction sans passée par les coordonée et la dimension.",
    index: 2,
  },
];

const journal = [
  { t: "21:58", c: "#f87171", s: "−", who: "Seyf123", what: "jeté au sol", where: "event · 89 4 −24" },
  { t: "21:58", c: "#6ee7a0", s: "+", who: "Seyf123", what: "ramassé au sol", where: "event · 91 4 −22" },
  { t: "21:59", c: "#f87171", s: "−", who: "Seyf123", what: "déposé dans un coffre", where: "event · 88 4 −28" },
  { t: "21:59", c: "#6ee7a0", s: "+", who: "Seyf123", what: "repris dans le coffre", where: "event · 86 4 −28" },
  { t: "21:59", c: "#f87171", s: "−", who: "Seyf123", what: "jeté au sol", where: "event · 86 4 −28" },
  { t: "21:59", c: "#7cb0ff", s: ">>>", who: "Okomo", what: "transféré à", who2: "Seyf123", where: "event · 87 4 −30" },
];

const couleurJoueur = {};
const couleurDe = (pseudo) => couleurJoueur[pseudo] || "#e4e4e7";

const plateforme = [
  ["Version Minecraft", "1.6.4"],
  ["Serveur", "MCPC + hybride Forge 9.11.1.965 + Bukkit 1.6.4-R2.1"],
  ["Runtime", "17"],
  ["Côté", "Bukkit-side "],
  ["Stockage", "Fichier texte (traces.log)"],
  ["Dépendances externes", "Aucune"],
  ["État", "Déployé et en service sur un serveur de test avec plusieur joueur dessus"],
];

const specs = [
  {
    icon: Fingerprint,
    k: "Un id unique par exemplaire",
    v: "Un numéro écrit dans le NBT, invisible en jeu, posé par un scan des inventaires toutes les 5 secondes. 42 Lasers Spartan tagués à ce jour, chacun le sien.",
  },
  {
    icon: ScrollText,
    k: "Dix façons de bouger",
    v: "Ramassé, fabriqué, pris ou déposé en coffre, jeté, perdu à la mort, looté, donné par commande - chaque mouvement est horodaté et situé.",
  },
  {
    icon: Terminal,
    k: "Deux commandes",
    v: "/track pour la configuration et le journal global, /look pour dérouler l'histoire d'un exemplaire précis, page par page.",
  },
  {
    icon: Boxes,
    k: "Un périmètre choisi",
    v: "Seuls les objets listés en configuration sont suivis, pour ne pas journaliser la terre et le bois. Sept aujourd'hui, dont le Laser Spartan, l'Épée Mégalodon et le Dragon Bike.",
  },
];

const classes = [
  ["Ecouteurs", "Les 8 listeners Bukkit : ramassage, coffres, craft, mort, commandes, connexion", "244"],
  ["NbtUid", "Écriture et lecture de l'identifiant unique dans le NBT, par réflexion", "103"],
  ["Trace", "Un mouvement, immuable - et son format de sérialisation", "63"],
  ["Action", "Les 10 types de mouvement, avec leur signe et leur couleur", "38"],
];

const deduction = [
  ["Remise directe", "A jette au sol, B ramasse à moins de 8 blocs, dans les 5 minutes", "5 min · 8 blocs"],
  ["Via conteneur", "A dépose en coffre, B y prend l'objet plus tard - même une heure après", "sans limite de temps"],
  ["Loot", "A meurt, B ramasse sur le cadavre", "6 min"],
];

const commandes = [
  ["/track <id>", "Journal d'un objet surveillé"],
  ["/track del <id>", "Retirer un objet du suivi"],
  ["/track sweep [id]", "Recenser les exemplaires existants sur le serveur"],
  ["/track list", "Les objets actuellement surveillés"],
  ["/look <pseudo> <id>", "Remonter la chaîne de possession"],
  ["/look <id>:<uid> [page]", "Historique d'un exemplaire précis"],
  ["/look tp <n>", "Se téléporter sur le lieu du transfert n"],
];

const pistes = [
  {
    k: "Brancher le plugin sur HawkEye",
    v: "Lire directement la base MySQL de HawkEye plutôt que mon fichier texte, une fois sa connexion réparée. Toutes les données du serveur seraient alors au même endroit, interrogeables ensemble, au lieu d'un fichier à part.",
  },
  {
    k: "Détecter les duplications",
    v: "Un identifiant unique ne devrait jamais exister en deux exemplaires. S'il se dédouble une notif en chat admin serait envoyée a la connection d'un op afin de ban le joueur est un objectif intéréssant.",
  },
  {
    k: "Ne plus dépendre d'un scan périodique",
    v: "Le marquage passe toutes les 5 secondes. Deux joueurs qui s'échangent l'objet plus vite que ça passent peuvent réussir à ne pas se faire log : sur dix échanges rapides, un peut n'être jamais enregistré. Il faudrait réagir à l'événement lui-même plutôt que de photographier les inventaires à intervalle fixe ou au moin utilité une partie de la base sql de hawk eyes.",
  },
  {
    k: "Alléger le code",
    v: "Retirer ce qui ne sert pas. L'affichage du dernier détenteur, par exemple, répète une information déjà lisible sur la dernière ligne du journal c'est pas vraiment utile  .",
  },
];

function Eyebrow({ children }) {
  return (
    <p className="text-[11px] tracking-[0.28em] uppercase font-semibold text-[#6f7079] mb-4">
      {children}
    </p>
  );
}

function H2({ children }) {
  return (
    <h2 className="font-display text-3xl sm:text-[2.5rem] font-semibold text-white tracking-tight">
      {children}
    </h2>
  );
}

function Code({ children }) {
  return (
    <div className="ng-code rounded-2xl p-5 sm:p-6">
      <pre>{children}</pre>
    </div>
  );
}

function H3({ children, className = "" }) {
  return (
    <h3 className={`font-display text-[17px] font-semibold text-white mb-4 ${className}`}>
      {children}
    </h3>
  );
}

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ProjectNationsGlory() {
  return (
    <PageWrapper>
      <div className="ng-page">
        <Section className="!pb-12">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-[#6f7079] hover:text-white transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Tous les projets
          </Link>

          <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 md:gap-16 items-center">
            <div>
              <Eyebrow>Projet personnel · 2026</Eyebrow>

              <h1 className="font-display text-[2.6rem] sm:text-6xl font-bold tracking-tight text-white leading-[1.03] flex items-center gap-4 flex-wrap">
                <span>Projet NationsGlory</span>
                <img
                  src="/nationsglory/logo.png"
                  alt="Logo NationsGlory"
                  className="ng-logo w-11 h-11 sm:w-14 sm:h-14 shrink-0"
                  draggable={false}
                />
              </h1>

              <p className="mt-5 font-display text-lg text-white/90">
                NGItemTrack - Plugin de traçage d'items.
              </p>

              <p className="mt-6 text-[17px] text-[#a1a1aa] max-w-xl leading-relaxed">
                Sur un serveur NG un item peux vite de déplacer, c'est pourquoi des plugins comme hawk eyes sont la
                mais malheuresement après beaucoup de déplacement ces items peux etre long a retrouvé :
                C'est pour sa que j'ai crée NGItemTrack, une version + simplifiée de tracage d'item avec des id unique .
                Les logs habituels savent dire qu'<em>un</em> item a bougé mais Jamais lequel.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {["Java 17", "Bukkit", "MCPC+ / Forge", "Minecraft 1.6.4"].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-[#a1a1aa] text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-9">
              </div>

              <div className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
                {[
                ].map((s) => (
                  <div key={s.l}>
                    <p className="font-display text-[2rem] leading-none font-semibold text-white tabular-nums">
                      {s.n}
                    </p>
                    <p className="text-xs text-[#6f7079] mt-2 max-w-[120px] leading-snug">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col items-center justify-end min-h-[340px]"
            >
              <div className="ng-float">
                <SkinHero />
              </div>
              <div className="ng-halo w-64 h-12 -mt-5" />
            </motion.div>
          </div>
        </Section>

        <Section className="!pt-8">
          <Eyebrow>Le contexte</Eyebrow>
          <H2>D'où vient l'idée.</H2>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 mt-10 items-center">
            <Reveal>
              <p className="text-[15px] text-[#a1a1aa] leading-relaxed">
                L'idée de ce plugin ne vien pas de nul part. Il vient de discussions avec les
                administrateurs de mon serveur.
                Certains remboursements d'items sont long a effectuer car un item peux vite se déplacer entre plusieurs joueurs et il est impossible de savoir lequel est le bon.
              </p>
              <p className="mt-4 text-[15px] text-[#a1a1aa] leading-relaxed">
                Je me suis motivé est a commencé à développer ce plugin ainsi que d'autres idées qui m'ont été proposées.
                En plus d'un moyen d'un meilleur moyen de suivi d'item un moyen de chercher un item précis dans un inventaire de joueur dans un rayon.
                Ou d'autre initiatives de mon coté tels que des commandes pour enchanté tout les item dans un rayon dans un iventaire + coffre ou des protection en cas de kick pays
              </p>
              <p className="mt-4 text-[15px] text-[#a1a1aa] leading-relaxed">
                Cela ma donnée envie de rejoindre NG qui est un serveur sur lequel je joue depuis bientôt 7 ans afin d'aidée prioritairement le travail des staff en facilitant leurs travails.
                Cela par l'ajout de plugin que j'ai déja travailler dessu ou futur projet que j'aimerai travailler.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <SkinTrio />
            </Reveal>
          </div>
        </Section>

        <Section className="!pt-8">
          <Eyebrow>Le fonctionnement</Eyebrow>
          <H2>Sur quoi ça tourne.</H2>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 mt-10">
            <Reveal>
              <table className="ng-table">
                <tbody>
                  {plateforme.map(([k, v]) => (
                    <tr key={k}>
                      <td className="!text-white font-medium">{k}</td>
                      <td>{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>

            <Reveal delay={0.08}>
              <H3>Pourquoi Bukkit-side et pas un mod Forge</H3>
              <ul className="space-y-3.5 list-none p-0 m-0">
                {[
                  "Rien à installer côté joueur.",
                  "Rechargeable sans redémarrer. Sur un serveur qui tourne en continu avec des joueurs connectés, livrer sans couper la partie change tout.",
                  "L'API Bukkit couvre déjà tous les événements nécessaires : inventaires, coffres, morts, crafts, commandes.",
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-[15px] text-[#a1a1aa] leading-relaxed">
                    <span
                      className="mt-2 w-1 h-1 rounded-full shrink-0"
                      style={{ background: GOLD }}
                    />
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Section>

        <Section className="!pt-8">
          <Eyebrow>Les NBT</Eyebrow>
          <H2>L'utilité du plugin.</H2>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 mt-10 items-start">
            <Reveal>
              <p className="text-[15px] text-[#a1a1aa] leading-relaxed">
                Dans Minecraft, un objet posé dans un inventaire n'est pas qu'un identifiant :
                il porte aussi un compartiment de données libres, le{" "}
                <span className="font-mono text-[13px] text-white">tag</span>, où un plugin peut
                écrire ce qu'il veut.
              </p>
              <p className="mt-4 text-[15px] text-[#a1a1aa] leading-relaxed">
                Le plugin y écrit une clé, une seule :{" "}
                <span className="font-mono text-[13px] text-white">ngit_uid</span>, un numéro
                pris sur un compteur propre à ce type d'objet {" "}
                <span className="font-mono text-[13px] text-white">00001</span>, puis{" "}
                <span className="font-mono text-[13px] text-white">00002</span>. Il n'écrit rien
                d'autre et ne lit rien d'autre.
              </p>
              <p className="mt-4 text-[15px] text-[#a1a1aa] leading-relaxed">
                Ces info sont donnée à la suite des id après l'execution des commandes » par exemple «{"->Seyf123 à Okomo via jet au sol"}
                 ».
              </p>

              <H3 className="mt-8">Ce que ça implique</H3>
              <ul className="space-y-3.5 list-none p-0 m-0">
                {[
                  "Le numéro est invisible en jeu hors pars les op : rien ne change dans l'apparence de l'objet.",
                  "Tout comme avec hawk eyes ont voit sont chemin, - coffre, échange, mort, redémarrage.",
                  "Ce qui est pratique et change de Hawk eyes c'est qu'avec ces id unique on peux différencier 2 item différents ayant a la base le même id et suivre son historique complet de joueur en joueur avec une commande.",
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-[15px] text-[#a1a1aa] leading-relaxed">
                    <span
                      className="mt-2 w-1 h-1 rounded-full shrink-0"
                      style={{ background: GOLD }}
                    />

                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.08}>
              <H3>Le NBT d'un Laser Spartan marqué</H3>
              <Code>
                <div className="k">NBT de l'objet</div>
                <div>
                  ├─ id 3699 <span className="c">- champ fixe</span>
                </div>
                <div>
                  ├─ Count 1 <span className="c">- champ fixe</span>
                </div>
                <div>
                  └─ tag <span className="c">- branche des données libres</span>
                </div>
                <div>
                  {"   "}└─ <span className="s">ngit_uid</span>{" "}
                  <span className="n">"00003"</span>{" "}
                  <span className="c">← écrit par le plugin</span>
                </div>
              </Code>
              <p className="mt-4 text-[15px] text-[#a1a1aa] leading-relaxed">
                Sur un objet neuf, la branche{" "}
                <span className="font-mono text-[13px] text-white">tag</span> n'existe même pas :
                c'est le plugin qui la crée pour y déposer son numéro. Le reste du NBT lui est
                indifférent - il ne le lit pas, ne l'enregistre pas, ne le modifie pas.
              </p>
              <p className="mt-4 text-[15px] text-[#a1a1aa] leading-relaxed">
                Il fait un swap de tout les item demander avec de leur attribué un ID unique qu'il soit droppé au sol dans un inventaire ou tout autre contenant.
              </p>
            </Reveal>
          </div>
        </Section>

        <Section className="!pt-8 !max-w-[88rem]">
          <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
            <div>
              <Eyebrow>Exemple de l'utilisation du plugin en</Eyebrow>
              <H2>Dection d'id unique.</H2>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
            {clips.map((c, i) => (
              <Reveal key={c.src} delay={i * 0.07}>
                <PixelVideo {...c} />
              </Reveal>
            ))}
          </div>
        </Section>

        <Section className="!pt-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <Eyebrow>La sortie</Eyebrow>
              <H2>La sortie des commandes.</H2>
              <p className="mt-5 text-[#a1a1aa] leading-relaxed">
                Chaque mouvement porte son signe et sa couleur : vert quand l'objet entre chez
                quelqu'un, rouge quand il en sort, Bleu quand il y eu un trade
                . Un op lit la chaîne d'un coup d'œil et voit à quel
                maillon l'objet a été détourné, sans relire trois jours de logs bruts.
              </p>
              <p className="mt-4 text-[#a1a1aa] leading-relaxed">
               <span className="font-mono text-[13px] text-white">/look tp 3</span>{" "}
                téléporte à l'endroit exact de la transaction numéro 3 avec la bonne dimension.
              </p>
              <p className="mt-4 text-[#a1a1aa] leading-relaxed">
                L'extrait ci-contre sort du journal réel du serveur. Les quatre premières
                lignes, c'est un joueur qui manipule son propre laser. Les deux dernières,
                c'est un transfert : Seyf123 le jette, Okomo le ramasse trois blocs plus loin
                dans la même seconde et le plugin relie les deux.
                On voit aussi que l'objet a été posé dans un coffre et repris par Seyf123 sa affiche donc un transfert  .
              </p>
            </div>

            <div className="ng-log rounded-2xl p-5 sm:p-6 overflow-x-auto">
              <div className="flex items-center gap-2 pb-4 mb-4 border-b border-white/[0.07]">
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <p className="ml-2 font-mono text-[11px] text-[#6f7079]">/look Seyf123 3699</p>
              </div>

              <p className="font-display text-sm text-white mb-4">
                Laser Spartan Blanc{" "}
                <span className="font-mono text-[11px] text-[#6f7079]">· uid 00003</span>
              </p>

              <div className="font-mono text-[12px] leading-[2.05] whitespace-nowrap">
                {journal.map((l, i) => (
                  <p key={i}>
                    <span className="text-[#4a4b52]">{l.t}</span>
                    <span
                      style={{ color: l.c }}
                      className={`inline-block text-center ${
                        l.s.length > 1 ? "min-w-[2.4rem] tracking-[0.28em]" : "w-5"
                      }`}
                    >
                      {l.s}
                    </span>
                    <span style={{ color: couleurDe(l.who) }}>{l.who} </span>
                    <span style={{ color: l.c }}>{l.what}</span>
                    {l.who2 && (
                      <span style={{ color: couleurDe(l.who2) }}> {l.who2}</span>
                    )}
                    <span className="text-[#4a4b52]"> - {l.where}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section className="!pt-8">
          <Eyebrow>Le stockage</Eyebrow>
          <H2>Un simple fichier texte.</H2>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 mt-10 items-start">
            <Reveal>
              <ul className="mt-5 space-y-3.5 list-none p-0 m-0">
                {[
                  "Se lit sans serveur de base de données.",
                  "Se sauvegarde par une simple copie de fichier.",
                  "Reste lisible et simpliste stocker dans un simple fichier texte.",
                  "Survit à un serveur lors de crash étant donné que les logs se sauvegarde immédiatement.",
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-[15px] text-[#a1a1aa] leading-relaxed">
                    <span
                      className="mt-2 w-1 h-1 rounded-full shrink-0"
                      style={{ background: GOLD }}
                    />
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="mt-8">
                <H3>La configuration</H3>
                <Code>
                  <span className="c">{"# seuls ces IDs sont journalisés ET tagués"}</span>
                  {"\n"}<span className="k">items-surveilles</span>:{"\n"}
                  {"  - "}<span className="n">3699</span>{"    "}
                  <span className="c">{"# Laser Spartan"}</span>
                  {"\n  - "}<span className="n">4616</span>{"    "}
                  <span className="c">{"# Épée Mégalodon"}</span>
                  {"\n  - "}<span className="n">26016</span>{"   "}
                  <span className="c">{"# Dragon Bike"}</span>
                  {"\n\n"}<span className="k">recenser à la-connexion</span>:{" "}
                  <span className="n">true</span>
                  {"\n"}<span className="k">auto-tag</span>: <span className="n">true</span>
                </Code>
              </div>
            </Reveal>
          </div>
        </Section>

        <Section className="!pt-8">
          <Eyebrow>L'algorithme</Eyebrow>
          <H2>Un comment il marche?.</H2>
          <p className="mt-5 text-[#a1a1aa] leading-relaxed max-w-3xl">
            Aucun événement Minecraft ne dit « A a donné l'objet à B ». Le passage d'un joueur
            à l'autre n'est jamais écrit : c'est pour sa que je l'ai construit à partir de trois règles.
          </p>

          <Reveal className="mt-9">
            <table className="ng-table">
              <thead>
                <tr>
                  <th>Voie</th>
                  <th>Règle</th>
                  <th>Fenêtre</th>
                </tr>
              </thead>
              <tbody>
                {deduction.map(([v, r, f]) => (
                  <tr key={v}>
                    <td className="!text-white font-medium">{v}</td>
                    <td className="!whitespace-normal">{r}</td>
                    <td className="font-mono !text-[13px] text-[#6f7079]">{f}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>

          <p className="mt-7 text-[15px] text-[#a1a1aa] leading-relaxed max-w-3xl">
            Chaque actions de la chaîne retient son détenteur, ce qu'il a fait pendant qu'il
            tenait l'objet, et le transfert sortant vers le suivant. Le parcours s'arrête au
            dernier détenteur connu.
          </p>
        </Section>
        <Section className="!pt-8">
          <Eyebrow>L'usage</Eyebrow>
          <H2>Ce que tape un OP.</H2>

          <Reveal className="mt-10">
            <table className="ng-table">
              <thead>
                <tr>
                  <th>Commande</th>
                  <th>Effet</th>
                </tr>
              </thead>
              <tbody>
                {commandes.map(([c, e]) => (
                  <tr key={c}>
                    <td className="font-mono !text-[13.5px] !text-white">{c}</td>
                    <td className="!whitespace-normal">{e}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>

          <p className="mt-6 text-sm text-[#6f7079]">
            Permission <span className="font-mono text-[13px]">ngitemtrack.use</span>, réservée
            aux opérateurs par défaut.
          </p>
        </Section>

        <Section className="!pt-8">
          <Eyebrow>quoi d'autres ?</Eyebrow>
          <H2>Quesque je changerais.</H2>

          <div className="mt-10">
            <Reveal>
              <H3>Les pistes, dans l'ordre où je les prendrais</H3>
              <ol className="space-y-5 list-none p-0 m-0">
                {pistes.map((p, i) => (
                  <li key={p.k} className="flex gap-4">
                    <span className="font-mono text-[11px] text-[#f0b357]/70 pt-1 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-display text-[15px] font-semibold text-white">{p.k}</p>
                      <p className="mt-1 text-sm text-[#a1a1aa] leading-relaxed">{p.v}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </Section>

        <section className="relative overflow-hidden py-24">
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-55"
            src="/nationsglory/openspace.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, #0b0b0f 0%, rgba(11,11,15,0.45) 28%, rgba(11,11,15,0.45) 72%, #0b0b0f 100%)" }}
            aria-hidden="true"
          />

          <div className="relative mx-auto w-full max-w-6xl px-6">
            <Eyebrow>Autour du projet</Eyebrow>
            <H2>Petits projets perso.</H2>
            <p className="mt-5 text-[#a1a1aa] leading-relaxed max-w-2xl">
              À côté du plugin de traçage, j'ai développé quelques outils d'administration pour
              m'exercer et faciliter le travail du staff sur le serveur. En voici deux.
            </p>

            <div className="mt-12 grid md:grid-cols-2 gap-8">
              {[
                {
                  src: "/nationsglory/admintoolfindinv.mp4",
                  nom: "AdminToolFindInv",
                  desc: "Repère quels joueurs possèdent un objet donné dans un rayon autour de l'administrateur. Pratique pour suivre la trace d'un item ou enquêter sur une duplication.",
                },
                {
                  src: "/nationsglory/copyinv.mp4",
                  nom: "CopyInv",
                  desc: "Copie en un instant l'inventaire complet d'un joueur, pour inspecter ou reproduire son équipement sans manipulation fastidieuse.",
                },
              ].map((p, i) => (
                <Reveal key={p.src} delay={i * 0.1}>
                  <figure className="m-0">
                    <div className="rounded-2xl overflow-hidden ng-card">
                      <video
                        className="block w-full h-auto"
                        src={p.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                      />
                    </div>
                    <figcaption className="mt-4">
                      <span className="font-mono text-sm font-semibold" style={{ color: GOLD }}>
                        {p.nom}
                      </span>
                      <p className="mt-1.5 text-sm text-[#a1a1aa] leading-relaxed">{p.desc}</p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>

            <div className="mt-14">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-sm text-[#a1a1aa] hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Revenir aux projets
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
