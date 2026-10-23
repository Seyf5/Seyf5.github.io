import { Fragment } from "react";

const INLINE =
  /(!\[[^\]]*\]\([^)\s]+\)|\[[^\]]+\]\([^)\s]+\)|`[^`\n]+`|\*\*[^*\n]+\*\*|(?<![\w*])\*[^*\s][^*\n]*\*(?![\w*])|(?<![\w])_[^_\s][^_\n]*_(?![\w]))/g;

function inline(text, ctx, keyBase) {
  const out = [];
  let last = 0;
  let n = 0;
  for (const m of text.matchAll(INLINE)) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const tok = m[0];
    const key = `${keyBase}-${n++}`;
    let el;
    if (tok.startsWith("![")) {
      const [, alt, src] = tok.match(/^!\[([^\]]*)\]\(([^)\s]+)\)$/) || [];
      el =
        src && src.startsWith("/projets/") ? (
          <Img key={key} src={src} alt={alt} ctx={ctx} />
        ) : null;
    } else if (tok.startsWith("[")) {
      const [, label, href] = tok.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/) || [];
      el = /^https?:\/\//i.test(href || "") ? (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          className="text-[#7cb0ff] underline underline-offset-2 hover:text-white"
        >
          {label}
        </a>
      ) : (
        label
      );
    } else if (tok.startsWith("`")) {
      el = (
        <code
          key={key}
          className="px-1.5 py-0.5 rounded bg-[#2b2d31] border border-[#313338] text-[0.85em] font-mono text-[#e4e4e7] break-words"
        >
          {tok.slice(1, -1)}
        </code>
      );
    } else if (tok.startsWith("**")) {
      el = (
        <strong key={key} className="font-semibold text-white">
          {inline(tok.slice(2, -2), ctx, key)}
        </strong>
      );
    } else {
      el = <em key={key}>{inline(tok.slice(1, -1), ctx, key)}</em>;
    }
    out.push(el);
    last = m.index + tok.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function Img({ src, alt, ctx }) {
  return (
    <button
      type="button"
      onClick={() => ctx.onImage?.({ src, alt })}
      className="block my-3 max-w-full rounded-lg overflow-hidden border border-[#313338] hover:border-[#5865f2] transition-colors cursor-zoom-in text-left"
      aria-label={`Agrandir : ${alt || "capture"}`}
    >
      <img src={src} alt={alt} decoding="async" className="block max-w-full h-auto" />
    </button>
  );
}

function lines(text, ctx, keyBase) {
  const parts = text.split("\n");
  return parts.map((l, i) => (
    <Fragment key={`${keyBase}-l${i}`}>
      {inline(l.replace(/\s+$/, ""), ctx, `${keyBase}-${i}`)}
      {i < parts.length - 1 && <br />}
    </Fragment>
  ));
}

const BULLET = /^(\s*)[-*]\s+(.*)$/;
const isBlockStart = (l) => {
  const t = l.trim();
  return (
    /^```/.test(t) ||
    /^#{1,6}\s/.test(t) ||
    /^(-{3,}|\*{3,})$/.test(t) ||
    BULLET.test(l) ||
    /^!\[[^\]]*\]\([^)\s]+\)$/.test(t)
  );
};

function parse(src) {
  const ls = src.replace(/\r\n/g, "\n").split("\n");
  const blocks = [];
  let i = 0;
  while (i < ls.length) {
    const line = ls[i];
    const t = line.trim();
    if (!t) {
      i++;
      continue;
    }
    const fence = t.match(/^```(\w*)/);
    if (fence) {
      const code = [];
      i++;
      while (i < ls.length && !ls[i].trim().startsWith("```")) code.push(ls[i++]);
      i++;
      blocks.push({ type: "code", lang: fence[1], text: code.join("\n") });
      continue;
    }
    const h = t.match(/^(#{1,6})\s+(.*)$/);
    if (h) {
      blocks.push({ type: "h", level: h[1].length, text: h[2] });
      i++;
      continue;
    }
    if (/^(-{3,}|\*{3,})$/.test(t)) {
      blocks.push({ type: "hr" });
      i++;
      continue;
    }
    const img = t.match(/^!\[([^\]]*)\]\(([^)\s]+)\)$/);
    if (img) {
      blocks.push({ type: "img", alt: img[1], src: img[2] });
      i++;
      continue;
    }
    if (BULLET.test(line)) {
      const items = [];
      while (i < ls.length) {
        const l = ls[i];
        if (!l.trim()) {
          let j = i + 1;
          while (j < ls.length && !ls[j].trim()) j++;
          if (j < ls.length && BULLET.test(ls[j])) {
            i = j;
            continue;
          }
          break;
        }
        const b = l.match(BULLET);
        if (b) {
          items.push({ indent: b[1].length, text: b[2] });
          i++;
        } else if (/^\s{2,}\S/.test(l) && items.length && !/^\s*```/.test(l)) {
          items[items.length - 1].text += "\n" + l.trim();
          i++;
        } else break;
      }
      blocks.push({ type: "list", items });
      continue;
    }
    const para = [];
    while (i < ls.length && ls[i].trim() && !(para.length && isBlockStart(ls[i]))) {
      para.push(ls[i++]);
    }
    blocks.push({ type: "p", text: para.join("\n") });
  }
  return blocks;
}

function nest(items) {
  const root = { children: [], indent: -1 };
  const stack = [root];
  for (const it of items) {
    while (stack.length > 1 && it.indent <= stack[stack.length - 1].indent) stack.pop();
    const node = { text: it.text, indent: it.indent, children: [] };
    stack[stack.length - 1].children.push(node);
    stack.push(node);
  }
  return root.children;
}

function List({ nodes, ctx, keyBase, depth = 0 }) {
  return (
    <ul
      className={`list-disc space-y-1.5 text-[#b5bac1] ${depth ? "mt-1.5 pl-5" : "pl-5"} marker:text-[#5865f2]`}
    >
      {nodes.map((n, i) => (
        <li key={`${keyBase}-${i}`} className="leading-relaxed pl-1">
          {lines(n.text, ctx, `${keyBase}-${i}`)}
          {n.children.length > 0 && (
            <List nodes={n.children} ctx={ctx} keyBase={`${keyBase}-${i}`} depth={depth + 1} />
          )}
        </li>
      ))}
    </ul>
  );
}

export default function MiniMarkdown({ source, onImage }) {
  const ctx = { onImage };
  const blocks = parse(source);
  return (
    <div className="space-y-4 text-[15px] text-[#b5bac1] leading-relaxed">
      {blocks.map((b, i) => {
        const key = `b${i}`;
        switch (b.type) {
          case "h":
            return (
              <h4
                key={key}
                className={`font-display font-semibold text-white pt-2 ${
                  b.level <= 2 ? "text-lg" : "text-base"
                }`}
              >
                {inline(b.text, ctx, key)}
              </h4>
            );
          case "hr":
            return <hr key={key} className="border-[#313338]" />;
          case "img":
            return <Img key={key} src={b.src} alt={b.alt} ctx={ctx} />;
          case "code":
            return (
              <pre
                key={key}
                className="overflow-x-auto rounded-lg border border-[#313338] bg-[#111214] p-4 text-[13px] leading-relaxed font-mono text-[#e4e4e7]"
              >
                <code>{b.text}</code>
              </pre>
            );
          case "list":
            return <List key={key} nodes={nest(b.items)} ctx={ctx} keyBase={key} />;
          default:
            return <p key={key}>{lines(b.text, ctx, key)}</p>;
        }
      })}
    </div>
  );
}
