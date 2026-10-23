import { useState } from "react";
import { FileText } from "lucide-react";
import { CARD, Lightbox } from "./Blocks";

const SETS = {
  maquettes: {
    label: "Maquettes",
    items: [
      ["home", "Accueil"],
      ["login", "Connexion"],
      ["profil", "Profil"],
      ["bibliotheque", "Bibliothèque de livres"],
      ["fiche-livre", "Fiche d'un livre"],
      ["avis", "Avis sur un livre"],
    ],
  },
  wireframes: {
    label: "Wireframes",
    items: [
      ["wf-home", "Accueil"],
      ["wf-login", "Connexion"],
      ["wf-profil", "Profil"],
    ],
  },
};

const STEPS = [
  "Recherche",
  "Personas",
  "Parcours",
  "Wireframes",
  "Maquettes",
  "Prototype",
  "Tests",
  "Priorisation",
  "Pitch",
];

export function YowlProcess() {
  return (
    <ol className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2">
      {STEPS.map((s, i) => (
        <li
          key={s}
          className="rounded-xl border border-[#313338] bg-[#17181a] px-3 py-3 text-center"
        >
          <span className="block font-mono text-[11px] text-[#5865f2]">{String(i + 1).padStart(2, "0")}</span>
          <span className="block mt-1 text-xs font-semibold text-white">{s}</span>
        </li>
      ))}
    </ol>
  );
}

export function YowlGallery() {
  const [tab, setTab] = useState("maquettes");
  const [zoom, setZoom] = useState(null);
  const set = SETS[tab];

  return (
    <div>
      <div className="inline-flex rounded-lg border border-[#313338] bg-[#111214] p-1" role="tablist">
        {Object.entries(SETS).map(([key, s]) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={tab === key}
            onClick={() => setTab(key)}
            className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-colors ${
              tab === key ? "bg-[#5865f2] text-white" : "text-[#b5bac1] hover:text-white"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {set.items.map(([file, label]) => (
          <figure key={file} className={`${CARD} overflow-hidden`}>
            <button
              type="button"
              onClick={() => setZoom({ src: `/projets/yowl/${file}.webp`, alt: label })}
              className="block w-full cursor-zoom-in"
              aria-label={`Agrandir : ${label}`}
            >
              <img
                src={`/projets/yowl/${file}.webp`}
                alt={`${set.label.slice(0, -1)} Yowl : ${label}`}
                loading="lazy"
                className="block w-full aspect-[16/10] object-cover object-top bg-[#111214]"
              />
            </button>
            <figcaption className="px-4 py-3 text-sm text-[#b5bac1]">{label}</figcaption>
          </figure>
        ))}
      </div>
      <Lightbox item={zoom} onClose={() => setZoom(null)} />
    </div>
  );
}

export function YowlPitch() {
  return (
    <div className={`${CARD} overflow-hidden`}>
      <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-[#313338]">
        <p className="flex items-center gap-2 text-sm font-semibold text-white">
          <FileText className="w-4 h-4 text-[#5865f2]" /> Pitch deck (PDF)
        </p>
        <a
          href="/projets/yowl/pitch_deck.pdf"
          target="_blank"
          rel="noreferrer noopener"
          className="text-xs font-semibold text-[#b5bac1] hover:text-white transition-colors"
        >
          Ouvrir ↗
        </a>
      </div>
      <iframe
        title="Pitch deck de Yowl"
        src="/projets/yowl/pitch_deck.pdf#view=FitH"
        className="hidden md:block w-full h-[30rem] bg-[#111214]"
        loading="lazy"
      />
      <p className="md:hidden px-5 py-6 text-sm text-[#b5bac1]">
        L'aperçu PDF n'est pas disponible sur mobile : utilise « Ouvrir » pour lire le pitch deck.
      </p>
    </div>
  );
}
