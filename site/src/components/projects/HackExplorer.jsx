import { useEffect, useMemo, useState } from "react";
import { Search, X, ImageIcon } from "lucide-react";
import findings from "@/data/hackFindings.json";
import MiniMarkdown from "./MiniMarkdown";
import { BrowserFrame, Lightbox } from "./Blocks";

const stars = (n) => "★".repeat(n) + "☆".repeat(Math.max(0, 6 - n));

const levelTone = (n) =>
  n <= 3
    ? "text-[#57f287] bg-[#57f287]/10 border-[#57f287]/30"
    : n === 4
      ? "text-[#fbbf24] bg-[#fbbf24]/10 border-[#fbbf24]/30"
      : "text-[#f87171] bg-[#f87171]/10 border-[#f87171]/30";

function Detail({ item, onClose, onImage, locked }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && !locked && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose, locked]);

  return (
    <div
      className="fixed inset-0 z-[70] bg-black/75 backdrop-blur-sm flex items-start sm:items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl border border-[#313338] bg-[#1e1f22] p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-[#b5bac1] hover:text-white hover:bg-[#2b2d31]"
          aria-label="Fermer le write-up"
        >
          <X className="w-5 h-5" />
        </button>
        <p className="text-xs font-mono text-[#80848e] pr-10">{item.category}</p>
        <h3 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-white pr-10">
          {item.title}
        </h3>
        <p className="mt-3">
          <span
            className={`inline-flex items-center gap-2 text-xs font-semibold px-2 py-1 rounded-md border ${levelTone(item.level)}`}
          >
            Niveau {item.level}
            <span className="tracking-widest" aria-hidden="true">
              {stars(item.level)}
            </span>
          </span>
        </p>
        <div className="mt-6">
          <MiniMarkdown source={item.body} onImage={onImage} />
        </div>
      </div>
    </div>
  );
}

export default function HackExplorer() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("all");
  const [maxLevel, setMaxLevel] = useState(6);
  const [open, setOpen] = useState(null);
  const [zoom, setZoom] = useState(null);

  const categories = useMemo(() => {
    const m = new Map();
    for (const f of findings) m.set(f.category, (m.get(f.category) || 0) + 1);
    return [...m.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  }, []);

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return findings.filter(
      (f) =>
        (cat === "all" || f.category === cat) &&
        f.level <= maxLevel &&
        (!q || `${f.title} ${f.category} ${f.body}`.toLowerCase().includes(q))
    );
  }, [query, cat, maxLevel]);

  return (
    <BrowserFrame label="Write-ups Juice Shop · exploration interactive">
      <div className="p-5 sm:p-7">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#b5bac1]">
          <p>
            <span className="font-display text-2xl font-bold text-white">{findings.length}</span>{" "}
            challenges documentés
          </p>
          <p>
            <span className="font-display text-2xl font-bold text-white">{categories.length}</span>{" "}
            catégories OWASP
          </p>
          <p>
            <span className="font-display text-2xl font-bold text-white">
              {findings.reduce((n, f) => n + f.images.length, 0)}
            </span>{" "}
            captures de preuve
          </p>
        </div>

        <div className="mt-6 flex flex-col lg:flex-row gap-3">
          <label className="relative flex-1">
            <span className="sr-only">Rechercher un challenge</span>
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#80848e]" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Chercher : sql, jwt, upload, captcha…"
              className="w-full rounded-lg bg-[#111214] border border-[#313338] pl-9 pr-3 py-2.5 text-sm text-white placeholder:text-[#80848e] focus:outline-none focus:border-[#5865f2]"
            />
          </label>
          <label className="flex items-center gap-3 text-sm text-[#b5bac1]">
            Niveau max
            <input
              type="range"
              min="3"
              max="6"
              value={maxLevel}
              onChange={(e) => setMaxLevel(Number(e.target.value))}
              className="accent-[#5865f2] w-32"
              aria-label="Niveau maximum"
            />
            <span className="font-mono text-white w-4">{maxLevel}</span>
          </label>
        </div>

        <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Catégories">
          {[["all", findings.length], ...categories].map(([name, count]) => (
            <button
              key={name}
              type="button"
              onClick={() => setCat(name)}
              aria-pressed={cat === name}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                cat === name
                  ? "bg-[#5865f2] border-[#5865f2] text-white"
                  : "bg-[#2b2d31] border-[#313338] text-[#b5bac1] hover:text-white hover:border-[#5865f2]/60"
              }`}
            >
              {name === "all" ? "Tout" : name} <span className="opacity-70 font-mono">{count}</span>
            </button>
          ))}
        </div>

        <p className="mt-5 text-xs text-[#80848e]" aria-live="polite">
          {shown.length} résultat{shown.length > 1 ? "s" : ""} - clique sur une carte pour lire le
          write-up complet.
        </p>

        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setOpen(f)}
              className="text-left rounded-xl border border-[#313338] bg-[#17181a] p-4 hover:border-[#5865f2] hover:bg-[#1a1b1e] transition-colors flex flex-col gap-2"
            >
              <span className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-[#80848e] truncate">{f.category}</span>
                <span
                  className={`shrink-0 text-[11px] font-semibold px-1.5 py-0.5 rounded border ${levelTone(f.level)}`}
                >
                  N{f.level}
                </span>
              </span>
              <span className="font-display text-base font-semibold text-white leading-snug">
                {f.title}
              </span>
              {f.images.length > 0 && (
                <span className="mt-auto inline-flex items-center gap-1.5 text-[11px] text-[#80848e]">
                  <ImageIcon className="w-3.5 h-3.5" />
                  {f.images.length} capture{f.images.length > 1 ? "s" : ""}
                </span>
              )}
            </button>
          ))}
        </div>

        {shown.length === 0 && (
          <p className="mt-6 text-sm text-[#b5bac1]">
            Aucun challenge ne correspond. Essaie un autre mot ou élargis le niveau.
          </p>
        )}
      </div>

      {open && (
        <Detail item={open} onClose={() => setOpen(null)} onImage={setZoom} locked={!!zoom} />
      )}
      <Lightbox item={zoom} onClose={() => setZoom(null)} />
    </BrowserFrame>
  );
}
