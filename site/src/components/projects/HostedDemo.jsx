import { Terminal } from "lucide-react";
import { BrowserFrame, CARD } from "./Blocks";

export const isDemoUrl = (url) =>
  typeof url === "string" &&
  (/^https:\/\//i.test(url.trim()) || /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?(\/|$)/i.test(url.trim()));

export default function HostedDemo({ url, title, offline }) {
  const ok = isDemoUrl(url);

  if (ok) {
    return (
      <BrowserFrame label={url} href={url}>
        <iframe
          title={title}
          src={url}
          className="block w-full h-[36rem] sm:h-[42rem] bg-[#111214]"
          loading="lazy"
          allow="fullscreen; clipboard-write"
        />
        <p className="px-5 py-3 text-xs text-[#80848e] border-t border-[#313338]">
          Si le cadre reste vide, la démo n'autorise peut-être pas l'intégration :{" "}
          <a
            href={url}
            target="_blank"
            rel="noreferrer noopener"
            className="text-[#7cb0ff] underline underline-offset-2 hover:text-white"
          >
            ouvre-la dans un nouvel onglet
          </a>
          .
        </p>
      </BrowserFrame>
    );
  }

  return (
    <div className={`${CARD} p-6 sm:p-8`}>
      <p className="text-sm text-[#b5bac1] leading-relaxed">{offline.text}</p>
      {offline.command && (
        <div className="mt-5 rounded-xl border border-[#313338] bg-[#111214] overflow-hidden">
          <p className="flex items-center gap-2 px-4 py-2.5 border-b border-[#313338] text-xs text-[#80848e] font-mono">
            <Terminal className="w-3.5 h-3.5" /> {offline.commandLabel}
          </p>
          <pre className="overflow-x-auto p-4 text-[13px] font-mono text-[#e4e4e7] leading-relaxed">
            <code>{offline.command}</code>
          </pre>
        </div>
      )}
      {offline.note && <p className="mt-4 text-xs text-[#80848e] leading-relaxed">{offline.note}</p>}
    </div>
  );
}
