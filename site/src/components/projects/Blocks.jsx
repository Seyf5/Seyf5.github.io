import { useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export const CARD = "rounded-2xl border border-[#313338] bg-[#1e1f22]";

export function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function H2({ children, id }) {
  return (
    <h2
      id={id}
      className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white"
    >
      {children}
    </h2>
  );
}

export function StatusPill({ kind = "live", children }) {
  const styles = {
    live: "text-[#57f287] bg-[#57f287]/10 border-[#57f287]/30",
    browser: "text-[#7cb0ff] bg-[#7cb0ff]/10 border-[#7cb0ff]/30",
    off: "text-[#fbbf24] bg-[#fbbf24]/10 border-[#fbbf24]/30",
  }[kind];
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-semibold px-2.5 py-1 rounded-md border ${styles}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full bg-current ${kind === "live" ? "animate-pulse" : ""}`}
      />
      {children}
    </span>
  );
}

export function BrowserFrame({ label, href, children, className = "" }) {
  return (
    <div className={`${CARD} overflow-hidden ${className}`}>
      <div className="flex items-center gap-3 px-4 py-3 border-b border-[#313338] bg-[#17181a]">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
        </span>
        <span className="flex-1 truncate text-xs font-mono text-[#80848e]">{label}</span>
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            className="text-xs font-semibold text-[#b5bac1] hover:text-white transition-colors whitespace-nowrap"
          >
            Ouvrir ↗
          </a>
        )}
      </div>
      {children}
    </div>
  );
}

export function Lightbox({ item, onClose }) {
  useEffect(() => {
    if (!item) return undefined;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [item, onClose]);

  if (!item) return null;
  return (
    <div
      className="fixed inset-0 z-[80] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={item.alt || "Capture"}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-lg bg-[#1e1f22] border border-[#313338] text-white hover:bg-[#2b2d31]"
        aria-label="Fermer"
      >
        <X className="w-5 h-5" />
      </button>
      <img
        src={item.src}
        alt={item.alt || ""}
        className="max-h-[88vh] max-w-full rounded-lg border border-[#313338] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
