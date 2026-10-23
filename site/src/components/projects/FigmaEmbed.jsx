import { useState } from "react";
import { FIGMA } from "@/data/projectPages";
import { BrowserFrame } from "./Blocks";

const embedUrl = (proto) =>
  `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(proto)}`;

const VARIANTS = {
  desktop: { label: "Version ordinateur", url: FIGMA.desktop, height: "h-[34rem] sm:h-[40rem]", width: "w-full" },
  mobile: { label: "Version mobile", url: FIGMA.mobile, height: "h-[40rem]", width: "w-full max-w-sm mx-auto" },
};

export default function FigmaEmbed() {
  const [tab, setTab] = useState("desktop");
  const v = VARIANTS[tab];

  return (
    <BrowserFrame label="Prototype Figma interactif · Yowl" href={v.url}>
      <div className="p-4 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="inline-flex rounded-lg border border-[#313338] bg-[#111214] p-1" role="tablist">
            {Object.entries(VARIANTS).map(([key, item]) => (
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
                {item.label}
              </button>
            ))}
          </div>
          <p className="text-xs text-[#80848e]">
            Clique dans le prototype : connexion, profil, bibliothèque, fiche d'un livre, avis.
          </p>
        </div>

        <div className={`${v.width} rounded-xl overflow-hidden border border-[#313338] bg-[#111214]`}>
          <iframe
            key={tab}
            title={`Prototype Figma de Yowl, ${v.label.toLowerCase()}`}
            src={embedUrl(v.url)}
            className={`block w-full ${v.height}`}
            allowFullScreen
            loading="lazy"
          />
        </div>

        <p className="mt-3 text-xs text-[#80848e]">
          Le prototype ne s'affiche pas ?{" "}
          <a
            href={v.url}
            target="_blank"
            rel="noreferrer noopener"
            className="text-[#7cb0ff] underline underline-offset-2 hover:text-white"
          >
            Ouvre-le directement dans Figma
          </a>
          .
        </p>
      </div>
    </BrowserFrame>
  );
}
