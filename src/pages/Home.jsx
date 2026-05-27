import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Download, Shield, Code2, Terminal } from "lucide-react";
import PageWrapper from "@/components/site/PageWrapper";
import Section, { Eyebrow } from "@/components/site/Section";
import { fadeUp, stagger } from "@/lib/motion";

const stats = [
  { k: "8", v: "Stages réalisés" },
  { k: "3", v: "Projets professionnels déployés en entreprise" },
  { k: "Top 2", v: "Strasbourg CTF cybersécurité des EPITECH (Top 32 France)" },
  { k: "∞", v: "Curiosité" },
];

const highlights = [
  {
    icon: Shield,
    title: "Cybersécurité",
    desc: "Pentesting web, audits de sécurité, CTF. Je cherche les failles avant que les autres ne les trouvent.",
  },
  {
    icon: Code2,
    title: "Développement",
    desc: "Python, React. Je construis des outils qui résolvent de vrais problèmes pour des entreprises.",
  },
  {
    icon: Terminal,
    title: "Systèmes & Réseaux",
    desc: "Linux, PowerShell, Active Directory. Le réseau, c'est ce que j'aime.",
  },
];

export default function Home() {
  return (
    <PageWrapper>
      <div className="relative">
        <div className="absolute inset-0 grid-bg pointer-events-none" />

        <Section className="relative">
          <motion.div
            variants={stagger(0.12)}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#313338] bg-[#1e1f22] text-xs text-[#b5bac1] mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#5865f2] opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5865f2]" />
              </span>
              Epitech Strasbourg · Promo 2028 · En recherche de stage
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.05] glow-text"
            >
              SFAXI <span className="text-[#5865f2]">Seyf</span>
              <br />
              <span className="text-[#b5bac1] font-display">cybersécurité</span>
              <br />
              <span className="text-white">& développement.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 text-lg text-[#b5bac1] max-w-xl leading-relaxed"
            >
              Je suis celui qui trouve la petite faille là où on n'y pense pas.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#5865f2] hover:bg-[#4752c4] text-white text-sm font-semibold rounded-md transition-colors"
              >
                Voir mes projets <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 text-[#b5bac1] hover:text-white hover:bg-[#2b2d31] text-sm font-semibold rounded-md transition-colors"
              >
                <Download className="w-4 h-4" /> Télécharger le CV
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-12 flex items-center gap-6 text-sm text-[#80848e] flex-wrap"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#5865f2]" />
                Cybersécurité
              </div>
              <div className="hidden sm:block w-px h-4 bg-[#313338]" />
              <div>Python · React · PowerShell</div>
              <div className="hidden sm:block w-px h-4 bg-[#313338]" />
              <div>Epitech · Strasbourg</div>
            </motion.div>
          </motion.div>
        </Section>

        <Section className="!pt-0">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {stats.map((item, i) => (
              <motion.div
                key={item.v}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="rounded-xl border border-[#313338] bg-[#1e1f22] p-6 hover-lift"
              >
                <div className="font-display text-3xl font-bold text-white">{item.k}</div>
                <div className="text-sm text-[#80848e] mt-1">{item.v}</div>
              </motion.div>
            ))}
          </motion.div>
        </Section>

        <Section className="!pt-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                className="rounded-xl border border-[#313338] bg-[#1e1f22] p-7 hover-lift"
              >
                <div className="w-10 h-10 rounded-md bg-[#5865f2]/15 grid place-items-center mb-5">
                  <h.icon className="w-5 h-5 text-[#5865f2]" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white">{h.title}</h3>
                <p className="mt-2 text-sm text-[#b5bac1] leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section className="!pt-0">
          <div className="rounded-2xl border border-[#313338] bg-[#1e1f22] p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#5865f2]/20 rounded-full blur-3xl" />
            <div className="relative max-w-2xl">
              <Eyebrow>Le parcours</Eyebrow>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Un étudiant. Un créateur d'outils. Un passionné.
              </h2>
              <p className="mt-4 text-[#b5bac1] leading-relaxed">
                Ce portfolio est mon résumé de ma vie professionnelle. Il grandira encore avec mes projets, mes
                découvertes et mes erreurs. Explorez-le pour apprendre à me connaître et voir ce que
                j'ai appris et vers quoi je me dirige.
              </p>
              <div className="mt-8 flex flex-wrap gap-6">
                <Link
                  to="/journey"
                  className="text-sm font-semibold text-white hover:text-[#5865f2] transition-colors inline-flex items-center gap-2"
                >
                  Lire le parcours <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="text-sm font-semibold text-[#b5bac1] hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  Me contacter <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </PageWrapper>
  );
}