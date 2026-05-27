import { motion } from "framer-motion";
import PageWrapper from "@/components/site/PageWrapper";
import Section, { Eyebrow } from "@/components/site/Section";

const steps = [
  {
    period: "Collège — 3ème",
    title: "Les débuts autodidactes",
    body: "Mes premiers programmes en Bash, pas par obligation mais par curiosité.",
  },
  {
    period: "Lycée — Bac Pro SN",
    title: "La révélation pour le réseau et la cybersécurité",
    body: "J'ai découvert une faille sur la plateforme pédagogique de mon lycée me donnant accès à tous les comptes élèves. J'ai choisi de la signaler à la direction. Ce jour-là, j'ai su exactement ce que je voulais faire. 8 stages réalisés, dont 5 chez le même groupe en tant qu'administrateur système et réseau.",
  },
  {
    period: "Epitech — Spécialisation",
    title: "Cybersécurité & développement",
    body: "Audits de sécurité web, pentesting, j'aimerais me spécialiser dans la cybersécurité.",
  },
  {
    period: "Groupe Beyer — 2021-2025",
    title: "L'expérience terrain",
    body: "5 stages en administration réseau sur 3 ans. Installation de réseaux téléphoniques, déploiement de scripts PowerShell d'automatisation silencieuse, gestion d'Active Directory, support et ticketing. J'ai eu de vraies responsabilités dès le début.",
  },
  {
    period: "Epitech — Tek1",
    title: "Le début de mes études supérieures",
    body: "J'ai renforcé mes connaissances autour de la programmation, de la cybersécurité ainsi que du travail de groupe.",
  },
  {
    period: "Bénévolat continu",
    title: "Tech pour tous",
    body: "Emmaüs Connect (2022, 2024) : formation numérique pour des publics éloignés du digital. Devfest Strasbourg : bénévole dans la communauté tech locale.",
  },
  {
    period: "Prochaine étape",
    title: "Aller plus loin",
    body: "Apporter ma triple casquette : compétences en développement, sécurité, administration système et réseau. L'objectif : être le profil qui pense à la sécurité dès la conception afin d'éviter des problèmes futurs.",
  },
];

const lessons = [
  "Ne jamais arrêter d'apprendre, surtout que dans le monde de l'informatique, ça change tous les jours.",
  "La sécurité est primordiale : un projet/système sans protection risque des fuites de données clients ou pire.",
  "La pratique sur le terrain, les stages et les projets font progresser bien plus vite que la théorie seule.",
  "Partager ses connaissances rend la tech plus accessible et crée des équipes plus fortes.",
];

export default function Journey() {
  return (
    <PageWrapper>
      <Section>
        <Eyebrow>Parcours</Eyebrow>
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white max-w-2xl">
          Ce que j'ai appris, comment j'ai progressé.
        </h1>
        <p className="mt-4 text-[#b5bac1] max-w-2xl">
          Un aperçu de mon chemin — les étapes, les projets et les leçons qui ont changé
          ma façon de penser la sécurité et le développement.
        </p>
      </Section>

      <Section className="!pt-0">
        <div className="relative pl-6 md:pl-10">
          <div className="absolute left-2 md:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-[#5865f2] to-[#313338]" />
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="relative pb-10 last:pb-0"
            >
              <span className="absolute -left-[11px] md:-left-[19px] top-1.5 w-4 h-4 rounded-full bg-[#5865f2] ring-4 ring-[#0e0f10]" />
              <div className="text-xs tracking-[0.2em] uppercase text-[#80848e] font-mono">{s.period}</div>
              <h3 className="mt-2 font-display text-2xl font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-[#b5bac1] leading-relaxed max-w-2xl">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <Eyebrow>Leçons apprises</Eyebrow>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {lessons.map((l, i) => (
            <motion.blockquote
              key={l}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="rounded-xl border border-[#313338] bg-[#1e1f22] p-6 text-[#f2f3f5] leading-relaxed"
            >
              <span className="text-[#5865f2] mr-2 font-display text-xl">"</span>
              {l}
            </motion.blockquote>
          ))}
        </div>
      </Section>
    </PageWrapper>
  );
}