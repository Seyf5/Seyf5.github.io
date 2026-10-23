import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Lock, Shield } from "lucide-react";
import PageWrapper from "@/components/site/PageWrapper";
import Section, { Eyebrow } from "@/components/site/Section";

const projects = [
  {
    title: "Projet NationsGlory",
    year: "2026",
    summary:
      "Plugin Bukkit de traçage d'objets, déployé sur un serveur Minecraft moddé en production. Chaque exemplaire d'un objet rare reçoit un identifiant unique écrit dans son NBT, et le plugin reconstitue toute sa chaîne de possession : qui l'a eu, par quel coffre il est passé, où et quand.",
    reflection:
      "Projet personnel mené de bout en bout, du besoin réel jusqu'au déploiement : Java 17, API Bukkit de 2013, accès NBT par réflexion, et un serveur avec des joueurs connectés pendant que je livrais.",
    tags: ["Java 17", "Bukkit", "NBT", "Déploiement"],
    type: "personal",
    href: "/projects/nationsglory",
    internal: true,
    cta: "Voir plus d'infos sur le projet",
  },
  {
    title: "Stage - La CyberGrange",
    year: "2026",
    summary:
      "Mon stage de consultant en cybersécurité. J'ai conçu une plateforme de sensibilisation immersive : une journée d'entreprise jouable en 3D, doublée d'un simulateur de poste Windows. À travers douze mises en situation réelles - mot de passe faible, phishing, faux support, session non verrouillée - l'utilisateur forge ses réflexes de sécurité. La plateforme est en ligne et jouable.",
    reflection:
      "Un vrai travail de consultant : traduire des enjeux de sécurité en une expérience que n'importe quel employé comprend et retient.",
    tags: ["Cybersécurité", "Sensibilisation", "Babylon.js", "JavaScript"],
    type: "pro",
    href: "/projects/cybergrange",
    internal: true,
    cta: "Voir plus d'infos sur le stage",
  },
  {
    title: "Hack & Juice",
    year: "2025",
    summary:
      "Capture the Flag sur l'OWASP Juice Shop, une application volontairement vulnérable. Plus de 50 failles identifiées et documentées : upload malveillant, injection SQL, XSS. Chaque faille est livrée avec sa méthode, son risque, son correctif et des preuves. Classé top 2 à Strasbourg, 37e en France.",
    reflection:
      "J'ai appris à trouver des failles critiques et à les prioriser par criticité, puis à rédiger un rapport qu'une équipe peut utiliser pour corriger.",
    tags: ["Pentesting", "OWASP", "Burp Suite", "SQLi"],
    type: "featured",
    href: "/projects/hack-juice",
    internal: true,
    cta: "Voir plus d'infos sur le projet",
  },
  {
    title: "Exegol",
    year: "2026",
    summary:
      "Douze machines Linux volontairement vulnérables à compromettre, de la reconnaissance jusqu'à l'élévation de privilèges. Chaque intrusion donne lieu à un write-up complet avec les commandes et les captures qui prouvent chaque étape : scan Nmap, brute force, exploitation, prise de contrôle.",
    reflection:
      "Projet d'hacking éthique en binôme. J'ai appris à enchaîner les étapes d'une intrusion de façon méthodique et à tout documenter pour qu'un autre puisse reproduire et corriger.",
    tags: ["Hacking éthique", "Nmap", "Hydra", "Linux"],
    type: "featured",
    href: "/projects/exegol",
    internal: true,
    cta: "Voir plus d'infos sur le projet",
  },
  {
    title: "Stages - Groupe Beyer",
    year: "5 stages",
    summary:
      "Cinq stages dans la même entreprise, de la découverte aux missions de confiance. Un gestionnaire de mots de passe open source avec renouvellement automatique, hébergé en local sur Linux. Le déploiement de Windows 11 sur les postes, avec un serveur Windows et MDT : un appui sur F12 et le poste s'installe. Un script PowerShell avec interface pour installer les logiciels et configurer un poste. Et aussi du brassage réseau, du transfert de données et beaucoup de support.",
    reflection:
      "Cinq stages dans la même entreprise, c'est une relation de confiance : on finit par me confier des outils critiques utilisés chaque jour. C'est là que ma perception de la sécurité en entreprise a vraiment évolué.",
    tags: ["Sécurité", "Windows Server", "PowerShell", "Linux"],
    type: "pro",
    href: "/projects/stage-beyer",
    internal: true,
    cta: "Voir plus d'infos sur les stages",
  },
  {
    title: "E-TODO",
    year: "2025",
    summary:
      "Badgeuse et todo list d'équipe. Toute la pile se lance en une commande avec Docker : front React, API Express, base MySQL. Authentification par jeton JWT d'une heure, mots de passe hachés avec bcrypt, et contrôle d'accès par rôle vérifié côté API - un employé qui réclame les données d'un autre reçoit une erreur 403.",
    reflection:
      "Le projet où j'ai consolidé Docker et appris à penser l'authentification et les droits d'accès côté serveur, pas seulement l'interface.",
    tags: ["Docker", "JWT", "bcrypt", "Express.js", "MySQL"],
    type: "featured",
    href: "/projects/etodo",
    internal: true,
    cta: "Voir plus d'infos sur le projet",
  },
  {
    title: "Yowl",
    year: "2025",
    summary:
      "Application pour suivre films, séries, livres et jeux au même endroit, pensée depuis la recherche utilisateur : interviews, personas, wireframes, maquettes Figma, tests et priorisation du MVP.",
    reflection:
      "J'ai dû imaginer une plateforme capable de se démarquer de ses concurrentes tout en reprenant leurs fonctionnalités les plus utilisées.",
    tags: ["UX", "Figma", "React", "Node.js"],
    type: "featured",
    href: "/projects/yowl",
    internal: true,
    cta: "Voir plus d'infos sur le projet",
  },
  {
    title: "ELIZA",
    year: "2025",
    summary:
      "Epibot, un assistant pédagogique pour Discord. Il répond aux questions des élèves à partir d'un PDF de cours, avec des garde-fous qui bloquent les demandes de corrigés.",
    reflection:
      "Projet collaboratif. Ma première IA, où j'ai aussi dû réfléchir à sa sécurité et à son éthique : empêcher les détournements et protéger les secrets.",
    tags: ["Python", "discord.py", "NLP", "Sécurité"],
    type: "featured",
    href: "/projects/eliza",
    internal: true,
    cta: "Voir plus d'infos sur le projet",
  },
];

const typeIcons = {
  featured: Shield,
  personal: ArrowUpRight,
  school: Github,
  pro: ArrowUpRight,
  soon: Lock,
};

const typeBadge = {
  featured: { label: "Epitech", cls: "text-[#5865f2] bg-[#5865f2]/10 border-[#5865f2]/30" },
  personal: { label: "Personnel", cls: "text-[#b5bac1] bg-[#2b2d31] border-[#313338]" },
  school: { label: "Epitech", cls: "text-[#b5bac1] bg-[#2b2d31] border-[#313338]" },
  pro: { label: "Pro", cls: "text-[#57f287] bg-[#57f287]/10 border-[#57f287]/30" },
};

export default function Projects() {
  return (
    <PageWrapper>
      <Section>
        <Eyebrow>Projets</Eyebrow>
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white max-w-2xl">
          Ce que j'ai construit.
        </h1>
        <p className="mt-4 text-[#b5bac1] max-w-2xl">
          Projets scolaires, personnels, chacun m'a appris quelque chose de concret.
        </p>
      </Section>

      <Section className="!pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((p, i) => {
            const Icon = typeIcons[p.type] || ArrowUpRight;
            const badge = typeBadge[p.type];
            const isWide = i === 0;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: i * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative rounded-2xl border border-[#313338] bg-[#1e1f22] p-7 overflow-hidden hover-lift flex flex-col gap-4 ${
                  isWide ? "md:col-span-2" : ""
                }`}
              >
                <div className="absolute -top-24 -right-24 w-56 h-56 bg-[#5865f2]/10 rounded-full blur-3xl group-hover:bg-[#5865f2]/25 transition-colors" />

                <div className="relative flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-[#80848e] font-mono">{p.year}</span>
                    {badge && (
                      <span className={`text-xs px-2 py-0.5 rounded border font-semibold ${badge.cls}`}>
                        {badge.label}
                      </span>
                    )}
                  </div>
                  {p.internal ? (
                    <Link
                      to={p.href}
                      className="text-[#b5bac1] group-hover:text-white transition-colors"
                      aria-label={p.title}
                    >
                      <Icon className="w-4 h-4" />
                    </Link>
                  ) : (
                    <a
                      href={p.href}
                      target={p.href !== "#" ? "_blank" : undefined}
                      rel="noreferrer"
                      className="text-[#b5bac1] group-hover:text-white transition-colors"
                      aria-label={p.title}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <h3 className="relative font-display text-2xl sm:text-3xl font-semibold text-white">
                  {p.title}
                </h3>
                <p className="relative text-sm text-[#b5bac1] leading-relaxed">{p.summary}</p>

                {p.reflection && (
                  <div className="relative border-l-2 border-[#5865f2] pl-4">
                    <p className="text-xs text-[#80848e] italic leading-relaxed">
                       {p.reflection}
                    </p>
                  </div>
                )}

                {p.internal && (
                  <Link
                    to={p.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:opacity-75 transition-opacity w-fit after:absolute after:inset-0 after:content-['']"
                  >
                    {p.cta || "Voir le projet"}
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                )}

                <div className="relative flex flex-wrap gap-2 mt-auto">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-[#2b2d31] text-[#b5bac1] border border-[#313338] text-xs font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Section>
    </PageWrapper>
  );
}
