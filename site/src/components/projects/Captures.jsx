import { useState } from "react";
import { Maximize2 } from "lucide-react";
import { CARD, Lightbox } from "./Blocks";

export default function Captures({ base, items }) {
  const [zoom, setZoom] = useState(null);

  return (
    <div>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none p-0 m-0">
        {items.map(([fichier, legende]) => {
          const src = `${base}/${fichier}.webp`;
          return (
            <li key={fichier}>
              <button
                type="button"
                onClick={() => setZoom({ src, alt: legende })}
                className={`${CARD} group block w-full overflow-hidden text-left transition-colors hover:border-[#5865f2]/50`}
                aria-label={`Agrandir : ${legende}`}
              >
                <span className="relative block">
                  <img
                    src={src}
                    alt={legende}
                    loading="lazy"
                    className="block w-full h-auto"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/45 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                    <span className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-black/55 px-3 py-1.5 text-xs font-semibold text-white">
                      <Maximize2 className="w-3.5 h-3.5" />
                      Agrandir
                    </span>
                  </span>
                </span>
                <span className="block px-4 py-3 text-sm text-[#a1a1aa]">{legende}</span>
              </button>
            </li>
          );
        })}
      </ul>
      <Lightbox item={zoom} onClose={() => setZoom(null)} />
    </div>
  );
}
