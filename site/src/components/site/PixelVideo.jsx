import { useState } from "react";
import { Play } from "lucide-react";

export default function PixelVideo({ src, poster, label, index }) {
  const [broken, setBroken] = useState(false);

  return (
    <figure className="group m-0">
      <div className="relative rounded-2xl overflow-hidden ng-card">
        {!broken ? (
          <video
            className="block w-full h-auto"
            src={src}
            poster={poster}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            onError={() => setBroken(true)}
          />
        ) : (
          <div className="aspect-video flex flex-col items-center justify-center gap-3">
            <div className="w-11 h-11 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center transition-colors group-hover:border-[#f0b357]/40">
              <Play className="w-4 h-4 text-[#f0b357] translate-x-[1px]" />
            </div>
            <p className="font-mono text-[10.5px] text-[#6f7079] tracking-[0.2em] uppercase">
              clip {index}
            </p>
          </div>
        )}
      </div>

      <figcaption className="mt-3.5 flex items-baseline gap-2.5">
        <span className="font-mono text-[11px] text-[#f0b357]/70 tabular-nums">
          {String(index).padStart(2, "0")}
        </span>
        <span className="text-sm text-[#a1a1aa] leading-snug">{label}</span>
      </figcaption>
    </figure>
  );
}
