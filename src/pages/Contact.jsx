import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, Github, Linkedin, Loader2 } from "lucide-react";
import { toast } from "sonner";
import PageWrapper from "@/components/site/PageWrapper";
import Section, { Eyebrow } from "@/components/site/Section";

const infos = [
  { icon: Mail, label: "Email", value: "seyf.sfaxi@epitech.eu", href: "mailto:seyf.sfaxi@epitech.eu" },
  { icon: Phone, label: "Téléphone", value: "07 69 56 45 47", href: "tel:+33769564547" },
  { icon: MapPin, label: "Localisation", value: "Strasbourg, France", href: null },
  { icon: Github, label: "GitHub", value: "github.com/Seyf5", href: "https://github.com/Seyf5" },
  { icon: Linkedin, label: "LinkedIn", value: "Seyf Sfaxi", href: "https://www.linkedin.com/in/seyf-sfaxi-34a807292/" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      toast.error("Merci de remplir tous les champs.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast.success("Message envoyé — je vous réponds rapidement !");
      setForm({ name: "", email: "", subject: "", message: "" });
      setLoading(false);
    }, 900);
  };

  return (
    <PageWrapper>
      <Section>
        <Eyebrow>Contact</Eyebrow>
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white max-w-2xl">
          Construisons quelque chose ensemble.
        </h1>
        <p className="mt-4 text-[#b5bac1] max-w-2xl">
          Un projet, une question, un stage? — écrivez-moi et je vous réponds.
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-6">
          <motion.aside
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 rounded-2xl border border-[#313338] bg-[#1e1f22] p-7 h-fit space-y-6"
          >
            <div>
              <h2 className="font-display text-xl font-semibold text-white">Me contacter</h2>
              <p className="mt-2 text-sm text-[#b5bac1] leading-relaxed">
                Vous préféré les emails ? Je réponds généralement sous 48h.
              </p>
            </div>
            <div className="space-y-3">
              {infos.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-3 text-sm text-[#b5bac1]">
                  <span className="w-9 h-9 rounded-md bg-[#2b2d31] grid place-items-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-[#5865f2]" />
                  </span>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <span>{value}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.aside>

          <motion.form
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={onSubmit}
            className="lg:col-span-3 rounded-2xl border border-[#313338] bg-[#1e1f22] p-7 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="name" className="block text-sm text-[#b5bac1]">Nom</label>
                <input
                  id="name"
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Jean Dupont"
                  className="w-full px-4 py-2.5 rounded-md bg-[#0e0f10] border border-[#313338] text-white text-sm placeholder:text-[#80848e] outline-none focus:border-[#5865f2] focus:ring-1 focus:ring-[#5865f2] transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-sm text-[#b5bac1]">Email</label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="vous@domaine.fr"
                  className="w-full px-4 py-2.5 rounded-md bg-[#0e0f10] border border-[#313338] text-white text-sm placeholder:text-[#80848e] outline-none focus:border-[#5865f2] focus:ring-1 focus:ring-[#5865f2] transition-colors"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label htmlFor="subject" className="block text-sm text-[#b5bac1]">Sujet</label>
              <input
                id="subject"
                value={form.subject}
                onChange={update("subject")}
                placeholder="De quoi s'agit-il ?"
                className="w-full px-4 py-2.5 rounded-md bg-[#0e0f10] border border-[#313338] text-white text-sm placeholder:text-[#80848e] outline-none focus:border-[#5865f2] focus:ring-1 focus:ring-[#5865f2] transition-colors"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="message" className="block text-sm text-[#b5bac1]">Message</label>
              <textarea
                id="message"
                rows={6}
                value={form.message}
                onChange={update("message")}
                placeholder="Dites-m'en un peu plus…"
                className="w-full px-4 py-2.5 rounded-md bg-[#0e0f10] border border-[#313338] text-white text-sm placeholder:text-[#80848e] outline-none focus:border-[#5865f2] focus:ring-1 focus:ring-[#5865f2] transition-colors resize-none"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#5865f2] hover:bg-[#4752c4] disabled:opacity-50 text-white text-sm font-semibold rounded-md transition-colors"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Envoi…
                  </>
                ) : (
                  <>
                    Envoyer <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </Section>
    </PageWrapper>
  );
}