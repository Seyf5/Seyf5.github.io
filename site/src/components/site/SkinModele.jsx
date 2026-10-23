import { useEffect, useState } from "react";

export const SKIN = "/nationsglory/Seyf123-yeux.png";
export const REPLI = "/nationsglory/skin-full.png";

const SUR_XZ = 1.11;
const SUR_Y = 1.012;

const PARTS = {
  tete: { base: [0, 0], dim: [8, 8, 8], sur: [32, 0] },
  corps: { base: [16, 16], dim: [8, 12, 4], sur: [16, 32] },
  brasD: { base: [40, 16], dim: [4, 12, 4], sur: [40, 32] },
  brasG: { base: [32, 48], dim: [4, 12, 4], sur: [48, 48] },
  jambeD: { base: [0, 16], dim: [4, 12, 4], sur: [0, 32] },
  jambeG: { base: [16, 48], dim: [4, 12, 4], sur: [0, 48] },
};

function faces([bx, by], [w, h, d], px) {
  const W = w * px;
  const H = h * px;
  const D = d * px;
  return [
    { k: "haut", u: bx + d, v: by, w, h: d, t: `rotateX(90deg) translateZ(${H / 2}px)` },
    { k: "bas", u: bx + d + w, v: by, w, h: d, t: `rotateX(-90deg) translateZ(${H / 2}px)` },
    { k: "droite", u: bx, v: by + d, w: d, h, t: `rotateY(-90deg) translateZ(${W / 2}px)` },
    { k: "avant", u: bx + d, v: by + d, w, h, t: `translateZ(${D / 2}px)` },
    { k: "gauche", u: bx + d + w, v: by + d, w: d, h, t: `rotateY(90deg) translateZ(${W / 2}px)` },
    { k: "arriere", u: bx + d + w + d, v: by + d, w, h, t: `rotateY(180deg) translateZ(${D / 2}px)` },
  ];
}

function Cube({ base, dim, px, skin, sur = false, uniforme = false }) {
  const [w, h] = dim;
  const sy = uniforme ? SUR_XZ : SUR_Y;
  return (
    <div
      className="absolute left-1/2 top-0"
      style={{
        width: w * px,
        height: h * px,
        transformStyle: "preserve-3d",
        transform: sur
          ? `translateX(-50%) scale3d(${SUR_XZ}, ${sy}, ${SUR_XZ})`
          : "translateX(-50%)",
      }}
    >
      {faces(base, dim, px).map((f) => (
        <div
          key={f.k}
          className="absolute left-1/2 top-1/2"
          style={{
            width: f.w * px,
            height: f.h * px,
            marginLeft: (-f.w * px) / 2,
            marginTop: (-f.h * px) / 2,
            transform: f.t,
            backgroundImage: `url(${skin})`,
            backgroundSize: `${64 * px}px ${64 * px}px`,
            backgroundPosition: `${-f.u * px}px ${-f.v * px}px`,
            imageRendering: "pixelated",
            backfaceVisibility: "hidden",
          }}
        />
      ))}
    </div>
  );
}

function Membre({ nom, px, skin, className = "", style, children }) {
  const p = PARTS[nom];
  return (
    <div className={`absolute ${className}`} style={{ transformStyle: "preserve-3d", ...style }}>
      <Cube base={p.base} dim={p.dim} px={px} skin={skin} />
      <Cube base={p.sur} dim={p.dim} px={px} skin={skin} sur uniforme={nom === "tete"} />
      {children}
    </div>
  );
}

export default function SkinModele({ px, prefixe, skin = SKIN }) {
  const [casse, setCasse] = useState(false);
  const L = 4 * px;
  const C = 8 * px;

  useEffect(() => {
    const img = new Image();
    img.onerror = () => setCasse(true);
    img.src = skin;
  }, [skin]);

  if (casse) {

    if (skin !== SKIN) return null;
    return (
      <img
        src={REPLI}
        alt=""
        style={{ width: 16 * px, imageRendering: "pixelated" }}
        draggable={false}
      />
    );
  }

  return (
    <div className={`${prefixe}__corps`} style={{ transformStyle: "preserve-3d" }}>
      <Membre
        nom="jambeD"
        px={px}
        skin={skin}
        className={`${prefixe}__jambeD`}
        style={{ left: -L / 2, top: 12 * px, transformOrigin: "50% 3%" }}
      />
      <Membre
        nom="jambeG"
        px={px}
        skin={skin}
        className={`${prefixe}__jambeG`}
        style={{ left: L / 2, top: 12 * px, transformOrigin: "50% 3%" }}
      />
      <Membre
        nom="brasD"
        px={px}
        skin={skin}
        className={`${prefixe}__brasD`}
        style={{ left: -(C / 2 + L / 2), top: 0, transformOrigin: "50% 5%" }}
      />
      <Membre
        nom="brasG"
        px={px}
        skin={skin}
        className={`${prefixe}__brasG`}
        style={{ left: C / 2 + L / 2, top: 0, transformOrigin: "50% 5%" }}
      />
      <Membre nom="corps" px={px} skin={skin} style={{ left: 0, top: 0 }} />
      <Membre
        nom="tete"
        px={px}
        skin={skin}
        className={`${prefixe}__tete`}
        style={{ left: 0, top: -8 * px }}
      />
    </div>
  );
}
