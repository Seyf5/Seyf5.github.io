import { motion } from "framer-motion";
import PageWrapper from "@/components/site/PageWrapper";
import Section, { Eyebrow } from "@/components/site/Section";
import { fadeUp, stagger } from "@/lib/motion";

const skills = {
  Cybersécurité: ["Pentesting Web", "Audit sécurité", "CTF", "Bug Bounty","Nmap", "Burp Suite"],
  Développement: ["Python", "JavaScript", "React", "HTML/CSS"],
  "Systèmes & Réseaux": ["Linux", "Bash", "PowerShell", "Active Directory", "Windows Server"],
  Outils: ["Git", "Vite", "Docker", "VS Code", "Tailwind"],
};

const traits = [
  {
    t: "Une réflexion offensive de pentester",
    d: "Les CTF auxquels j'ai participé, les projets en entreprise ainsi que les projets perso m'ont appris à trouver la petite bête dans les systèmes.",
  },
  {
    t: "Curieux & autodidacte",
    d: "J'ai découvert le Bash en 3ème par curiosité, pas par programme scolaire mais juste par passion.",
  },
  {
    t: "Passionné",
    d: "Ayant commencé depuis la 3ème, je travaille non par nécessité mais par passion, je peux rester des heures sur un projet pour le plaisir.",
  },
  {
    t: "Engagé",
    d: "Bénévole chez Emmaüs Connect et au Devfest. Convaincu que la tech a une responsabilité sociale.",
  },
];
export default function About() {
  return (
    <PageWrapper>
      <Section>
        <motion.div variants={stagger(0.1)} initial="hidden" animate="visible" className="max-w-3xl">
          <motion.div variants={fadeUp}>
            <Eyebrow>À propos</Eyebrow>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white"
          >
            Un étudiant fan de sécurité/réseau.
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 text-lg text-[#b5bac1] leading-relaxed">
            Je suis Seyf, étudiant à Epitech Strasbourg (promo 2028). Je passe la plupart de mon
            temps à étudier les dernières failles de sécurité découvertes, les nouveaux outils de gestion réseau et à créer des outils afin d'automatiser des tâches.
          </motion.p>
          <motion.p variants={fadeUp} className="mt-4 text-[#b5bac1] leading-relaxed">
            Tout a commencé en 3ème avec mes premiers programmes en Bash. Au lycée, j'ai trouvé
            une faille sur la plateforme de mon école permettant d'avoir accès au compte de toute l'administration — je l'ai signalée au lieu d'en abuser.
            Ce jour-là, j'ai su ce que je voulais faire.
          </motion.p>
          <motion.p variants={fadeUp} className="mt-4 text-[#b5bac1] leading-relaxed">
            Depuis avoir fait 8 stages de pratique professionnelle, des projets full-stack, des audits de sécurité, du réseau
            ainsi que du bénévolat dans l'apprentissage de la tech. Je construis des choses qui servent vraiment.
          </motion.p>
        </motion.div>
      </Section>

      <Section className="!pt-0">
        <Eyebrow>Ce que j'apporte</Eyebrow>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {traits.map((tr, i) => (
            <motion.div
              key={tr.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="rounded-xl border border-[#313338] bg-[#1e1f22] p-6 hover-lift"
            >
              <h3 className="font-display text-xl font-semibold text-white">{tr.t}</h3>
              <p className="mt-2 text-sm text-[#b5bac1] leading-relaxed">{tr.d}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <Eyebrow>Compétences techniques</Eyebrow>
        <div className="space-y-4 mt-6">
          {Object.entries(skills).map(([cat, items], i) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="rounded-xl border border-[#313338] bg-[#1e1f22] p-6"
            >
              <h4 className="text-xs uppercase tracking-widest text-[#80848e] mb-4 font-mono">
                {cat}
              </h4>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 rounded-md bg-[#2b2d31] text-[#f2f3f5] border border-[#313338] text-sm hover:bg-[#5865f2] hover:text-white transition-colors cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <Eyebrow>Hors école</Eyebrow>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {[
            {
              title: "Emmaüs Connect",
              sub: "Bénévolat numérique",
              desc: "Formation aux outils numériques pour des publics éloignés du digital. 2 missions (2022 & 2024).",
            },
            {
              title: "Devfest Strasbourg",
              sub: "Événement tech",
              desc: "Bénévole lors de la convention tech annuelle — logistique, accueil, animation.",
            },
            {
              title: "Échecs",
              sub: "Passion depuis 5 ans",
              desc: "11 ans en club compétitif. La patience et l'analyse que cela demande se retrouvent dans mon approche du debugging.",
            },
          ].map((x, i) => (
            <motion.div
              key={x.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="rounded-xl border border-[#313338] bg-[#1e1f22] p-6 hover-lift"
            >
              <div className="text-3xl mb-4">{x.emoji}</div>
              <p className="text-xs text-[#5865f2] uppercase tracking-widest font-bold mb-1">{x.sub}</p>
              <h3 className="font-display text-lg font-semibold text-white mb-2">{x.title}</h3>
              <p className="text-sm text-[#b5bac1] leading-relaxed">{x.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </PageWrapper>
  );
}