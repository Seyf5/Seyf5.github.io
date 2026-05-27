import { Github, Mail, Linkedin } from "lucide-react";

const socials = [
  { href: "https://github.com/Seyf5", label: "GitHub", icon: Github },
  { href: "https://www.linkedin.com/in/seyf-sfaxi-34a807292/", label: "LinkedIn", icon: Linkedin },
  { href: "mailto:seyf.sfaxi@epitech.eu", label: "Email", icon: Mail },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#313338] mt-24">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-[#80848e] font-body">
          © {new Date().getFullYear()} Seyf Sfaxi — Epitech Strasbourg · Promo 2028
        </p>
        <div className="flex items-center gap-2">
          {socials.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              aria-label={label}
              className="p-2 rounded-md text-[#b5bac1] hover:text-white hover:bg-[#2b2d31] transition-colors"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
