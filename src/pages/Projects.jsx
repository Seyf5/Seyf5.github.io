import { motion } from "framer-motion";
import { ArrowUpRight, Github, Lock, Shield } from "lucide-react";
import PageWrapper from "@/components/site/PageWrapper";
import Section, { Eyebrow } from "@/components/site/Section";

const projects = [
    {
    title: "Script de déploiement réseau",
    year: "2024",
    summary:
      "Script PowerShell d'automatisation pour le groupe Beyer : installation silencieuse d'apps, navigateur par défaut, intégration Active Directory.",
    reflection:
      "Première mission pro qui serait déployée dans l'entreprise. Le script a économisé des dizaines d'heures de configuration.",
    tags: ["PowerShell", "Active Directory", "Windows Server"],
    type: "pro",
    href: "#",
  },
  {
    title: "Déploiement d'outils de gestion de mots de passe",
    year: "2025",
    summary:
      "Durant mes stages chez Beyer, à l'aide d'un outil open source, j'ai préparé un outil permettant de définir un mot de passe qui change tous les x mois pour une centaine de personnes, le tout hébergé et sécurisé en local via une machine Linux et une extension.",
    reflection:
      "2ème mission qui sera déployée en entreprise. J'ai eu un peu de pression car c'est un outil extrêmement important et que des centaines de personnes l'utiliseront. Ça m'a fait améliorer ma perception de la sécurité en entreprise.",
    tags: ["Linux", "Bash"],
    type: "pro",
    href: "#",
  },
    {
    title: "E-TODO",
    year: "2025",
    summary:
      "Site web qui fait office de badgeuse. Un manageur peux crée des utilisateur ainsi que suivre leur présence. La platforme fait aussi office de todo list.",
    reflection:
      "J'ai appris à utilisé express js, mysql et amélioré mes connaissance sur docker.",
    tags: ["Docker", "MySQL", "Express.js"],
    type: "featured",
    href: "#",
  },
  {
    title: "Hack & Juice",
    year: "2025",
    summary:
      "Capture the Flag sur une plateforme faite pour s'entraîner. Plus de 50 vulnérabilités identifiées et documentées : upload malveillant, injection SQL. J'ai dû livrer un rapport avec des preuves ainsi que finir dans le concours top 2 Strasbourg et 37ème France.",
    reflection:
      "J'ai appris à trouver des failles critiques et à prioriser les vulnérabilités par criticité.",
    tags: ["Pentesting", "Burp Suite"],
    type: "featured",
    href: "#",
  },
  { 
    title: "Yowl",
    year: "2025",
    summary:
      "Site web reprenant les 3 platformes, Métacritique, bookvillage ainsi que serealizd.",
    reflection:
      "J'ai du réfléchir à une platforme capable de ce démarquer de ses concurrents tout en reprenant les fonctionnalités les plus utilisées. J'ai aussi appris à faire du scraping pour récupérer les données de ces sites.",
    tags: ["Python", "scraping", "React" , "Node.js"],
    type: "featured",
    href: "https://github.com/Seyf5",
  },
  {
    
    title: "ELIZA",
    year: "2025",
    summary:
      "Bot Discord utilisant de l'IA avec un business plan.",
    reflection:
      "Projet collaboratif. J'ai appris à travailler sur ma 1ère IA utilisable sur un bot Discord ainsi qu'à gérer sa sécurité et son éthique.",
    tags: ["Python", "discord.py", "NLP"],
    type: "featured",
    href: "https://github.com/Seyf5",
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
                  <a
                    href={p.href}
                    target={p.href !== "#" ? "_blank" : undefined}
                    rel="noreferrer"
                    className="text-[#b5bac1] group-hover:text-white transition-colors"
                    aria-label={p.title}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
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