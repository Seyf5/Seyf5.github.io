const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HackExplorer.js","assets/bibliotheques.js"])))=>i.map(i=>d[i]);
import { r as reactExports, p as jsxRuntimeExports, q as motion, L as Link, N as NavLink, D as Download, X, i as Menu, A as AnimatePresence, G as Github, d as Linkedin, M as Mail, s as useLocation, b as ArrowRight, o as Shield, C as CodeXml, T as Terminal, f as Lock, c as ArrowUpRight, j as Play, a as ArrowLeft, F as FileText, h as Maximize2, t as useParams, P as Phone, g as MapPin, e as LoaderCircle, n as Send, u as ue, H as HashRouter, $ as $e, m as Routes, l as Route, k as ReactDOM, R as React } from "./bibliotheques.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) return;
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) processPreload(link);
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") continue;
      for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep) return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "À propos" },
  { to: "/projects", label: "Projets" },
  { to: "/journey", label: "Parcours" },
  { to: "/contact", label: "Contact" }
];
function Navbar() {
  const [open, setOpen] = reactExports.useState(false);
  return jsxRuntimeExports.jsxs(
    motion.header,
    {
      initial: { y: -40, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      className: "fixed top-0 left-0 right-0 z-50 glass border-b border-[#313338]",
      children: [
        jsxRuntimeExports.jsxs("nav", { className: "max-w-6xl mx-auto h-16 flex items-center justify-between px-5 md:px-8", children: [
          jsxRuntimeExports.jsxs(Link, { to: "/", className: "group flex items-center gap-2", children: [
            jsxRuntimeExports.jsx(
              motion.span,
              {
                whileHover: { rotate: 12 },
                className: "w-8 h-8 rounded-md bg-[#5865f2] grid place-items-center font-display font-bold text-white text-sm",
                children: "S"
              }
            ),
            jsxRuntimeExports.jsxs("span", { className: "font-display font-semibold tracking-tight text-[#f2f3f5]", children: [
              "sfaxi",
              jsxRuntimeExports.jsx("span", { className: "text-[#5865f2]", children: "." }),
              "seyf"
            ] })
          ] }),
          jsxRuntimeExports.jsx("ul", { className: "hidden md:flex items-center gap-1", children: links.map((l) => jsxRuntimeExports.jsx("li", { children: jsxRuntimeExports.jsx(
            NavLink,
            {
              to: l.to,
              end: l.to === "/",
              className: ({ isActive }) => `relative px-4 py-2 text-sm rounded-md transition-colors ${isActive ? "text-white" : "text-[#b5bac1] hover:text-white"}`,
              children: ({ isActive }) => jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                l.label,
                isActive && jsxRuntimeExports.jsx(
                  motion.span,
                  {
                    layoutId: "nav-active",
                    className: "absolute inset-0 -z-10 rounded-md bg-[#2b2d31]",
                    transition: { type: "spring", stiffness: 380, damping: 30 }
                  }
                )
              ] })
            }
          ) }, l.to)) }),
          jsxRuntimeExports.jsx("div", { className: "hidden md:block", children: jsxRuntimeExports.jsxs(
            "a",
            {
              href: "/cv.pdf",
              download: true,
              className: "inline-flex items-center gap-2 px-4 py-2 bg-[#5865f2] hover:bg-[#4752c4] text-white text-sm font-semibold rounded-md transition-colors",
              children: [
                jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
                " CV"
              ]
            }
          ) }),
          jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setOpen((o) => !o),
              className: "md:hidden text-white p-2 rounded-md hover:bg-[#2b2d31]",
              "aria-label": "Toggle menu",
              children: open ? jsxRuntimeExports.jsx(X, { className: "w-5 h-5" }) : jsxRuntimeExports.jsx(Menu, { className: "w-5 h-5" })
            }
          )
        ] }),
        jsxRuntimeExports.jsx(AnimatePresence, { children: open && jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            transition: { duration: 0.25 },
            className: "md:hidden overflow-hidden border-t border-[#313338] bg-[#0e0f10]",
            children: jsxRuntimeExports.jsxs("ul", { className: "flex flex-col p-4 gap-1", children: [
              links.map((l) => jsxRuntimeExports.jsx("li", { children: jsxRuntimeExports.jsx(
                NavLink,
                {
                  to: l.to,
                  end: l.to === "/",
                  onClick: () => setOpen(false),
                  className: ({ isActive }) => `block px-4 py-3 rounded-md text-sm ${isActive ? "bg-[#2b2d31] text-white" : "text-[#b5bac1] hover:bg-[#1e1f22] hover:text-white"}`,
                  children: l.label
                }
              ) }, l.to)),
              jsxRuntimeExports.jsx("li", { className: "mt-2", children: jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "/cv.pdf",
                  download: true,
                  onClick: () => setOpen(false),
                  className: "flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-[#5865f2] hover:bg-[#4752c4] text-white text-sm transition-colors",
                  children: [
                    jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
                    " Télécharger CV"
                  ]
                }
              ) })
            ] })
          }
        ) })
      ]
    }
  );
}
const socials = [
  { href: "https://github.com/Seyf5", label: "GitHub", icon: Github },
  { href: "https://www.linkedin.com/in/seyf-sfaxi-34a807292/", label: "LinkedIn", icon: Linkedin },
  { href: "mailto:seyf.sfaxi@epitech.eu", label: "Email", icon: Mail }
];
function Footer() {
  return jsxRuntimeExports.jsx("footer", { className: "border-t border-[#313338] mt-24", children: jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-5 md:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6", children: [
    jsxRuntimeExports.jsxs("p", { className: "text-sm text-[#80848e] font-body", children: [
      "© ",
      (new Date()).getFullYear(),
      " Seyf Sfaxi - Epitech Strasbourg · Promo 2028"
    ] }),
    jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: socials.map(({ href, label, icon: Icon }) => jsxRuntimeExports.jsx(
      "a",
      {
        href,
        target: href.startsWith("mailto") ? void 0 : "_blank",
        rel: "noreferrer",
        "aria-label": label,
        className: "p-2 rounded-md text-[#b5bac1] hover:text-white hover:bg-[#2b2d31] transition-colors",
        children: jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4" })
      },
      label
    )) })
  ] }) });
}
function ScrollToTop() {
  const { pathname } = useLocation();
  reactExports.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  })
};
const stagger = (delay = 0.1) => ({
  hidden: {},
  visible: { transition: { staggerChildren: delay } }
});
const pageTransition = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.25 } }
};
function PageWrapper({ children }) {
  return jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: pageTransition.initial,
      animate: pageTransition.animate,
      exit: pageTransition.exit,
      className: "min-h-[calc(100vh-5rem)]",
      children
    }
  );
}
function Section({ id, children, className = "" }) {
  return jsxRuntimeExports.jsx(
    "section",
    {
      id,
      className: `max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 ${className}`,
      children
    }
  );
}
function Eyebrow$1({ children }) {
  return jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.25em] uppercase font-bold text-[#5865f2] mb-4", children });
}
const stats = [
  { k: "8", v: "Stages réalisés" },
  { k: "3", v: "Projets professionnels déployés en entreprise" },
  { k: "Top 2", v: "Strasbourg CTF cybersécurité des EPITECH (Top 32 France)" },
  { k: "∞", v: "Curiosité" }
];
const highlights = [
  {
    icon: Shield,
    title: "Cybersécurité",
    desc: "Pentesting web, audits de sécurité, CTF. Je cherche les failles avant que les autres ne les trouvent."
  },
  {
    icon: CodeXml,
    title: "Développement",
    desc: "Python, React. Je construis des outils qui résolvent de vrais problèmes pour des entreprises."
  },
  {
    icon: Terminal,
    title: "Systèmes & Réseaux",
    desc: "Linux, PowerShell, Active Directory. Le réseau, c'est ce que j'aime."
  }
];
function Home() {
  return jsxRuntimeExports.jsx(PageWrapper, { children: jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg pointer-events-none" }),
    jsxRuntimeExports.jsx(Section, { className: "relative", children: jsxRuntimeExports.jsxs(
      motion.div,
      {
        variants: stagger(0.12),
        initial: "hidden",
        animate: "visible",
        className: "max-w-3xl",
        children: [
          jsxRuntimeExports.jsxs(
            motion.div,
            {
              variants: fadeUp,
              className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#313338] bg-[#1e1f22] text-xs text-[#b5bac1] mb-8",
              children: [
                jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", children: [
                  jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full rounded-full bg-[#5865f2] opacity-75 animate-ping" }),
                  jsxRuntimeExports.jsx("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-[#5865f2]" })
                ] }),
                "Epitech Strasbourg · Promo 2028 · En recherche de stage"
              ]
            }
          ),
          jsxRuntimeExports.jsxs(
            motion.h1,
            {
              variants: fadeUp,
              className: "font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.05] glow-text",
              children: [
                "SFAXI ",
                jsxRuntimeExports.jsx("span", { className: "text-[#5865f2]", children: "Seyf" }),
                jsxRuntimeExports.jsx("br", {}),
                jsxRuntimeExports.jsx("span", { className: "text-[#b5bac1] font-display", children: "cybersécurité" }),
                jsxRuntimeExports.jsx("br", {}),
                jsxRuntimeExports.jsx("span", { className: "text-white", children: "& développement." })
              ]
            }
          ),
          jsxRuntimeExports.jsx(
            motion.p,
            {
              variants: fadeUp,
              className: "mt-8 text-lg text-[#b5bac1] max-w-xl leading-relaxed",
              children: "Je suis celui qui trouve la petite faille là où on n'y pense pas."
            }
          ),
          jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "mt-10 flex flex-wrap items-center gap-3", children: [
            jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/projects",
                className: "inline-flex items-center gap-2 px-6 py-3 bg-[#5865f2] hover:bg-[#4752c4] text-white text-sm font-semibold rounded-md transition-colors",
                children: [
                  "Voir mes projets ",
                  jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                ]
              }
            ),
            jsxRuntimeExports.jsxs(
              "a",
              {
                href: "/cv.pdf",
                download: true,
                className: "inline-flex items-center gap-2 px-6 py-3 text-[#b5bac1] hover:text-white hover:bg-[#2b2d31] text-sm font-semibold rounded-md transition-colors",
                children: [
                  jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
                  " Télécharger le CV"
                ]
              }
            )
          ] }),
          jsxRuntimeExports.jsxs(
            motion.div,
            {
              variants: fadeUp,
              className: "mt-12 flex items-center gap-6 text-sm text-[#80848e] flex-wrap",
              children: [
                jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  jsxRuntimeExports.jsx(Shield, { className: "w-4 h-4 text-[#5865f2]" }),
                  "Cybersécurité"
                ] }),
                jsxRuntimeExports.jsx("div", { className: "hidden sm:block w-px h-4 bg-[#313338]" }),
                jsxRuntimeExports.jsx("div", { children: "Python · React · PowerShell" }),
                jsxRuntimeExports.jsx("div", { className: "hidden sm:block w-px h-4 bg-[#313338]" }),
                jsxRuntimeExports.jsx("div", { children: "Epitech · Strasbourg" })
              ]
            }
          )
        ]
      }
    ) }),
    jsxRuntimeExports.jsx(Section, { className: "!pt-0", children: jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.6 },
        className: "grid grid-cols-2 md:grid-cols-4 gap-4",
        children: stats.map((item, i) => jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.08, duration: 0.5 },
            className: "rounded-xl border border-[#313338] bg-[#1e1f22] p-6 hover-lift",
            children: [
              jsxRuntimeExports.jsx("div", { className: "font-display text-3xl font-bold text-white", children: item.k }),
              jsxRuntimeExports.jsx("div", { className: "text-sm text-[#80848e] mt-1", children: item.v })
            ]
          },
          item.v
        ))
      }
    ) }),
    jsxRuntimeExports.jsx(Section, { className: "!pt-0", children: jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: highlights.map((h, i) => jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.1, duration: 0.55 },
        className: "rounded-xl border border-[#313338] bg-[#1e1f22] p-7 hover-lift",
        children: [
          jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-md bg-[#5865f2]/15 grid place-items-center mb-5", children: jsxRuntimeExports.jsx(h.icon, { className: "w-5 h-5 text-[#5865f2]" }) }),
          jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold text-white", children: h.title }),
          jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-[#b5bac1] leading-relaxed", children: h.desc })
        ]
      },
      h.title
    )) }) }),
    jsxRuntimeExports.jsx(Section, { className: "!pt-0", children: jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-[#313338] bg-[#1e1f22] p-8 md:p-12 relative overflow-hidden", children: [
      jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -right-20 w-72 h-72 bg-[#5865f2]/20 rounded-full blur-3xl" }),
      jsxRuntimeExports.jsxs("div", { className: "relative max-w-2xl", children: [
        jsxRuntimeExports.jsx(Eyebrow$1, { children: "Le parcours" }),
        jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-4xl font-bold tracking-tight text-white", children: "Un étudiant. Un créateur d'outils. Un passionné." }),
        jsxRuntimeExports.jsx("p", { className: "mt-4 text-[#b5bac1] leading-relaxed", children: "Ce portfolio est mon résumé de ma vie professionnelle. Il grandira encore avec mes projets, mes découvertes et mes erreurs. Explorez-le pour apprendre à me connaître et voir ce que j'ai appris et vers quoi je me dirige." }),
        jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-6", children: [
          jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/journey",
              className: "text-sm font-semibold text-white hover:text-[#5865f2] transition-colors inline-flex items-center gap-2",
              children: [
                "Lire le parcours ",
                jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
              ]
            }
          ),
          jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/contact",
              className: "text-sm font-semibold text-[#b5bac1] hover:text-white transition-colors inline-flex items-center gap-2",
              children: [
                "Me contacter ",
                jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
              ]
            }
          )
        ] })
      ] })
    ] }) })
  ] }) });
}
const skills = {
  Cybersécurité: ["Pentesting Web", "Audit sécurité", "CTF", "Bug Bounty", "Nmap", "Burp Suite"],
  Développement: ["Python", "JavaScript", "React", "HTML/CSS"],
  "Systèmes & Réseaux": ["Linux", "Bash", "PowerShell", "Active Directory", "Windows Server"],
  Outils: ["Git", "Vite", "Docker", "VS Code", "Tailwind"]
};
const traits = [
  {
    t: "Une réflexion offensive de pentester",
    d: "Les CTF auxquels j'ai participé, les projets en entreprise ainsi que les projets perso m'ont appris à trouver la petite bête dans les systèmes."
  },
  {
    t: "Curieux & autodidacte",
    d: "J'ai découvert le Bash en 3ème par curiosité, pas par programme scolaire mais juste par passion."
  },
  {
    t: "Passionné",
    d: "Ayant commencé depuis la 3ème, je travaille non par nécessité mais par passion, je peux rester des heures sur un projet pour le plaisir."
  },
  {
    t: "Engagé",
    d: "Bénévole chez Emmaüs Connect et au Devfest. Convaincu que la tech a une responsabilité sociale."
  }
];
function About() {
  return jsxRuntimeExports.jsxs(PageWrapper, { children: [
    jsxRuntimeExports.jsx(Section, { children: jsxRuntimeExports.jsxs(motion.div, { variants: stagger(0.1), initial: "hidden", animate: "visible", className: "max-w-3xl", children: [
      jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, children: jsxRuntimeExports.jsx(Eyebrow$1, { children: "À propos" }) }),
      jsxRuntimeExports.jsx(
        motion.h1,
        {
          variants: fadeUp,
          className: "font-display text-4xl sm:text-5xl font-bold tracking-tight text-white",
          children: "Un étudiant fan de sécurité/réseau."
        }
      ),
      jsxRuntimeExports.jsx(motion.p, { variants: fadeUp, className: "mt-6 text-lg text-[#b5bac1] leading-relaxed", children: "Je suis Seyf, étudiant à Epitech Strasbourg (promo 2028). Je passe la plupart de mon temps à étudier les dernières failles de sécurité découvertes, les nouveaux outils de gestion réseau et à créer des outils afin d'automatiser des tâches." }),
      jsxRuntimeExports.jsx(motion.p, { variants: fadeUp, className: "mt-4 text-[#b5bac1] leading-relaxed", children: "Tout a commencé en 3ème avec mes premiers programmes en Bash. Au lycée, j'ai trouvé une faille sur la plateforme de mon école permettant d'avoir accès au compte de toute l'administration - je l'ai signalée au lieu d'en abuser. Ce jour-là, j'ai su ce que je voulais faire." }),
      jsxRuntimeExports.jsx(motion.p, { variants: fadeUp, className: "mt-4 text-[#b5bac1] leading-relaxed", children: "Depuis avoir fait 9 stages de pratique professionnelle, des projets full-stack, des audits de sécurité, du réseau ainsi que du bénévolat dans l'apprentissage de la tech. Je construis des choses qui servent vraiment." })
    ] }) }),
    jsxRuntimeExports.jsxs(Section, { className: "!pt-0", children: [
      jsxRuntimeExports.jsx(Eyebrow$1, { children: "Ce que j'apporte" }),
      jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mt-6", children: traits.map((tr, i) => jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.08, duration: 0.5 },
          className: "rounded-xl border border-[#313338] bg-[#1e1f22] p-6 hover-lift",
          children: [
            jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold text-white", children: tr.t }),
            jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-[#b5bac1] leading-relaxed", children: tr.d })
          ]
        },
        tr.t
      )) })
    ] }),
    jsxRuntimeExports.jsxs(Section, { className: "!pt-0", children: [
      jsxRuntimeExports.jsx(Eyebrow$1, { children: "Compétences techniques" }),
      jsxRuntimeExports.jsx("div", { className: "space-y-4 mt-6", children: Object.entries(skills).map(([cat, items], i) => jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.06, duration: 0.5 },
          className: "rounded-xl border border-[#313338] bg-[#1e1f22] p-6",
          children: [
            jsxRuntimeExports.jsx("h4", { className: "text-xs uppercase tracking-widest text-[#80848e] mb-4 font-mono", children: cat }),
            jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: items.map((s) => jsxRuntimeExports.jsx(
              "span",
              {
                className: "px-3 py-1 rounded-md bg-[#2b2d31] text-[#f2f3f5] border border-[#313338] text-sm hover:bg-[#5865f2] hover:text-white transition-colors cursor-default",
                children: s
              },
              s
            )) })
          ]
        },
        cat
      )) })
    ] }),
    jsxRuntimeExports.jsxs(Section, { className: "!pt-0", children: [
      jsxRuntimeExports.jsx(Eyebrow$1, { children: "Hors école" }),
      jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mt-6", children: [
        {
          title: "Emmaüs Connect",
          sub: "Bénévolat numérique",
          desc: "Formation aux outils numériques pour des publics éloignés du digital. 2 missions (2022 & 2024)."
        },
        {
          title: "Devfest Strasbourg",
          sub: "Événement tech",
          desc: "Bénévole lors de la convention tech annuelle - logistique, accueil, animation."
        },
        {
          title: "Échecs",
          sub: "Passion depuis 5 ans",
          desc: "11 ans en club compétitif. La patience et l'analyse que cela demande se retrouvent dans mon approche du debugging."
        }
      ].map((x, i) => jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.08, duration: 0.5 },
          className: "rounded-xl border border-[#313338] bg-[#1e1f22] p-6 hover-lift",
          children: [
            jsxRuntimeExports.jsx("div", { className: "text-3xl mb-4", children: x.emoji }),
            jsxRuntimeExports.jsx("p", { className: "text-xs text-[#5865f2] uppercase tracking-widest font-bold mb-1", children: x.sub }),
            jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold text-white mb-2", children: x.title }),
            jsxRuntimeExports.jsx("p", { className: "text-sm text-[#b5bac1] leading-relaxed", children: x.desc })
          ]
        },
        x.title
      )) })
    ] })
  ] });
}
const projects = [
  {
    title: "Projet NationsGlory",
    year: "2026",
    summary: "Plugin Bukkit de traçage d'objets, déployé sur un serveur Minecraft moddé en production. Chaque exemplaire d'un objet rare reçoit un identifiant unique écrit dans son NBT, et le plugin reconstitue toute sa chaîne de possession : qui l'a eu, par quel coffre il est passé, où et quand.",
    reflection: "Projet personnel mené de bout en bout, du besoin réel jusqu'au déploiement : Java 17, API Bukkit de 2013, accès NBT par réflexion, et un serveur avec des joueurs connectés pendant que je livrais.",
    tags: ["Java 17", "Bukkit", "NBT", "Déploiement"],
    type: "personal",
    href: "/projects/nationsglory",
    internal: true,
    cta: "Voir plus d'infos sur le projet"
  },
  {
    title: "Stage - La CyberGrange",
    year: "2026",
    summary: "Mon stage de consultant en cybersécurité. J'ai conçu une plateforme de sensibilisation immersive : une journée d'entreprise jouable en 3D, doublée d'un simulateur de poste Windows. À travers douze mises en situation réelles - mot de passe faible, phishing, faux support, session non verrouillée - l'utilisateur forge ses réflexes de sécurité. La plateforme est en ligne et jouable.",
    reflection: "Un vrai travail de consultant : traduire des enjeux de sécurité en une expérience que n'importe quel employé comprend et retient.",
    tags: ["Cybersécurité", "Sensibilisation", "Babylon.js", "JavaScript"],
    type: "pro",
    href: "/projects/cybergrange",
    internal: true,
    cta: "Voir plus d'infos sur le stage"
  },
  {
    title: "Hack & Juice",
    year: "2025",
    summary: "Capture the Flag sur l'OWASP Juice Shop, une application volontairement vulnérable. Plus de 50 failles identifiées et documentées : upload malveillant, injection SQL, XSS. Chaque faille est livrée avec sa méthode, son risque, son correctif et des preuves. Classé top 2 à Strasbourg, 37e en France.",
    reflection: "J'ai appris à trouver des failles critiques et à les prioriser par criticité, puis à rédiger un rapport qu'une équipe peut utiliser pour corriger.",
    tags: ["Pentesting", "OWASP", "Burp Suite", "SQLi"],
    type: "featured",
    href: "/projects/hack-juice",
    internal: true,
    cta: "Voir plus d'infos sur le projet"
  },
  {
    title: "Exegol",
    year: "2026",
    summary: "Douze machines Linux volontairement vulnérables à compromettre, de la reconnaissance jusqu'à l'élévation de privilèges. Chaque intrusion donne lieu à un write-up complet avec les commandes et les captures qui prouvent chaque étape : scan Nmap, brute force, exploitation, prise de contrôle.",
    reflection: "Projet d'hacking éthique en binôme. J'ai appris à enchaîner les étapes d'une intrusion de façon méthodique et à tout documenter pour qu'un autre puisse reproduire et corriger.",
    tags: ["Hacking éthique", "Nmap", "Hydra", "Linux"],
    type: "featured",
    href: "/projects/exegol",
    internal: true,
    cta: "Voir plus d'infos sur le projet"
  },
  {
    title: "Stages - Groupe Beyer",
    year: "5 stages",
    summary: "Cinq stages dans la même entreprise, de la découverte aux missions de confiance. Un gestionnaire de mots de passe open source avec renouvellement automatique, hébergé en local sur Linux. Le déploiement de Windows 11 sur les postes, avec un serveur Windows et MDT : un appui sur F12 et le poste s'installe. Un script PowerShell avec interface pour installer les logiciels et configurer un poste. Et aussi du brassage réseau, du transfert de données et beaucoup de support.",
    reflection: "Cinq stages dans la même entreprise, c'est une relation de confiance : on finit par me confier des outils critiques utilisés chaque jour. C'est là que ma perception de la sécurité en entreprise a vraiment évolué.",
    tags: ["Sécurité", "Windows Server", "PowerShell", "Linux"],
    type: "pro",
    href: "/projects/stage-beyer",
    internal: true,
    cta: "Voir plus d'infos sur les stages"
  },
  {
    title: "E-TODO",
    year: "2025",
    summary: "Badgeuse et todo list d'équipe. Toute la pile se lance en une commande avec Docker : front React, API Express, base MySQL. Authentification par jeton JWT d'une heure, mots de passe hachés avec bcrypt, et contrôle d'accès par rôle vérifié côté API - un employé qui réclame les données d'un autre reçoit une erreur 403.",
    reflection: "Le projet où j'ai consolidé Docker et appris à penser l'authentification et les droits d'accès côté serveur, pas seulement l'interface.",
    tags: ["Docker", "JWT", "bcrypt", "Express.js", "MySQL"],
    type: "featured",
    href: "/projects/etodo",
    internal: true,
    cta: "Voir plus d'infos sur le projet"
  },
  {
    title: "Yowl",
    year: "2025",
    summary: "Application pour suivre films, séries, livres et jeux au même endroit, pensée depuis la recherche utilisateur : interviews, personas, wireframes, maquettes Figma, tests et priorisation du MVP.",
    reflection: "J'ai dû imaginer une plateforme capable de se démarquer de ses concurrentes tout en reprenant leurs fonctionnalités les plus utilisées.",
    tags: ["UX", "Figma", "React", "Node.js"],
    type: "featured",
    href: "/projects/yowl",
    internal: true,
    cta: "Voir plus d'infos sur le projet"
  },
  {
    title: "ELIZA",
    year: "2025",
    summary: "Epibot, un assistant pédagogique pour Discord. Il répond aux questions des élèves à partir d'un PDF de cours, avec des garde-fous qui bloquent les demandes de corrigés.",
    reflection: "Projet collaboratif. Ma première IA, où j'ai aussi dû réfléchir à sa sécurité et à son éthique : empêcher les détournements et protéger les secrets.",
    tags: ["Python", "discord.py", "NLP", "Sécurité"],
    type: "featured",
    href: "/projects/eliza",
    internal: true,
    cta: "Voir plus d'infos sur le projet"
  }
];
const typeIcons = {
  featured: Shield,
  personal: ArrowUpRight,
  school: Github,
  pro: ArrowUpRight,
  soon: Lock
};
const typeBadge = {
  featured: { label: "Epitech", cls: "text-[#5865f2] bg-[#5865f2]/10 border-[#5865f2]/30" },
  personal: { label: "Personnel", cls: "text-[#b5bac1] bg-[#2b2d31] border-[#313338]" },
  school: { label: "Epitech", cls: "text-[#b5bac1] bg-[#2b2d31] border-[#313338]" },
  pro: { label: "Pro", cls: "text-[#57f287] bg-[#57f287]/10 border-[#57f287]/30" }
};
function Projects() {
  return jsxRuntimeExports.jsxs(PageWrapper, { children: [
    jsxRuntimeExports.jsxs(Section, { children: [
      jsxRuntimeExports.jsx(Eyebrow$1, { children: "Projets" }),
      jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl sm:text-5xl font-bold tracking-tight text-white max-w-2xl", children: "Ce que j'ai construit." }),
      jsxRuntimeExports.jsx("p", { className: "mt-4 text-[#b5bac1] max-w-2xl", children: "Projets scolaires, personnels, chacun m'a appris quelque chose de concret." })
    ] }),
    jsxRuntimeExports.jsx(Section, { className: "!pt-0", children: jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: projects.map((p, i) => {
      const Icon = typeIcons[p.type] || ArrowUpRight;
      const badge = typeBadge[p.type];
      const isWide = i === 0;
      return jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.15 },
          transition: { delay: i * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
          className: `group relative rounded-2xl border border-[#313338] bg-[#1e1f22] p-7 overflow-hidden hover-lift flex flex-col gap-4 ${isWide ? "md:col-span-2" : ""}`,
          children: [
            jsxRuntimeExports.jsx("div", { className: "absolute -top-24 -right-24 w-56 h-56 bg-[#5865f2]/10 rounded-full blur-3xl group-hover:bg-[#5865f2]/25 transition-colors" }),
            jsxRuntimeExports.jsxs("div", { className: "relative flex items-start justify-between", children: [
              jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                jsxRuntimeExports.jsx("span", { className: "text-xs text-[#80848e] font-mono", children: p.year }),
                badge && jsxRuntimeExports.jsx("span", { className: `text-xs px-2 py-0.5 rounded border font-semibold ${badge.cls}`, children: badge.label })
              ] }),
              p.internal ? jsxRuntimeExports.jsx(
                Link,
                {
                  to: p.href,
                  className: "text-[#b5bac1] group-hover:text-white transition-colors",
                  "aria-label": p.title,
                  children: jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4" })
                }
              ) : jsxRuntimeExports.jsx(
                "a",
                {
                  href: p.href,
                  target: p.href !== "#" ? "_blank" : void 0,
                  rel: "noreferrer",
                  className: "text-[#b5bac1] group-hover:text-white transition-colors",
                  "aria-label": p.title,
                  children: jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4" })
                }
              )
            ] }),
            jsxRuntimeExports.jsx("h3", { className: "relative font-display text-2xl sm:text-3xl font-semibold text-white", children: p.title }),
            jsxRuntimeExports.jsx("p", { className: "relative text-sm text-[#b5bac1] leading-relaxed", children: p.summary }),
            p.reflection && jsxRuntimeExports.jsx("div", { className: "relative border-l-2 border-[#5865f2] pl-4", children: jsxRuntimeExports.jsx("p", { className: "text-xs text-[#80848e] italic leading-relaxed", children: p.reflection }) }),
            p.internal && jsxRuntimeExports.jsxs(
              Link,
              {
                to: p.href,
                className: "inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:opacity-75 transition-opacity w-fit after:absolute after:inset-0 after:content-['']",
                children: [
                  p.cta || "Voir le projet",
                  jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-4 h-4" })
                ]
              }
            ),
            jsxRuntimeExports.jsx("div", { className: "relative flex flex-wrap gap-2 mt-auto", children: p.tags.map((t) => jsxRuntimeExports.jsx(
              "span",
              {
                className: "px-2.5 py-1 rounded-md bg-[#2b2d31] text-[#b5bac1] border border-[#313338] text-xs font-mono",
                children: t
              },
              t
            )) })
          ]
        },
        p.title
      );
    }) }) })
  ] });
}
function PixelVideo({ src, poster, label, index }) {
  const [broken, setBroken] = reactExports.useState(false);
  return jsxRuntimeExports.jsxs("figure", { className: "group m-0", children: [
    jsxRuntimeExports.jsx("div", { className: "relative rounded-2xl overflow-hidden ng-card", children: !broken ? jsxRuntimeExports.jsx(
      "video",
      {
        className: "block w-full h-auto",
        src,
        poster,
        autoPlay: true,
        loop: true,
        muted: true,
        playsInline: true,
        preload: "metadata",
        onError: () => setBroken(true)
      }
    ) : jsxRuntimeExports.jsxs("div", { className: "aspect-video flex flex-col items-center justify-center gap-3", children: [
      jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center transition-colors group-hover:border-[#f0b357]/40", children: jsxRuntimeExports.jsx(Play, { className: "w-4 h-4 text-[#f0b357] translate-x-[1px]" }) }),
      jsxRuntimeExports.jsxs("p", { className: "font-mono text-[10.5px] text-[#6f7079] tracking-[0.2em] uppercase", children: [
        "clip ",
        index
      ] })
    ] }) }),
    jsxRuntimeExports.jsxs("figcaption", { className: "mt-3.5 flex items-baseline gap-2.5", children: [
      jsxRuntimeExports.jsx("span", { className: "font-mono text-[11px] text-[#f0b357]/70 tabular-nums", children: String(index).padStart(2, "0") }),
      jsxRuntimeExports.jsx("span", { className: "text-sm text-[#a1a1aa] leading-snug", children: label })
    ] })
  ] });
}
const SKIN = "/nationsglory/Seyf123-yeux.png";
const REPLI = "/nationsglory/skin-full.png";
const SUR_XZ = 1.11;
const SUR_Y = 1.012;
const PARTS = {
  tete: { base: [0, 0], dim: [8, 8, 8], sur: [32, 0] },
  corps: { base: [16, 16], dim: [8, 12, 4], sur: [16, 32] },
  brasD: { base: [40, 16], dim: [4, 12, 4], sur: [40, 32] },
  brasG: { base: [32, 48], dim: [4, 12, 4], sur: [48, 48] },
  jambeD: { base: [0, 16], dim: [4, 12, 4], sur: [0, 32] },
  jambeG: { base: [16, 48], dim: [4, 12, 4], sur: [0, 48] }
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
    { k: "arriere", u: bx + d + w + d, v: by + d, w, h, t: `rotateY(180deg) translateZ(${D / 2}px)` }
  ];
}
function Cube({ base, dim, px, skin, sur = false, uniforme = false }) {
  const [w, h] = dim;
  const sy = uniforme ? SUR_XZ : SUR_Y;
  return jsxRuntimeExports.jsx(
    "div",
    {
      className: "absolute left-1/2 top-0",
      style: {
        width: w * px,
        height: h * px,
        transformStyle: "preserve-3d",
        transform: sur ? `translateX(-50%) scale3d(${SUR_XZ}, ${sy}, ${SUR_XZ})` : "translateX(-50%)"
      },
      children: faces(base, dim, px).map((f) => jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute left-1/2 top-1/2",
          style: {
            width: f.w * px,
            height: f.h * px,
            marginLeft: -f.w * px / 2,
            marginTop: -f.h * px / 2,
            transform: f.t,
            backgroundImage: `url(${skin})`,
            backgroundSize: `${64 * px}px ${64 * px}px`,
            backgroundPosition: `${-f.u * px}px ${-f.v * px}px`,
            imageRendering: "pixelated",
            backfaceVisibility: "hidden"
          }
        },
        f.k
      ))
    }
  );
}
function Membre({ nom, px, skin, className = "", style, children }) {
  const p = PARTS[nom];
  return jsxRuntimeExports.jsxs("div", { className: `absolute ${className}`, style: { transformStyle: "preserve-3d", ...style }, children: [
    jsxRuntimeExports.jsx(Cube, { base: p.base, dim: p.dim, px, skin }),
    jsxRuntimeExports.jsx(Cube, { base: p.sur, dim: p.dim, px, skin, sur: true, uniforme: nom === "tete" }),
    children
  ] });
}
function SkinModele({ px, prefixe, skin = SKIN }) {
  const [casse, setCasse] = reactExports.useState(false);
  const L = 4 * px;
  const C = 8 * px;
  reactExports.useEffect(() => {
    const img = new Image();
    img.onerror = () => setCasse(true);
    img.src = skin;
  }, [skin]);
  if (casse) {
    if (skin !== SKIN) return null;
    return jsxRuntimeExports.jsx(
      "img",
      {
        src: REPLI,
        alt: "",
        style: { width: 16 * px, imageRendering: "pixelated" },
        draggable: false
      }
    );
  }
  return jsxRuntimeExports.jsxs("div", { className: `${prefixe}__corps`, style: { transformStyle: "preserve-3d" }, children: [
    jsxRuntimeExports.jsx(
      Membre,
      {
        nom: "jambeD",
        px,
        skin,
        className: `${prefixe}__jambeD`,
        style: { left: -L / 2, top: 12 * px, transformOrigin: "50% 3%" }
      }
    ),
    jsxRuntimeExports.jsx(
      Membre,
      {
        nom: "jambeG",
        px,
        skin,
        className: `${prefixe}__jambeG`,
        style: { left: L / 2, top: 12 * px, transformOrigin: "50% 3%" }
      }
    ),
    jsxRuntimeExports.jsx(
      Membre,
      {
        nom: "brasD",
        px,
        skin,
        className: `${prefixe}__brasD`,
        style: { left: -(C / 2 + L / 2), top: 0, transformOrigin: "50% 5%" }
      }
    ),
    jsxRuntimeExports.jsx(
      Membre,
      {
        nom: "brasG",
        px,
        skin,
        className: `${prefixe}__brasG`,
        style: { left: C / 2 + L / 2, top: 0, transformOrigin: "50% 5%" }
      }
    ),
    jsxRuntimeExports.jsx(Membre, { nom: "corps", px, skin, style: { left: 0, top: 0 } }),
    jsxRuntimeExports.jsx(
      Membre,
      {
        nom: "tete",
        px,
        skin,
        className: `${prefixe}__tete`,
        style: { left: 0, top: -8 * px }
      }
    )
  ] });
}
const PX$1 = 12.5;
function SkinHero() {
  return jsxRuntimeExports.jsx("div", { className: "ng-heros3d", style: { width: 16 * PX$1, height: 32 * PX$1 }, children: jsxRuntimeExports.jsx("div", { className: "ng-heros3d__buste", children: jsxRuntimeExports.jsx(SkinModele, { px: PX$1, prefixe: "ng-heros3d" }) }) });
}
const PX = 6.2;
const JOUEURS = [
  {
    cle: "toto",
    pseudo: "toto_le_rigolo",
    skin: "/nationsglory/toto_le_rigolo.png",
    classe: "ng-trio__gauche"
  },
  {
    cle: "seyf",
    pseudo: "Seyf123",
    skin: "/nationsglory/Seyf123-yeux.png",
    classe: "ng-trio__centre"
  },
  {
    cle: "panda",
    pseudo: "unpandakawaii",
    skin: "/nationsglory/unpandakawaii.png",
    classe: "ng-trio__droite"
  }
];
function SkinTrio() {
  return jsxRuntimeExports.jsx("div", { className: "ng-trio", children: JOUEURS.map((j) => jsxRuntimeExports.jsxs("figure", { className: `ng-trio__joueur ${j.classe}`, children: [
    jsxRuntimeExports.jsx("div", { className: "ng-trio__scene", style: { width: 16 * PX, height: 32 * PX }, children: jsxRuntimeExports.jsx("div", { className: "ng-trio__buste", children: jsxRuntimeExports.jsx(SkinModele, { px: PX, prefixe: j.classe.replace("ng-trio__", "ng-trio-"), skin: j.skin }) }) }),
    jsxRuntimeExports.jsx("figcaption", { className: "ng-trio__pseudo", children: j.pseudo })
  ] }, j.cle)) });
}
const GOLD = "#4075f0";
const clips = [
  {
    src: "/nationsglory/look%20id%20normal.mp4",
    label: "/look sur un joueur et l'id recherché permet le Traçage de base pour voir quel est l'id unique de l'item de ce joueur",
    index: 1
  },
  {
    src: "/nationsglory/look%20id%20unique.mp4",
    label: "/look id: suivi de son id unique permet d'avoir l'historique complet de joueur en joueur sur ce qui est arrivé à cet item. Un /look (numéro de la transaction) à été ajouté pour permettre de se téléporter à l'endroit exact de la transaction sans passée par les coordonée et la dimension.",
    index: 2
  }
];
const journal = [
  { t: "21:58", c: "#f87171", s: "−", who: "Seyf123", what: "jeté au sol", where: "event · 89 4 −24" },
  { t: "21:58", c: "#6ee7a0", s: "+", who: "Seyf123", what: "ramassé au sol", where: "event · 91 4 −22" },
  { t: "21:59", c: "#f87171", s: "−", who: "Seyf123", what: "déposé dans un coffre", where: "event · 88 4 −28" },
  { t: "21:59", c: "#6ee7a0", s: "+", who: "Seyf123", what: "repris dans le coffre", where: "event · 86 4 −28" },
  { t: "21:59", c: "#f87171", s: "−", who: "Seyf123", what: "jeté au sol", where: "event · 86 4 −28" },
  { t: "21:59", c: "#7cb0ff", s: ">>>", who: "Okomo", what: "transféré à", who2: "Seyf123", where: "event · 87 4 −30" }
];
const couleurJoueur = {};
const couleurDe = (pseudo) => couleurJoueur[pseudo] || "#e4e4e7";
const plateforme = [
  ["Version Minecraft", "1.6.4"],
  ["Serveur", "MCPC + hybride Forge 9.11.1.965 + Bukkit 1.6.4-R2.1"],
  ["Runtime", "17"],
  ["Côté", "Bukkit-side "],
  ["Stockage", "Fichier texte (traces.log)"],
  ["Dépendances externes", "Aucune"],
  ["État", "Déployé et en service sur un serveur de test avec plusieur joueur dessus"]
];
const deduction = [
  ["Remise directe", "A jette au sol, B ramasse à moins de 8 blocs, dans les 5 minutes", "5 min · 8 blocs"],
  ["Via conteneur", "A dépose en coffre, B y prend l'objet plus tard - même une heure après", "sans limite de temps"],
  ["Loot", "A meurt, B ramasse sur le cadavre", "6 min"]
];
const commandes = [
  ["/track <id>", "Journal d'un objet surveillé"],
  ["/track del <id>", "Retirer un objet du suivi"],
  ["/track sweep [id]", "Recenser les exemplaires existants sur le serveur"],
  ["/track list", "Les objets actuellement surveillés"],
  ["/look <pseudo> <id>", "Remonter la chaîne de possession"],
  ["/look <id>:<uid> [page]", "Historique d'un exemplaire précis"],
  ["/look tp <n>", "Se téléporter sur le lieu du transfert n"]
];
const pistes = [
  {
    k: "Brancher le plugin sur HawkEye",
    v: "Lire directement la base MySQL de HawkEye plutôt que mon fichier texte, une fois sa connexion réparée. Toutes les données du serveur seraient alors au même endroit, interrogeables ensemble, au lieu d'un fichier à part."
  },
  {
    k: "Détecter les duplications",
    v: "Un identifiant unique ne devrait jamais exister en deux exemplaires. S'il se dédouble une notif en chat admin serait envoyée a la connection d'un op afin de ban le joueur est un objectif intéréssant."
  },
  {
    k: "Ne plus dépendre d'un scan périodique",
    v: "Le marquage passe toutes les 5 secondes. Deux joueurs qui s'échangent l'objet plus vite que ça passent peuvent réussir à ne pas se faire log : sur dix échanges rapides, un peut n'être jamais enregistré. Il faudrait réagir à l'événement lui-même plutôt que de photographier les inventaires à intervalle fixe ou au moin utilité une partie de la base sql de hawk eyes."
  },
  {
    k: "Alléger le code",
    v: "Retirer ce qui ne sert pas. L'affichage du dernier détenteur, par exemple, répète une information déjà lisible sur la dernière ligne du journal c'est pas vraiment utile  ."
  }
];
function Eyebrow({ children }) {
  return jsxRuntimeExports.jsx("p", { className: "text-[11px] tracking-[0.28em] uppercase font-semibold text-[#6f7079] mb-4", children });
}
function H2$1({ children }) {
  return jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-[2.5rem] font-semibold text-white tracking-tight", children });
}
function Code({ children }) {
  return jsxRuntimeExports.jsx("div", { className: "ng-code rounded-2xl p-5 sm:p-6", children: jsxRuntimeExports.jsx("pre", { children }) });
}
function H3({ children, className = "" }) {
  return jsxRuntimeExports.jsx("h3", { className: `font-display text-[17px] font-semibold text-white mb-4 ${className}`, children });
}
function Reveal$1({ children, delay = 0, className = "" }) {
  return jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 18 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.15 },
      transition: { delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      className,
      children
    }
  );
}
function ProjectNationsGlory() {
  return jsxRuntimeExports.jsx(PageWrapper, { children: jsxRuntimeExports.jsxs("div", { className: "ng-page", children: [
    jsxRuntimeExports.jsxs(Section, { className: "!pb-12", children: [
      jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/projects",
          className: "inline-flex items-center gap-2 text-sm text-[#6f7079] hover:text-white transition-colors mb-12",
          children: [
            jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
            "Tous les projets"
          ]
        }
      ),
      jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-[1.4fr_1fr] gap-12 md:gap-16 items-center", children: [
        jsxRuntimeExports.jsxs("div", { children: [
          jsxRuntimeExports.jsx(Eyebrow, { children: "Projet personnel · 2026" }),
          jsxRuntimeExports.jsxs("h1", { className: "font-display text-[2.6rem] sm:text-6xl font-bold tracking-tight text-white leading-[1.03] flex items-center gap-4 flex-wrap", children: [
            jsxRuntimeExports.jsx("span", { children: "Projet NationsGlory" }),
            jsxRuntimeExports.jsx(
              "img",
              {
                src: "/nationsglory/logo.png",
                alt: "Logo NationsGlory",
                className: "ng-logo w-11 h-11 sm:w-14 sm:h-14 shrink-0",
                draggable: false
              }
            )
          ] }),
          jsxRuntimeExports.jsx("p", { className: "mt-5 font-display text-lg text-white/90", children: "NGItemTrack - Plugin de traçage d'items." }),
          jsxRuntimeExports.jsxs("p", { className: "mt-6 text-[17px] text-[#a1a1aa] max-w-xl leading-relaxed", children: [
            "Sur un serveur NG un item peux vite de déplacer, c'est pourquoi des plugins comme hawk eyes sont la mais malheuresement après beaucoup de déplacement ces items peux etre long a retrouvé : C'est pour sa que j'ai crée NGItemTrack, une version + simplifiée de tracage d'item avec des id unique . Les logs habituels savent dire qu'",
            jsxRuntimeExports.jsx("em", { children: "un" }),
            " item a bougé mais Jamais lequel."
          ] }),
          jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap gap-2", children: ["Java 17", "Bukkit", "MCPC+ / Forge", "Minecraft 1.6.4"].map((t) => jsxRuntimeExports.jsx(
            "span",
            {
              className: "px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-[#a1a1aa] text-xs",
              children: t
            },
            t
          )) }),
          jsxRuntimeExports.jsx("div", { className: "mt-9" }),
          jsxRuntimeExports.jsx("div", { className: "mt-10 flex flex-wrap gap-x-12 gap-y-6", children: [].map((s) => jsxRuntimeExports.jsxs("div", { children: [
            jsxRuntimeExports.jsx("p", { className: "font-display text-[2rem] leading-none font-semibold text-white tabular-nums", children: s.n }),
            jsxRuntimeExports.jsx("p", { className: "text-xs text-[#6f7079] mt-2 max-w-[120px] leading-snug", children: s.l })
          ] }, s.l)) })
        ] }),
        jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 18 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
            className: "relative flex flex-col items-center justify-end min-h-[340px]",
            children: [
              jsxRuntimeExports.jsx("div", { className: "ng-float", children: jsxRuntimeExports.jsx(SkinHero, {}) }),
              jsxRuntimeExports.jsx("div", { className: "ng-halo w-64 h-12 -mt-5" })
            ]
          }
        )
      ] })
    ] }),
    jsxRuntimeExports.jsxs(Section, { className: "!pt-8", children: [
      jsxRuntimeExports.jsx(Eyebrow, { children: "Le contexte" }),
      jsxRuntimeExports.jsx(H2$1, { children: "D'où vient l'idée." }),
      jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-12 md:gap-16 mt-10 items-center", children: [
        jsxRuntimeExports.jsxs(Reveal$1, { children: [
          jsxRuntimeExports.jsx("p", { className: "text-[15px] text-[#a1a1aa] leading-relaxed", children: "L'idée de ce plugin ne vien pas de nul part. Il vient de discussions avec les administrateurs de mon serveur. Certains remboursements d'items sont long a effectuer car un item peux vite se déplacer entre plusieurs joueurs et il est impossible de savoir lequel est le bon." }),
          jsxRuntimeExports.jsx("p", { className: "mt-4 text-[15px] text-[#a1a1aa] leading-relaxed", children: "Je me suis motivé est a commencé à développer ce plugin ainsi que d'autres idées qui m'ont été proposées. En plus d'un moyen d'un meilleur moyen de suivi d'item un moyen de chercher un item précis dans un inventaire de joueur dans un rayon ou encore un gamemode spectator pas encore fini. Ou d'autre initiatives de mon coté tels que des commandes pour enchanté tout les item dans un rayon dans un iventaire + coffre ou des protection en cas de kick pays" }),
          jsxRuntimeExports.jsx("p", { className: "mt-4 text-[15px] text-[#a1a1aa] leading-relaxed", children: "Cela ma donnée envie de rejoindre NG qui est un serveur sur lequel je joue depuis bientôt 7 ans afin d'aidée prioritairement le travail des staff en facilitant leurs travails. Cela par l'ajout de plugin que j'ai déja travailler dessu ou futur projet que j'aimerai travailler par la suite comme un mode spectateur." })
        ] }),
        jsxRuntimeExports.jsx(Reveal$1, { delay: 0.08, children: jsxRuntimeExports.jsx(SkinTrio, {}) })
      ] })
    ] }),
    jsxRuntimeExports.jsxs(Section, { className: "!pt-8", children: [
      jsxRuntimeExports.jsx(Eyebrow, { children: "Le fonctionnement" }),
      jsxRuntimeExports.jsx(H2$1, { children: "Sur quoi ça tourne." }),
      jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-12 md:gap-16 mt-10", children: [
        jsxRuntimeExports.jsx(Reveal$1, { children: jsxRuntimeExports.jsx("table", { className: "ng-table", children: jsxRuntimeExports.jsx("tbody", { children: plateforme.map(([k, v]) => jsxRuntimeExports.jsxs("tr", { children: [
          jsxRuntimeExports.jsx("td", { className: "!text-white font-medium", children: k }),
          jsxRuntimeExports.jsx("td", { children: v })
        ] }, k)) }) }) }),
        jsxRuntimeExports.jsxs(Reveal$1, { delay: 0.08, children: [
          jsxRuntimeExports.jsx(H3, { children: "Pourquoi Bukkit-side et pas un mod Forge" }),
          jsxRuntimeExports.jsx("ul", { className: "space-y-3.5 list-none p-0 m-0", children: [
            "Rien à installer côté joueur.",
            "Rechargeable sans redémarrer. Sur un serveur qui tourne en continu avec des joueurs connectés, livrer sans couper la partie change tout.",
            "L'API Bukkit couvre déjà tous les événements nécessaires : inventaires, coffres, morts, crafts, commandes."
          ].map((t) => jsxRuntimeExports.jsxs("li", { className: "flex gap-3 text-[15px] text-[#a1a1aa] leading-relaxed", children: [
            jsxRuntimeExports.jsx(
              "span",
              {
                className: "mt-2 w-1 h-1 rounded-full shrink-0",
                style: { background: GOLD }
              }
            ),
            t
          ] }, t)) })
        ] })
      ] })
    ] }),
    jsxRuntimeExports.jsxs(Section, { className: "!pt-8", children: [
      jsxRuntimeExports.jsx(Eyebrow, { children: "Les NBT" }),
      jsxRuntimeExports.jsx(H2$1, { children: "L'utilité du plugin." }),
      jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-12 md:gap-16 mt-10 items-start", children: [
        jsxRuntimeExports.jsxs(Reveal$1, { children: [
          jsxRuntimeExports.jsxs("p", { className: "text-[15px] text-[#a1a1aa] leading-relaxed", children: [
            "Dans Minecraft, un objet posé dans un inventaire n'est pas qu'un identifiant : il porte aussi un compartiment de données libres, le",
            " ",
            jsxRuntimeExports.jsx("span", { className: "font-mono text-[13px] text-white", children: "tag" }),
            ", où un plugin peut écrire ce qu'il veut."
          ] }),
          jsxRuntimeExports.jsxs("p", { className: "mt-4 text-[15px] text-[#a1a1aa] leading-relaxed", children: [
            "Le plugin y écrit une clé, une seule :",
            " ",
            jsxRuntimeExports.jsx("span", { className: "font-mono text-[13px] text-white", children: "ngit_uid" }),
            ", un numéro pris sur un compteur propre à ce type d'objet ",
            " ",
            jsxRuntimeExports.jsx("span", { className: "font-mono text-[13px] text-white", children: "00001" }),
            ", puis",
            " ",
            jsxRuntimeExports.jsx("span", { className: "font-mono text-[13px] text-white", children: "00002" }),
            ". Il n'écrit rien d'autre et ne lit rien d'autre."
          ] }),
          jsxRuntimeExports.jsxs("p", { className: "mt-4 text-[15px] text-[#a1a1aa] leading-relaxed", children: [
            "Ces info sont donnée à la suite des id après l'execution des commandes » par exemple «",
            "->Seyf123 à Okomo via jet au sol",
            "»."
          ] }),
          jsxRuntimeExports.jsx(H3, { className: "mt-8", children: "Ce que ça implique" }),
          jsxRuntimeExports.jsx("ul", { className: "space-y-3.5 list-none p-0 m-0", children: [
            "Le numéro est invisible en jeu hors pars les op : rien ne change dans l'apparence de l'objet.",
            "Tout comme avec hawk eyes ont voit sont chemin, - coffre, échange, mort, redémarrage.",
            "Ce qui est pratique et change de Hawk eyes c'est qu'avec ces id unique on peux différencier 2 item différents ayant a la base le même id et suivre son historique complet de joueur en joueur avec une commande."
          ].map((t) => jsxRuntimeExports.jsxs("li", { className: "flex gap-3 text-[15px] text-[#a1a1aa] leading-relaxed", children: [
            jsxRuntimeExports.jsx(
              "span",
              {
                className: "mt-2 w-1 h-1 rounded-full shrink-0",
                style: { background: GOLD }
              }
            ),
            t
          ] }, t)) })
        ] }),
        jsxRuntimeExports.jsxs(Reveal$1, { delay: 0.08, children: [
          jsxRuntimeExports.jsx(H3, { children: "Le NBT d'un Laser Spartan marqué" }),
          jsxRuntimeExports.jsxs(Code, { children: [
            jsxRuntimeExports.jsx("div", { className: "k", children: "NBT de l'objet" }),
            jsxRuntimeExports.jsxs("div", { children: [
              "├─ id 3699 ",
              jsxRuntimeExports.jsx("span", { className: "c", children: "- champ fixe" })
            ] }),
            jsxRuntimeExports.jsxs("div", { children: [
              "├─ Count 1 ",
              jsxRuntimeExports.jsx("span", { className: "c", children: "- champ fixe" })
            ] }),
            jsxRuntimeExports.jsxs("div", { children: [
              "└─ tag ",
              jsxRuntimeExports.jsx("span", { className: "c", children: "- branche des données libres" })
            ] }),
            jsxRuntimeExports.jsxs("div", { children: [
              "   ",
              "└─ ",
              jsxRuntimeExports.jsx("span", { className: "s", children: "ngit_uid" }),
              " ",
              jsxRuntimeExports.jsx("span", { className: "n", children: '"00003"' }),
              " ",
              jsxRuntimeExports.jsx("span", { className: "c", children: "← écrit par le plugin" })
            ] })
          ] }),
          jsxRuntimeExports.jsxs("p", { className: "mt-4 text-[15px] text-[#a1a1aa] leading-relaxed", children: [
            "Sur un objet neuf, la branche",
            " ",
            jsxRuntimeExports.jsx("span", { className: "font-mono text-[13px] text-white", children: "tag" }),
            " n'existe même pas : c'est le plugin qui la crée pour y déposer son numéro. Le reste du NBT lui est indifférent - il ne le lit pas, ne l'enregistre pas, ne le modifie pas."
          ] }),
          jsxRuntimeExports.jsx("p", { className: "mt-4 text-[15px] text-[#a1a1aa] leading-relaxed", children: "Il fait un swap de tout les item demander avec de leur attribué un ID unique qu'il soit droppé au sol dans un inventaire ou tout autre contenant." })
        ] })
      ] })
    ] }),
    jsxRuntimeExports.jsxs(Section, { className: "!pt-8 !max-w-[88rem]", children: [
      jsxRuntimeExports.jsx("div", { className: "flex items-end justify-between gap-6 flex-wrap mb-10", children: jsxRuntimeExports.jsxs("div", { children: [
        jsxRuntimeExports.jsx(Eyebrow, { children: "Exemple de l'utilisation du plugin en" }),
        jsxRuntimeExports.jsx(H2$1, { children: "Dection d'id unique." })
      ] }) }),
      jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-x-8 gap-y-10", children: clips.map((c, i) => jsxRuntimeExports.jsx(Reveal$1, { delay: i * 0.07, children: jsxRuntimeExports.jsx(PixelVideo, { ...c }) }, c.src)) })
    ] }),
    jsxRuntimeExports.jsx(Section, { className: "!pt-8", children: jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-12 md:gap-16 items-center", children: [
      jsxRuntimeExports.jsxs("div", { children: [
        jsxRuntimeExports.jsx(Eyebrow, { children: "La sortie" }),
        jsxRuntimeExports.jsx(H2$1, { children: "La sortie des commandes." }),
        jsxRuntimeExports.jsx("p", { className: "mt-5 text-[#a1a1aa] leading-relaxed", children: "Chaque mouvement porte son signe et sa couleur : vert quand l'objet entre chez quelqu'un, rouge quand il en sort, Bleu quand il y eu un trade . Un op lit la chaîne d'un coup d'œil et voit à quel maillon l'objet a été détourné, sans relire trois jours de logs bruts." }),
        jsxRuntimeExports.jsxs("p", { className: "mt-4 text-[#a1a1aa] leading-relaxed", children: [
          jsxRuntimeExports.jsx("span", { className: "font-mono text-[13px] text-white", children: "/look tp 3" }),
          " ",
          "téléporte à l'endroit exact de la transaction numéro 3 avec la bonne dimension."
        ] }),
        jsxRuntimeExports.jsx("p", { className: "mt-4 text-[#a1a1aa] leading-relaxed", children: "L'extrait ci-contre sort du journal réel du serveur. Les quatre premières lignes, c'est un joueur qui manipule son propre laser. Les deux dernières, c'est un transfert : Seyf123 le jette, Okomo le ramasse trois blocs plus loin dans la même seconde et le plugin relie les deux. On voit aussi que l'objet a été posé dans un coffre et repris par Seyf123 sa affiche donc un transfert  ." })
      ] }),
      jsxRuntimeExports.jsxs("div", { className: "ng-log rounded-2xl p-5 sm:p-6 overflow-x-auto", children: [
        jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 pb-4 mb-4 border-b border-white/[0.07]", children: [
          jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-white/10" }),
          jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-white/10" }),
          jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-white/10" }),
          jsxRuntimeExports.jsx("p", { className: "ml-2 font-mono text-[11px] text-[#6f7079]", children: "/look Seyf123 3699" })
        ] }),
        jsxRuntimeExports.jsxs("p", { className: "font-display text-sm text-white mb-4", children: [
          "Laser Spartan Blanc",
          " ",
          jsxRuntimeExports.jsx("span", { className: "font-mono text-[11px] text-[#6f7079]", children: "· uid 00003" })
        ] }),
        jsxRuntimeExports.jsx("div", { className: "font-mono text-[12px] leading-[2.05] whitespace-nowrap", children: journal.map((l, i) => jsxRuntimeExports.jsxs("p", { children: [
          jsxRuntimeExports.jsx("span", { className: "text-[#4a4b52]", children: l.t }),
          jsxRuntimeExports.jsx(
            "span",
            {
              style: { color: l.c },
              className: `inline-block text-center ${l.s.length > 1 ? "min-w-[2.4rem] tracking-[0.28em]" : "w-5"}`,
              children: l.s
            }
          ),
          jsxRuntimeExports.jsxs("span", { style: { color: couleurDe(l.who) }, children: [
            l.who,
            " "
          ] }),
          jsxRuntimeExports.jsx("span", { style: { color: l.c }, children: l.what }),
          l.who2 && jsxRuntimeExports.jsxs("span", { style: { color: couleurDe(l.who2) }, children: [
            " ",
            l.who2
          ] }),
          jsxRuntimeExports.jsxs("span", { className: "text-[#4a4b52]", children: [
            " - ",
            l.where
          ] })
        ] }, i)) })
      ] })
    ] }) }),
    jsxRuntimeExports.jsxs(Section, { className: "!pt-8", children: [
      jsxRuntimeExports.jsx(Eyebrow, { children: "Le stockage" }),
      jsxRuntimeExports.jsx(H2$1, { children: "Un simple fichier texte." }),
      jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-12 md:gap-16 mt-10 items-start", children: [
        jsxRuntimeExports.jsx(Reveal$1, { children: jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-3.5 list-none p-0 m-0", children: [
          "Se lit sans serveur de base de données.",
          "Se sauvegarde par une simple copie de fichier.",
          "Reste lisible et simpliste stocker dans un simple fichier texte.",
          "Survit à un serveur lors de crash étant donné que les logs se sauvegarde immédiatement."
        ].map((t) => jsxRuntimeExports.jsxs("li", { className: "flex gap-3 text-[15px] text-[#a1a1aa] leading-relaxed", children: [
          jsxRuntimeExports.jsx(
            "span",
            {
              className: "mt-2 w-1 h-1 rounded-full shrink-0",
              style: { background: GOLD }
            }
          ),
          t
        ] }, t)) }) }),
        jsxRuntimeExports.jsx(Reveal$1, { delay: 0.08, children: jsxRuntimeExports.jsxs("div", { className: "mt-8", children: [
          jsxRuntimeExports.jsx(H3, { children: "La configuration" }),
          jsxRuntimeExports.jsxs(Code, { children: [
            jsxRuntimeExports.jsx("span", { className: "c", children: "# seuls ces IDs sont journalisés ET tagués" }),
            "\n",
            jsxRuntimeExports.jsx("span", { className: "k", children: "items-surveilles" }),
            ":",
            "\n",
            "  - ",
            jsxRuntimeExports.jsx("span", { className: "n", children: "3699" }),
            "    ",
            jsxRuntimeExports.jsx("span", { className: "c", children: "# Laser Spartan" }),
            "\n  - ",
            jsxRuntimeExports.jsx("span", { className: "n", children: "4616" }),
            "    ",
            jsxRuntimeExports.jsx("span", { className: "c", children: "# Épée Mégalodon" }),
            "\n  - ",
            jsxRuntimeExports.jsx("span", { className: "n", children: "26016" }),
            "   ",
            jsxRuntimeExports.jsx("span", { className: "c", children: "# Dragon Bike" }),
            "\n\n",
            jsxRuntimeExports.jsx("span", { className: "k", children: "recenser à la-connexion" }),
            ":",
            " ",
            jsxRuntimeExports.jsx("span", { className: "n", children: "true" }),
            "\n",
            jsxRuntimeExports.jsx("span", { className: "k", children: "auto-tag" }),
            ": ",
            jsxRuntimeExports.jsx("span", { className: "n", children: "true" })
          ] })
        ] }) })
      ] })
    ] }),
    jsxRuntimeExports.jsxs(Section, { className: "!pt-8", children: [
      jsxRuntimeExports.jsx(Eyebrow, { children: "L'algorithme" }),
      jsxRuntimeExports.jsx(H2$1, { children: "Un comment il marche?." }),
      jsxRuntimeExports.jsx("p", { className: "mt-5 text-[#a1a1aa] leading-relaxed max-w-3xl", children: "Aucun événement Minecraft ne dit « A a donné l'objet à B ». Le passage d'un joueur à l'autre n'est jamais écrit : c'est pour sa que je l'ai construit à partir de trois règles." }),
      jsxRuntimeExports.jsx(Reveal$1, { className: "mt-9", children: jsxRuntimeExports.jsxs("table", { className: "ng-table", children: [
        jsxRuntimeExports.jsx("thead", { children: jsxRuntimeExports.jsxs("tr", { children: [
          jsxRuntimeExports.jsx("th", { children: "Voie" }),
          jsxRuntimeExports.jsx("th", { children: "Règle" }),
          jsxRuntimeExports.jsx("th", { children: "Fenêtre" })
        ] }) }),
        jsxRuntimeExports.jsx("tbody", { children: deduction.map(([v, r, f]) => jsxRuntimeExports.jsxs("tr", { children: [
          jsxRuntimeExports.jsx("td", { className: "!text-white font-medium", children: v }),
          jsxRuntimeExports.jsx("td", { className: "!whitespace-normal", children: r }),
          jsxRuntimeExports.jsx("td", { className: "font-mono !text-[13px] text-[#6f7079]", children: f })
        ] }, v)) })
      ] }) }),
      jsxRuntimeExports.jsx("p", { className: "mt-7 text-[15px] text-[#a1a1aa] leading-relaxed max-w-3xl", children: "Chaque actions de la chaîne retient son détenteur, ce qu'il a fait pendant qu'il tenait l'objet, et le transfert sortant vers le suivant. Le parcours s'arrête au dernier détenteur connu." })
    ] }),
    jsxRuntimeExports.jsxs(Section, { className: "!pt-8", children: [
      jsxRuntimeExports.jsx(Eyebrow, { children: "L'usage" }),
      jsxRuntimeExports.jsx(H2$1, { children: "Ce que tape un OP." }),
      jsxRuntimeExports.jsx(Reveal$1, { className: "mt-10", children: jsxRuntimeExports.jsxs("table", { className: "ng-table", children: [
        jsxRuntimeExports.jsx("thead", { children: jsxRuntimeExports.jsxs("tr", { children: [
          jsxRuntimeExports.jsx("th", { children: "Commande" }),
          jsxRuntimeExports.jsx("th", { children: "Effet" })
        ] }) }),
        jsxRuntimeExports.jsx("tbody", { children: commandes.map(([c, e]) => jsxRuntimeExports.jsxs("tr", { children: [
          jsxRuntimeExports.jsx("td", { className: "font-mono !text-[13.5px] !text-white", children: c }),
          jsxRuntimeExports.jsx("td", { className: "!whitespace-normal", children: e })
        ] }, c)) })
      ] }) }),
      jsxRuntimeExports.jsxs("p", { className: "mt-6 text-sm text-[#6f7079]", children: [
        "Permission ",
        jsxRuntimeExports.jsx("span", { className: "font-mono text-[13px]", children: "ngitemtrack.use" }),
        ", réservée aux opérateurs par défaut."
      ] })
    ] }),
    jsxRuntimeExports.jsxs(Section, { className: "!pt-8", children: [
      jsxRuntimeExports.jsx(Eyebrow, { children: "quoi d'autres ?" }),
      jsxRuntimeExports.jsx(H2$1, { children: "Quesque je changerais." }),
      jsxRuntimeExports.jsx("div", { className: "mt-10", children: jsxRuntimeExports.jsxs(Reveal$1, { children: [
        jsxRuntimeExports.jsx(H3, { children: "Les pistes, dans l'ordre où je les prendrais" }),
        jsxRuntimeExports.jsx("ol", { className: "space-y-5 list-none p-0 m-0", children: pistes.map((p, i) => jsxRuntimeExports.jsxs("li", { className: "flex gap-4", children: [
          jsxRuntimeExports.jsx("span", { className: "font-mono text-[11px] text-[#f0b357]/70 pt-1 tabular-nums", children: String(i + 1).padStart(2, "0") }),
          jsxRuntimeExports.jsxs("div", { children: [
            jsxRuntimeExports.jsx("p", { className: "font-display text-[15px] font-semibold text-white", children: p.k }),
            jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-[#a1a1aa] leading-relaxed", children: p.v })
          ] })
        ] }, p.k)) })
      ] }) })
    ] }),
    jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden py-24", children: [
      jsxRuntimeExports.jsx(
        "video",
        {
          className: "absolute inset-0 w-full h-full object-cover opacity-55",
          src: "/nationsglory/openspace.mp4",
          autoPlay: true,
          loop: true,
          muted: true,
          playsInline: true,
          preload: "auto",
          "aria-hidden": "true"
        }
      ),
      jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0",
          style: { background: "linear-gradient(180deg, #0b0b0f 0%, rgba(11,11,15,0.45) 28%, rgba(11,11,15,0.45) 72%, #0b0b0f 100%)" },
          "aria-hidden": "true"
        }
      ),
      jsxRuntimeExports.jsxs("div", { className: "relative mx-auto w-full max-w-6xl px-6", children: [
        jsxRuntimeExports.jsx(Eyebrow, { children: "Autour du projet" }),
        jsxRuntimeExports.jsx(H2$1, { children: "Petits projets perso." }),
        jsxRuntimeExports.jsx("p", { className: "mt-5 text-[#a1a1aa] leading-relaxed max-w-2xl", children: "À côté du plugin de traçage, j'ai développé quelques outils d'administration pour m'exercer et faciliter le travail du staff sur le serveur. En voici deux." }),
        jsxRuntimeExports.jsx("div", { className: "mt-12 grid md:grid-cols-2 gap-8", children: [
          {
            src: "/nationsglory/admintoolfindinv.mp4",
            nom: "AdminToolFindInv",
            desc: "Repère quels joueurs possèdent un objet donné dans un rayon autour de l'administrateur. Pratique pour suivre la trace d'un item ou enquêter sur une duplication."
          },
          {
            src: "/nationsglory/copyinv.mp4",
            nom: "CopyInv",
            desc: "Copie en un instant l'inventaire complet d'un joueur, pour inspecter ou reproduire son équipement sans manipulation fastidieuse."
          }
        ].map((p, i) => jsxRuntimeExports.jsx(Reveal$1, { delay: i * 0.1, children: jsxRuntimeExports.jsxs("figure", { className: "m-0", children: [
          jsxRuntimeExports.jsx("div", { className: "rounded-2xl overflow-hidden ng-card", children: jsxRuntimeExports.jsx(
            "video",
            {
              className: "block w-full h-auto",
              src: p.src,
              autoPlay: true,
              loop: true,
              muted: true,
              playsInline: true,
              preload: "metadata"
            }
          ) }),
          jsxRuntimeExports.jsxs("figcaption", { className: "mt-4", children: [
            jsxRuntimeExports.jsx("span", { className: "font-mono text-sm font-semibold", style: { color: GOLD }, children: p.nom }),
            jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm text-[#a1a1aa] leading-relaxed", children: p.desc })
          ] })
        ] }) }, p.src)) }),
        jsxRuntimeExports.jsx("div", { className: "mt-14", children: jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/projects",
            className: "inline-flex items-center gap-2 text-sm text-[#a1a1aa] hover:text-white transition-colors",
            children: [
              jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
              "Revenir aux projets"
            ]
          }
        ) })
      ] })
    ] })
  ] }) });
}
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    let allSettled = function(promises$2) {
      return Promise.all(promises$2.map((p) => Promise.resolve(p).then((value$1) => ({
        status: "fulfilled",
        value: value$1
      }), (reason) => ({
        status: "rejected",
        reason
      }))));
    };
    document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
    const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
    promise = allSettled(deps.map((dep) => {
      dep = assetsURL(dep);
      if (dep in seen) return;
      seen[dep] = true;
      const isCss = dep.endsWith(".css");
      const cssSelector = isCss ? '[rel="stylesheet"]' : "";
      if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) return;
      const link = document.createElement("link");
      link.rel = isCss ? "stylesheet" : scriptRel;
      if (!isCss) link.as = "script";
      link.crossOrigin = "";
      link.href = dep;
      if (cspNonce) link.setAttribute("nonce", cspNonce);
      document.head.appendChild(link);
      if (isCss) return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }));
  }
  function handlePreloadError(err$2) {
    const e$1 = new Event("vite:preloadError", { cancelable: true });
    e$1.payload = err$2;
    window.dispatchEvent(e$1);
    if (!e$1.defaultPrevented) throw err$2;
  }
  return promise.then((res) => {
    for (const item of res || []) {
      if (item.status !== "rejected") continue;
      handlePreloadError(item.reason);
    }
    return baseModule().catch(handlePreloadError);
  });
};
function NotFound() {
  return jsxRuntimeExports.jsx(PageWrapper, { children: jsxRuntimeExports.jsxs(Section, { className: "flex flex-col items-center justify-center text-center min-h-[60vh]", children: [
    jsxRuntimeExports.jsx("p", { className: "font-mono text-[#5865f2] text-sm mb-4", children: "404" }),
    jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl sm:text-5xl font-bold text-white mb-4", children: "Page introuvable." }),
    jsxRuntimeExports.jsx("p", { className: "text-[#b5bac1] mb-8 max-w-md", children: "Cette page n'existe pas ou a été déplacée." }),
    jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/",
        className: "inline-flex items-center gap-2 px-6 py-3 bg-[#5865f2] hover:bg-[#4752c4] text-white text-sm font-semibold rounded-md transition-colors",
        children: [
          jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
          " Retour à l'accueil"
        ]
      }
    )
  ] }) });
}
const projectPages = {
  eliza: {
    slug: "eliza",
    title: "ELIZA",
    subtitle: "Epibot, un assistant pédagogique pour Discord",
    year: "2025",
    module: "Epitech · B-AIA-210",
    intro: "Epibot répond aux questions des élèves avec un modèle de langage, garde le fil de la conversation et se défend contre les détournements de prompt. Il guide avec des indices au lieu de donner le code complet.",
    tags: ["Python", "discord.py", "Hugging Face", "Llama 3", "NLP"],
    facts: [
      ["Modèle", "Meta-Llama-3-8B-Instruct, via l'API Hugging Face"],
      ["Mémoire", "10 derniers messages gardés par utilisateur"],
      ["Contexte PDF", "Texte extrait avec PyMuPDF, jusqu'à ~2000 caractères"],
      ["Sécurité", "11 règles de détection, blocage au 3e avertissement"]
    ],
    reflection: "Projet collaboratif. J'y ai construit ma première IA utilisable sur un bot Discord, et j'ai appris à gérer sa sécurité et son éthique."
  },
  "hack-juice": {
    slug: "hack-juice",
    title: "Hack & Juice",
    subtitle: "Pentest de l'OWASP Juice Shop",
    year: "2025",
    module: "Epitech · B-SEC-100",
    intro: "Mon premier projet de cybersécurité : attaquer l'OWASP Juice Shop, une application volontairement vulnérable, et documenter chaque faille avec sa méthode, sa technique et des preuves en captures.",
    tags: ["Pentesting", "Burp Suite", "OWASP", "SQLi", "XSS"],
    facts: [
      ["Cible", "OWASP Juice Shop, en environnement de test contrôlé"],
      ["Résultat", "Top 2 Strasbourg · 37e en France"],
      ["Livrable", "Un rapport par challenge : méthodologie, technique, preuves"],
      ["Équipe", "En binôme, sous le nom GoOf Industry"]
    ],
    reflection: "J'ai appris à trouver des failles critiques et à prioriser les vulnérabilités selon leur criticité."
  },
  exegol: {
    slug: "exegol",
    title: "Exegol",
    subtitle: "Hacking éthique : douze machines vulnérables à compromettre",
    year: "2026",
    module: "Epitech · B-SPE-321",
    intro: "Une série de machines volontairement vulnérables à attaquer de la reconnaissance jusqu'à l'élévation de privilèges, en environnement de test isolé. Chaque compromission donne lieu à un write-up : la méthode, les commandes, et des captures qui prouvent chaque étape.",
    tags: ["Hacking éthique", "Nmap", "Hydra", "Linux", "Reconnaissance"],
    facts: [
      ["Cible", "Machines Linux isolées, redéployées à chaque session"],
      ["Démarche", "Reconnaissance → énumération → accès → élévation de privilèges"],
      ["Livrable", "Un write-up par machine, avec les preuves en captures"],
      ["Équipe", "En binôme, sept des douze write-ups rédigés avec mon contribution"]
    ],
    reflection: "J'ai appris à enchaîner les étapes d'une intrusion de façon méthodique et à documenter chaque faille pour qu'un autre puisse la reproduire et la corriger."
  },
  cybergrange: {
    slug: "cybergrange",
    title: "Stage - La CyberGrange",
    subtitle: "Consultant cybersécurité : une plateforme de sensibilisation immersive",
    year: "2026",
    module: "Stage en entreprise · La CyberGrange",
    intro: "Mon stage de consultant en cybersécurité, où j'ai conçu une plateforme de sensibilisation : une formation immersive qui place l'utilisateur dans une journée d'entreprise en 3D, doublée d'un simulateur de poste Windows. À travers douze mises en situation réelles, le joueur forge ses réflexes face aux mots de passe faibles, au phishing, au verrouillage de session.",
    tags: ["Cybersécurité", "Sensibilisation", "Babylon.js", "JavaScript", "Jeu web"],
    facts: [
      ["Objectif", "Apprendre les bons réflexes de sécurité par le jeu, pas par un diaporama"],
      ["Jeu 3D", "Une journée d'intégration à la première personne, dans les bureaux de l'entreprise"],
      ["Simulateur 2D", "Un poste Windows reconstitué, avec douze niveaux de mises en situation"],
      ["Thèmes", "Mots de passe forts, verrouillage de session, phishing, faux support, mobilité"]
    ],
    reflection: "Un vrai projet de consultant : traduire des enjeux de sécurité en une expérience que n'importe quel employé comprend et retient. C'est là que j'ai mesuré à quel point la sensibilisation compte autant que la technique.",
    demo: "https://maisonseyf.com/CybergrangeV2/frontend/public/"
  },
  "stage-beyer": {
    slug: "stage-beyer",
    title: "Stages - Groupe Beyer",
    subtitle: "Administration système et sécurité, au fil de cinq stages",
    year: "5 stages",
    module: "Cinq stages en entreprise · Groupe Beyer",
    intro: "Cinq stages au sein du groupe Beyer, qui m'ont vu passer de la découverte à des missions déployées en production pour tout le personnel. Trois en ressortent : un gestionnaire de mots de passe, le déploiement de Windows 11 sur les postes, et un script PowerShell pour les configurer. S'y ajoutent du réseau, du transfert de données et beaucoup de support au quotidien.",
    tags: ["Sécurité", "Windows Server", "MDT", "PowerShell", "Réseau", "Linux"],
    facts: [
      ["Fidélité", "Cinq stages dans la même entreprise, de la découverte aux missions de confiance"],
      ["Mots de passe", "Gestionnaire open source configuré pour tout le groupe, avec renouvellement automatique"],
      ["Déploiement", "Windows 11 installé par le réseau grâce à un serveur Windows et MDT"],
      ["Script", "Outil PowerShell avec interface pour installer les logiciels et configurer un poste"],
      ["Terrain", "Brassage réseau d'un nouveau secrétariat, transfert de données, support quotidien"]
    ],
    reflection: "Cinq stages dans la même entreprise, c'est une relation de confiance qui se construit : on finit par me confier des outils critiques utilisés chaque jour. C'est là que ma perception de la sécurité et de la responsabilité en entreprise a vraiment évolué."
  },
  yowl: {
    slug: "yowl",
    title: "Yowl",
    subtitle: "Un seul endroit pour suivre films, séries, livres et jeux",
    year: "2025",
    module: "Epitech · B-TBM-100",
    intro: "Yowl rassemble le suivi, la notation et la découverte d'œuvres culturelles dans une seule application, avec une communauté qui partage ses avis. Le projet suit toute la démarche produit, de la recherche au pitch.",
    tags: ["Figma", "UX", "React", "Tailwind", "MySQL"],
    facts: [
      ["Problème", "Les œuvres sont dispersées entre plusieurs plateformes"],
      ["Benchmark", "Letterboxd, Metacritic, Serializd, BookVillage"],
      ["Objectif", "100 inscrits le premier mois, satisfaction > 8/10 à six mois"],
      ["Méthode", "Personas, parcours, maquettes, tests, priorisation MoSCoW"]
    ],
    reflection: "J'ai dû imaginer une plateforme capable de se démarquer de ses concurrentes tout en reprenant les fonctionnalités les plus utilisées."
  },
  etodo: {
    slug: "etodo",
    title: "E-TODO",
    subtitle: "Une badgeuse et une todo list pour les équipes",
    year: "2025",
    module: "Epitech · B-WEB-101",
    intro: "Un manager crée des utilisateurs et suit leur présence grâce à un chronomètre de badgeage. Chaque employé gère aussi ses tâches dans une todo list en colonnes.",
    tags: ["React", "Express.js", "Prisma", "MySQL", "Docker"],
    facts: [
      ["Front-end", "React 19, Vite, Tailwind 4, glisser-déposer des tâches"],
      ["API", "Express, authentification JWT (1 h), mots de passe hachés avec bcrypt"],
      ["Données", "MySQL via Prisma : utilisateurs, tâches, sessions de badgeage"],
      ["Confort", "4 langues, thème sombre, mode daltonien, widget météo"]
    ],
    reflection: "J'ai appris à utiliser Express.js et MySQL, et amélioré mes connaissances sur Docker."
  }
};
const projectOrder = ["cybergrange", "hack-juice", "exegol", "stage-beyer", "etodo", "yowl", "eliza"];
const CARD = "rounded-2xl border border-[#313338] bg-[#1e1f22]";
function Reveal({ children, delay = 0, className = "" }) {
  return jsxRuntimeExports.jsx(
    motion.div,
    {
      className,
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.12 },
      transition: { delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      children
    }
  );
}
function H2({ children, id }) {
  return jsxRuntimeExports.jsx(
    "h2",
    {
      id,
      className: "font-display text-2xl sm:text-3xl font-bold tracking-tight text-white",
      children
    }
  );
}
function StatusPill({ kind = "live", children }) {
  const styles = {
    live: "text-[#57f287] bg-[#57f287]/10 border-[#57f287]/30",
    browser: "text-[#7cb0ff] bg-[#7cb0ff]/10 border-[#7cb0ff]/30",
    off: "text-[#fbbf24] bg-[#fbbf24]/10 border-[#fbbf24]/30"
  }[kind];
  return jsxRuntimeExports.jsxs(
    "span",
    {
      className: `inline-flex items-center gap-2 text-xs font-semibold px-2.5 py-1 rounded-md border ${styles}`,
      children: [
        jsxRuntimeExports.jsx(
          "span",
          {
            className: `w-1.5 h-1.5 rounded-full bg-current ${kind === "live" ? "animate-pulse" : ""}`
          }
        ),
        children
      ]
    }
  );
}
function BrowserFrame({ label, href, children, className = "" }) {
  return jsxRuntimeExports.jsxs("div", { className: `${CARD} overflow-hidden ${className}`, children: [
    jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-4 py-3 border-b border-[#313338] bg-[#17181a]", children: [
      jsxRuntimeExports.jsxs("span", { className: "flex gap-1.5", "aria-hidden": "true", children: [
        jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-white/10" }),
        jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-white/10" }),
        jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-white/10" })
      ] }),
      jsxRuntimeExports.jsx("span", { className: "flex-1 truncate text-xs font-mono text-[#80848e]", children: label }),
      href && jsxRuntimeExports.jsx(
        "a",
        {
          href,
          target: "_blank",
          rel: "noreferrer noopener",
          className: "text-xs font-semibold text-[#b5bac1] hover:text-white transition-colors whitespace-nowrap",
          children: "Ouvrir ↗"
        }
      )
    ] }),
    children
  ] });
}
function Lightbox({ item, onClose }) {
  reactExports.useEffect(() => {
    if (!item) return void 0;
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
  return jsxRuntimeExports.jsxs(
    "div",
    {
      className: "fixed inset-0 z-[80] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4",
      role: "dialog",
      "aria-modal": "true",
      "aria-label": item.alt || "Capture",
      onClick: onClose,
      children: [
        jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: onClose,
            className: "absolute top-4 right-4 p-2 rounded-lg bg-[#1e1f22] border border-[#313338] text-white hover:bg-[#2b2d31]",
            "aria-label": "Fermer",
            children: jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
          }
        ),
        jsxRuntimeExports.jsx(
          "img",
          {
            src: item.src,
            alt: item.alt || "",
            className: "max-h-[88vh] max-w-full rounded-lg border border-[#313338] shadow-2xl",
            onClick: (e) => e.stopPropagation()
          }
        )
      ]
    }
  );
}
const SETS = {
  maquettes: {
    label: "Maquettes",
    items: [
      ["home", "Accueil"],
      ["login", "Connexion"],
      ["profil", "Profil"],
      ["bibliotheque", "Bibliothèque de livres"],
      ["fiche-livre", "Fiche d'un livre"],
      ["avis", "Avis sur un livre"]
    ]
  },
  wireframes: {
    label: "Wireframes",
    items: [
      ["wf-home", "Accueil"],
      ["wf-login", "Connexion"],
      ["wf-profil", "Profil"]
    ]
  }
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
  "Pitch"
];
function YowlProcess() {
  return jsxRuntimeExports.jsx("ol", { className: "grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2", children: STEPS.map((s, i) => jsxRuntimeExports.jsxs(
    "li",
    {
      className: "rounded-xl border border-[#313338] bg-[#17181a] px-3 py-3 text-center",
      children: [
        jsxRuntimeExports.jsx("span", { className: "block font-mono text-[11px] text-[#5865f2]", children: String(i + 1).padStart(2, "0") }),
        jsxRuntimeExports.jsx("span", { className: "block mt-1 text-xs font-semibold text-white", children: s })
      ]
    },
    s
  )) });
}
function YowlGallery() {
  const [tab, setTab] = reactExports.useState("maquettes");
  const [zoom, setZoom] = reactExports.useState(null);
  const set = SETS[tab];
  return jsxRuntimeExports.jsxs("div", { children: [
    jsxRuntimeExports.jsx("div", { className: "inline-flex rounded-lg border border-[#313338] bg-[#111214] p-1", role: "tablist", children: Object.entries(SETS).map(([key, s]) => jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        role: "tab",
        "aria-selected": tab === key,
        onClick: () => setTab(key),
        className: `px-3.5 py-1.5 rounded-md text-xs font-semibold transition-colors ${tab === key ? "bg-[#5865f2] text-white" : "text-[#b5bac1] hover:text-white"}`,
        children: s.label
      },
      key
    )) }),
    jsxRuntimeExports.jsx("div", { className: "mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: set.items.map(([file, label]) => jsxRuntimeExports.jsxs("figure", { className: `${CARD} overflow-hidden`, children: [
      jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setZoom({ src: `/projets/yowl/${file}.webp`, alt: label }),
          className: "block w-full cursor-zoom-in",
          "aria-label": `Agrandir : ${label}`,
          children: jsxRuntimeExports.jsx(
            "img",
            {
              src: `/projets/yowl/${file}.webp`,
              alt: `${set.label.slice(0, -1)} Yowl : ${label}`,
              loading: "lazy",
              className: "block w-full aspect-[16/10] object-cover object-top bg-[#111214]"
            }
          )
        }
      ),
      jsxRuntimeExports.jsx("figcaption", { className: "px-4 py-3 text-sm text-[#b5bac1]", children: label })
    ] }, file)) }),
    jsxRuntimeExports.jsx(Lightbox, { item: zoom, onClose: () => setZoom(null) })
  ] });
}
function YowlPitch() {
  return jsxRuntimeExports.jsxs("div", { className: `${CARD} overflow-hidden`, children: [
    jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 px-5 py-4 border-b border-[#313338]", children: [
      jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2 text-sm font-semibold text-white", children: [
        jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4 text-[#5865f2]" }),
        " Pitch deck (PDF)"
      ] }),
      jsxRuntimeExports.jsx(
        "a",
        {
          href: "/projets/yowl/pitch_deck.pdf",
          target: "_blank",
          rel: "noreferrer noopener",
          className: "text-xs font-semibold text-[#b5bac1] hover:text-white transition-colors",
          children: "Ouvrir ↗"
        }
      )
    ] }),
    jsxRuntimeExports.jsx(
      "iframe",
      {
        title: "Pitch deck de Yowl",
        src: "/projets/yowl/pitch_deck.pdf#view=FitH",
        className: "hidden md:block w-full h-[30rem] bg-[#111214]",
        loading: "lazy"
      }
    ),
    jsxRuntimeExports.jsx("p", { className: "md:hidden px-5 py-6 text-sm text-[#b5bac1]", children: "L'aperçu PDF n'est pas disponible sur mobile : utilise « Ouvrir » pour lire le pitch deck." })
  ] });
}
function Captures({ base, items }) {
  const [zoom, setZoom] = reactExports.useState(null);
  return jsxRuntimeExports.jsxs("div", { children: [
    jsxRuntimeExports.jsx("ul", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none p-0 m-0", children: items.map(([fichier, legende]) => {
      const src = `${base}/${fichier}.webp`;
      return jsxRuntimeExports.jsx("li", { children: jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setZoom({ src, alt: legende }),
          className: `${CARD} group block w-full overflow-hidden text-left transition-colors hover:border-[#5865f2]/50`,
          "aria-label": `Agrandir : ${legende}`,
          children: [
            jsxRuntimeExports.jsxs("span", { className: "relative block", children: [
              jsxRuntimeExports.jsx(
                "img",
                {
                  src,
                  alt: legende,
                  loading: "lazy",
                  className: "block w-full h-auto"
                }
              ),
              jsxRuntimeExports.jsx("span", { className: "absolute inset-0 flex items-center justify-center bg-black/45 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100", children: jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-lg border border-white/20 bg-black/55 px-3 py-1.5 text-xs font-semibold text-white", children: [
                jsxRuntimeExports.jsx(Maximize2, { className: "w-3.5 h-3.5" }),
                "Agrandir"
              ] }) })
            ] }),
            jsxRuntimeExports.jsx("span", { className: "block px-4 py-3 text-sm text-[#a1a1aa]", children: legende })
          ]
        }
      ) }, fichier);
    }) }),
    jsxRuntimeExports.jsx(Lightbox, { item: zoom, onClose: () => setZoom(null) })
  ] });
}
const CAPTURES_ETODO = [
  ["tableau-de-bord", "Vue manager : sa pointeuse à gauche, l'historique de badgeage de toute l'équipe au centre, sa todo list à droite"],
  ["espace-employe", "Vue employé : le même écran, mais il ne voit que ses propres sessions. L'API renvoie une erreur 403 s'il réclame celles des autres"],
  ["creation-utilisateur", "Création d'un compte, avec le choix du rôle : manager ou employé"],
  ["profil", "Profil : modifier son nom, son email ou son mot de passe, et supprimer son compte"],
  ["connexion", "Connexion, avec thème clair ou sombre, mode daltonien et quatre langues"]
];
const CAPTURES_CYBERGRANGE = [
  ["les-niveaux", "Le cœur pédagogique : douze mises en situation, du premier réflexe à la gestion de crise - phishing, faux support, sécurité en mobilité"],
  ["accueil", "L'écran d'accueil de la formation immersive : une journée d'intégration en entreprise"],
  ["jeu-3d", "Le jeu 3D à la première personne : le joueur arrive dans les bureaux pour son premier jour"],
  ["simulateur-windows", "Le simulateur reconstitue un vrai poste Windows, jusqu'à l'écran de verrouillage"]
];
const CAPTURES_EXEGOL = [
  ["scan-nmap", "Reconnaissance : un scan Nmap révèle les services exposés et leurs versions"],
  ["reconnaissance", "Énumération du système une fois à l'intérieur : processus en cours et clé SSH privée laissée accessible"],
  ["brute-force", "Attaque par force brute d'un service d'authentification avec Hydra"],
  ["acces-obtenu", "Accès obtenu à la machine après exploitation de la faille"],
  ["elevation-privileges", "Élévation de privilèges : passage d'un compte limité à un compte à droits étendus"],
  ["flag-capture", "Preuve de compromission : le drapeau user.txt récupéré sur la cible"]
];
const HackExplorer = reactExports.lazy(() => __vitePreload(() => import("./HackExplorer.js"), true ? __vite__mapDeps([0,1]) : void 0));
function Block({ eyebrow, title, pill, children, className = "" }) {
  return jsxRuntimeExports.jsx(Section, { className: `!pt-0 ${className}`, children: jsxRuntimeExports.jsxs(Reveal, { children: [
    jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-4 mb-7", children: [
      jsxRuntimeExports.jsxs("div", { children: [
        eyebrow && jsxRuntimeExports.jsx(Eyebrow$1, { children: eyebrow }),
        jsxRuntimeExports.jsx(H2, { children: title })
      ] }),
      pill
    ] }),
    children
  ] }) });
}
function Facts({ facts }) {
  return jsxRuntimeExports.jsx("dl", { className: "grid gap-3 sm:grid-cols-2", children: facts.map(([k, v]) => jsxRuntimeExports.jsxs("div", { className: `${CARD} p-5`, children: [
    jsxRuntimeExports.jsx("dt", { className: "text-xs uppercase tracking-[0.2em] font-bold text-[#5865f2]", children: k }),
    jsxRuntimeExports.jsx("dd", { className: "mt-2 text-[15px] text-[#dbdee1] leading-relaxed", children: v })
  ] }, k)) });
}
function Steps({ items }) {
  return jsxRuntimeExports.jsx("ol", { className: "grid gap-3 md:grid-cols-2 lg:grid-cols-3", children: items.map(([k, v], i) => jsxRuntimeExports.jsxs("li", { className: `${CARD} p-5`, children: [
    jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-[#5865f2]", children: String(i + 1).padStart(2, "0") }),
    jsxRuntimeExports.jsx("p", { className: "mt-1 font-display text-lg font-semibold text-white", children: k }),
    jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-[#b5bac1] leading-relaxed", children: v })
  ] }, k)) });
}
function Table({ head, rows }) {
  return jsxRuntimeExports.jsx("div", { className: `${CARD} overflow-x-auto`, children: jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-sm", children: [
    jsxRuntimeExports.jsx("thead", { children: jsxRuntimeExports.jsx("tr", { className: "border-b border-[#313338] text-xs uppercase tracking-[0.15em] text-[#80848e]", children: head.map((h) => jsxRuntimeExports.jsx("th", { className: "px-5 py-3 font-bold", children: h }, h)) }) }),
    jsxRuntimeExports.jsx("tbody", { children: rows.map((r, i) => jsxRuntimeExports.jsx("tr", { className: "border-b border-[#313338]/60 last:border-0 align-top", children: r.map((c, j) => jsxRuntimeExports.jsx(
      "td",
      {
        className: `px-5 py-3 ${j === 0 ? "font-mono text-[13px] text-white whitespace-nowrap" : "text-[#b5bac1]"}`,
        children: c
      },
      j
    )) }, i)) })
  ] }) });
}
function Flow({ nodes }) {
  return jsxRuntimeExports.jsx("div", { className: "flex flex-col md:flex-row md:items-stretch gap-3", children: nodes.map(([k, v], i) => jsxRuntimeExports.jsxs("div", { className: "flex md:flex-1 flex-col md:flex-row items-stretch gap-3", children: [
    jsxRuntimeExports.jsxs("div", { className: `${CARD} p-4 flex-1`, children: [
      jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-white", children: k }),
      jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-[#b5bac1] leading-relaxed", children: v })
    ] }),
    i < nodes.length - 1 && jsxRuntimeExports.jsx(
      "span",
      {
        className: "self-center text-[#5865f2] font-mono rotate-90 md:rotate-0",
        "aria-hidden": "true",
        children: "→"
      }
    )
  ] }, k)) });
}
function Bullets({ items }) {
  return jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: items.map(([k, v]) => jsxRuntimeExports.jsxs("li", { className: `${CARD} p-5`, children: [
    jsxRuntimeExports.jsx("p", { className: "font-semibold text-white", children: k }),
    jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm text-[#b5bac1] leading-relaxed", children: v })
  ] }, k)) });
}
function ElizaBody() {
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    jsxRuntimeExports.jsx(Block, { eyebrow: "Fonctionnement", title: "Le trajet d'une question.", children: jsxRuntimeExports.jsx(
      Flow,
      {
        nodes: [
          ["/chat", "L'élève pose sa question, avec un PDF en option."],
          ["Garde-fous", "11 motifs repèrent les détournements. 3 alertes bloquent l'utilisateur."],
          ["Contexte", "Texte du PDF (~2000 caractères) et 10 derniers messages."],
          ["Llama 3 8B", "Modèle interrogé via Hugging Face, avec un prompt pédagogique."],
          ["Filtre de sortie", "Réponse remplacée si suspecte, coupée à 1900 caractères."]
        ]
      }
    ) }),
    jsxRuntimeExports.jsx(Block, { eyebrow: "Commandes", title: "Trois commandes slash.", children: jsxRuntimeExports.jsx(
      Table,
      {
        head: ["Commande", "Ce qu'elle fait"],
        rows: [
          ["/chat question [fichier]", "Pose une question à Epibot, avec un PDF optionnel comme contexte."],
          ["/reset", "Efface la mémoire de conversation de l'utilisateur."],
          ["/revoke membre", "Remet à zéro les avertissements d'un membre. Réservée au propriétaire."]
        ]
      }
    ) }),
    jsxRuntimeExports.jsx(Block, { eyebrow: "Recul", title: "Ce que je corrigerais.", children: jsxRuntimeExports.jsx(
      Bullets,
      {
        items: [
          [
            "Les secrets dans des variables d'environnement",
            "Les jetons d'accès ne doivent jamais vivre dans le code source : ils se chargent depuis l'environnement et se régénèrent s'ils ont été exposés."
          ],
          [
            "Des motifs moins sensibles à l'ordre des mots",
            "« Le corrigé complet avec tout le code » est bloqué alors que « le code complet » passe : les règles dépendent de l'ordre des mots. Une liste de motifs ne suffit pas, il faudrait la compléter par une modération côté modèle."
          ],
          [
            "Restreindre /revoke par identifiant Discord",
            "Comparer le nom d'utilisateur est fragile, car un nom se change. L'identifiant, lui, est stable."
          ],
          [
            "Garder les avertissements au redémarrage",
            "Mémoire et strikes vivent en RAM. Une petite base SQLite ou un fichier JSON suffirait à les conserver."
          ]
        ]
      }
    ) })
  ] });
}
function HackBody() {
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    jsxRuntimeExports.jsx(
      Block,
      {
        eyebrow: "Write-ups",
        title: "Parcours mes write-ups.",
        pill: jsxRuntimeExports.jsx(StatusPill, { kind: "browser", children: "Tourne dans ton navigateur" }),
        children: jsxRuntimeExports.jsx(
          reactExports.Suspense,
          {
            fallback: jsxRuntimeExports.jsx("div", { className: `${CARD} p-10 text-center text-sm text-[#80848e]`, children: "Chargement des write-ups…" }),
            children: jsxRuntimeExports.jsx(HackExplorer, {})
          }
        )
      }
    ),
    jsxRuntimeExports.jsxs(Block, { eyebrow: "Méthode", title: "Un rapport, toujours la même structure.", children: [
      jsxRuntimeExports.jsx(
        Steps,
        {
          items: [
            ["Vulnérabilité", "Le challenge est situé dans la classification OWASP et son niveau de difficulté."],
            ["Méthodologie", "Les étapes exactes, de la reconnaissance à l'exploitation, rejouables par un autre."],
            ["Risques", "L'impact réel : ce qu'un attaquant gagne et ce que l'entreprise perd."],
            ["Actions recommandées", "Les correctifs à appliquer, car trouver la faille ne suffit pas."],
            ["Preuves", "Captures des requêtes et des réponses, souvent interceptées avec Burp Suite."],
            ["Outils et techniques", "Burp Suite, injections SQL, XSS, manipulation de JWT, entre autres."]
          ]
        }
      ),
      jsxRuntimeExports.jsx("p", { className: "mt-6 text-xs text-[#80848e] leading-relaxed max-w-3xl", children: "Projet strictement pédagogique, réalisé sur l'OWASP Juice Shop, une application volontairement vulnérable et isolée. Ces techniques ne doivent jamais être utilisées sur un système réel sans autorisation explicite." })
    ] })
  ] });
}
function YowlBody() {
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    jsxRuntimeExports.jsxs(Block, { eyebrow: "Démarche", title: "Neuf étapes, de l'idée au pitch.", children: [
      jsxRuntimeExports.jsx(YowlProcess, {}),
      jsxRuntimeExports.jsx("p", { className: "mt-5 text-sm text-[#b5bac1] max-w-3xl leading-relaxed", children: "Chaque étape a son livrable dans le dépôt : benchmark et interviews, quatre personas, parcours utilisateur, wireframes, maquettes, prototype, protocole de test, définition du MVP et pitch deck." })
    ] }),
    jsxRuntimeExports.jsx(Block, { eyebrow: "Design", title: "Des wireframes aux maquettes.", children: jsxRuntimeExports.jsx(YowlGallery, {}) }),
    jsxRuntimeExports.jsx(Block, { eyebrow: "Priorisation", title: "Ce qui entre dans le MVP.", children: jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-[1.1fr_1fr] items-start", children: [
      jsxRuntimeExports.jsx("figure", { className: `${CARD} overflow-hidden`, children: jsxRuntimeExports.jsx(
        "img",
        {
          src: "/projets/yowl/moscow.webp",
          alt: "Matrice MoSCoW de Yowl : fonctionnalités Must have, Should have, Could have et Won't have",
          loading: "lazy",
          className: "block w-full h-auto"
        }
      ) }),
      jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-[15px] text-[#b5bac1] leading-relaxed", children: [
        jsxRuntimeExports.jsx("p", { children: "Le MVP doit permettre de cataloguer des œuvres, de les marquer « à voir » ou « vu », de les noter, d'écrire un court avis et de consulter les profils publics des autres." }),
        jsxRuntimeExports.jsx("p", { children: "Les premiers tests utilisateurs ont montré que la navigation est jugée plus logique sur ordinateur que sur mobile, et que les boutons demandaient parfois un instant pour être repérés." })
      ] })
    ] }) }),
    jsxRuntimeExports.jsx(Block, { eyebrow: "Pitch", title: "Le pitch deck.", children: jsxRuntimeExports.jsx(YowlPitch, {}) })
  ] });
}
function EtodoBody() {
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    jsxRuntimeExports.jsx(Block, { eyebrow: "L'application", title: "Les écrans principaux.", children: jsxRuntimeExports.jsx(Captures, { base: "/projets/etodo", items: CAPTURES_ETODO }) }),
    jsxRuntimeExports.jsx(Block, { eyebrow: "Architecture", title: "De l'interface à la base.", children: jsxRuntimeExports.jsx(
      Flow,
      {
        nodes: [
          ["Front-end", "React 19 et Vite, avec Tailwind 4. Port 5173."],
          ["API Express", "Routes protégées par un jeton JWT d'une heure. Port 4000."],
          ["Prisma", "Couche d'accès aux données, avec un schéma versionné."],
          ["MySQL 8", "Utilisateurs, tâches et sessions de badgeage."]
        ]
      }
    ) }),
    jsxRuntimeExports.jsx(Block, { eyebrow: "API", title: "Les routes de l'API.", children: jsxRuntimeExports.jsx(
      Table,
      {
        head: ["Route", "Rôle"],
        rows: [
          ["POST /register · /login", "Création de compte et connexion, avec jeton JWT."],
          ["GET /user · /user/todos", "Profil de l'utilisateur connecté et ses tâches."],
          ["GET · PUT · DELETE /users/:id", "Consultation, modification et suppression d'un utilisateur."],
          ["GET · POST /todos", "Liste des tâches et création."],
          ["GET · PUT · DELETE /todos/:id", "Lecture, mise à jour du statut et suppression d'une tâche."],
          ["POST /timer/start · /timer/stop", "Début et fin d'une session de badgeage."],
          ["GET /timer · /timer/all", "Historique personnel, et historique de toute l'équipe pour le manager."]
        ]
      }
    ) }),
    jsxRuntimeExports.jsx(Block, { eyebrow: "Données", title: "Trois tables, deux rôles.", children: jsxRuntimeExports.jsx(
      Facts,
      {
        facts: [
          ["user", "Email unique, mot de passe haché, rôle manager ou employé."],
          ["todo", "Titre, description, échéance et statut : not_started, todo, in_progress ou done."],
          ["timer_sessions", "Début, fin, durée et note, liées à un utilisateur et supprimées avec lui."],
          ["Droits", "Le manager suit la présence de toute l'équipe : cette route renvoie une erreur 403 à un employé."]
        ]
      }
    ) })
  ] });
}
function ExegolBody() {
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    jsxRuntimeExports.jsx(Block, { eyebrow: "Preuves", title: "Une intrusion, étape par étape.", children: jsxRuntimeExports.jsx(Captures, { base: "/projets/exegol", items: CAPTURES_EXEGOL }) }),
    jsxRuntimeExports.jsxs(Block, { eyebrow: "Méthode", title: "Toujours la même chaîne d'attaque.", children: [
      jsxRuntimeExports.jsx(
        Steps,
        {
          items: [
            ["Reconnaissance", "Identifier les services exposés et leurs versions avec Nmap, repérer les points d'entrée."],
            ["Énumération", "Explorer l'application et le système : utilisateurs, fichiers accessibles, configurations faibles."],
            ["Accès initial", "Exploiter une faille pour obtenir un premier accès, parfois par brute force ou téléversement malveillant."],
            ["Élévation de privilèges", "Passer d'un compte limité à un compte administrateur en exploitant une erreur de configuration."],
            ["Preuve et write-up", "Récupérer le drapeau, puis rédiger la méthode complète pour qu'elle soit reproductible et corrigeable."]
          ]
        }
      ),
      jsxRuntimeExports.jsx("p", { className: "mt-6 text-xs text-[#80848e] leading-relaxed max-w-3xl", children: "Projet strictement pédagogique, mené sur des machines volontairement vulnérables et isolées, avec autorisation. Ces techniques ne doivent jamais être utilisées sur un système réel sans autorisation explicite." })
    ] })
  ] });
}
function StageBody() {
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    jsxRuntimeExports.jsx(Block, { eyebrow: "Le contexte", title: "Cinq stages dans la même entreprise.", children: jsxRuntimeExports.jsx("p", { className: "text-[15px] text-[#b5bac1] leading-relaxed max-w-3xl", children: "J'ai effectué cinq stages au sein du groupe Beyer. Cette fidélité a compté : on m'a confié des responsabilités croissantes, de la découverte jusqu'à des outils déployés en production pour tout le personnel. Voici les missions qui en ressortent." }) }),
    jsxRuntimeExports.jsx(Block, { eyebrow: "Mission 1", title: "Sécuriser les mots de passe du groupe.", children: jsxRuntimeExports.jsx(
      Steps,
      {
        items: [
          ["Le besoin", "La gestion des mots de passe de l'entreprise devait être améliorée et centralisée."],
          ["La solution", "J'ai configuré un gestionnaire de mots de passe open source pour l'ensemble du groupe, hébergé et sécurisé en local sur une machine Linux, avec une extension navigateur pour les utilisateurs."],
          ["Le renouvellement", "J'ai mis en place un système de renouvellement automatique : chaque mot de passe change tous les quelques mois, sans intervention manuelle."],
          ["La portée", "Un outil critique, utilisé par une centaine de personnes : la moindre erreur se voyait tout de suite."]
        ]
      }
    ) }),
    jsxRuntimeExports.jsx(Block, { eyebrow: "Mission 2", title: "Déployer Windows 11 sur tous les postes.", children: jsxRuntimeExports.jsx(
      Steps,
      {
        items: [
          ["L'objectif", "Passer tous les postes de l'entreprise sur Windows 11, sans les installer un par un à la main."],
          ["Le serveur", "J'ai installé un serveur Windows avec l'Active Directory, à partir de l'ISO de Windows Server, gravée sur une clé bootable avec Rufus. J'ai ensuite ajouté les outils nécessaires depuis le gestionnaire de serveur, en suivant un tutoriel de déploiement avec MDT."],
          ["Le poste de test", "Le serveur était relié par un switch à un autre PC, sur lequel j'installais Windows pour vérifier que tout fonctionnait."],
          ["La tâche de déploiement", "Dans MDT (Deployment Workbench), j'ai préparé une tâche à partir de l'ISO de Windows. Il suffit d'activer le démarrage réseau dans le BIOS du poste et d'appuyer sur F12 : Windows s'installe tout seul."],
          ["Le rangement", "Le contenu de l'ISO est copié dans un dossier du serveur portant son nom, et c'est ce dossier que la tâche utilise."]
        ]
      }
    ) }),
    jsxRuntimeExports.jsx(Block, { eyebrow: "Mission 3", title: "Un script PowerShell pour configurer un poste.", children: jsxRuntimeExports.jsx(
      Steps,
      {
        items: [
          ["Le besoin", "Configurer un poste neuf demandait toujours la même série d'actions, à refaire à la main sur chaque machine."],
          ["L'interface", "Un outil avec une vraie fenêtre, en Windows Forms : le technicien coche ce qu'il veut, puis clique sur Installer. La fenêtre porte le logo de l'entreprise."],
          ["Les logiciels", "Navigateurs, outil d'archivage, lecteur PDF, client VPN, agents de sécurité... Tout est coché par défaut : il suffit de décocher ce dont on n'a pas besoin."],
          ["Les réglages", "Ajouter le poste au domaine, lancer les mises à jour Windows, définir Google comme moteur de recherche par défaut, désinstaller un ancien antivirus ou une suite Office."],
          ["La prudence", "Le script vérifie d'abord qu'il est lancé en administrateur, et refuse de continuer dans le cas contraire."]
        ]
      }
    ) }),
    jsxRuntimeExports.jsx(Block, { eyebrow: "Sur le terrain", title: "Du réseau et des données.", children: jsxRuntimeExports.jsx("p", { className: "text-[15px] text-[#b5bac1] leading-relaxed max-w-3xl", children: "J'ai aussi fait du brassage réseau pour relier un nouveau secrétariat, dans des locaux où des travaux étaient en cours, ainsi que du transfert de données. Des tâches moins techniques en apparence, mais qui demandent de la méthode : un mauvais câble ou une donnée oubliée se remarque tout de suite." }) }),
    jsxRuntimeExports.jsx(Block, { eyebrow: "Au quotidien", title: "Le support utilisateur.", children: jsxRuntimeExports.jsx("p", { className: "text-[15px] text-[#b5bac1] leading-relaxed max-w-3xl", children: "En parallèle de ces missions, j'ai assuré beaucoup de support : accompagner les utilisateurs sur leurs postes et leurs logiciels, diagnostiquer les problèmes et les résoudre. C'est ce qui m'a appris à expliquer simplement et à rester disponible, deux réflexes indispensables en entreprise." }) }),
    jsxRuntimeExports.jsx(Block, { eyebrow: "Ce que j'en retire", title: "La sécurité vue de l'intérieur.", children: jsxRuntimeExports.jsx(
      Facts,
      {
        facts: [
          ["Responsabilité", "Travailler sur des outils que des gens utilisent chaque jour change la façon de coder : on teste avant, on documente, on prévoit les erreurs."],
          ["Sécurité", "Gérer les mots de passe de tout un groupe m'a fait comprendre les enjeux concrets de la sécurité en entreprise."],
          ["Autonomie", "On m'a confié des missions de bout en bout, du besoin jusqu'au déploiement en production."]
        ]
      }
    ) })
  ] });
}
function CybergrangeBody() {
  const p = projectPages.cybergrange;
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    jsxRuntimeExports.jsx(
      Block,
      {
        eyebrow: "En ligne",
        title: "La plateforme est jouable.",
        pill: jsxRuntimeExports.jsx(StatusPill, { kind: "live", children: "Démo en ligne" }),
        children: jsxRuntimeExports.jsxs("div", { className: `${CARD} p-6 flex flex-wrap items-center justify-between gap-4`, children: [
          jsxRuntimeExports.jsx("p", { className: "text-[15px] text-[#b5bac1] leading-relaxed max-w-xl", children: "La formation tourne dans le navigateur, sans rien installer. Le jeu 3D se joue au clavier et à la souris, et le simulateur 2D est accessible directement." }),
          jsxRuntimeExports.jsxs(
            "a",
            {
              href: p.demo,
              target: "_blank",
              rel: "noreferrer noopener",
              className: "inline-flex items-center gap-2 rounded-lg bg-[#5865f2] hover:bg-[#4752c4] px-5 py-3 text-sm font-semibold text-white transition-colors",
              children: [
                "Ouvrir la plateforme ",
                jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-4 h-4" })
              ]
            }
          )
        ] })
      }
    ),
    jsxRuntimeExports.jsx(Block, { eyebrow: "Aperçu", title: "Deux expériences, un même objectif.", children: jsxRuntimeExports.jsx(Captures, { base: "/projets/cybergrange", items: CAPTURES_CYBERGRANGE }) }),
    jsxRuntimeExports.jsx(Block, { eyebrow: "Démarche", title: "Sensibiliser par la mise en situation.", children: jsxRuntimeExports.jsx(
      Steps,
      {
        items: [
          ["Le constat", "Un employé retient mal un diaporama de sécurité. Il retient ce qu'il a vécu."],
          ["Le parti pris", "Mettre l'utilisateur en scène dans une journée d'entreprise, et le laisser se tromper sans conséquence réelle."],
          ["Les situations", "Douze scénarios tirés du quotidien : mot de passe faible, session non verrouillée, phishing, faux support technique."],
          ["Le retour", "À chaque erreur, la plateforme explique le bon réflexe, puis laisse rejouer la situation."]
        ]
      }
    ) })
  ] });
}
const BODIES = {
  eliza: ElizaBody,
  "hack-juice": HackBody,
  exegol: ExegolBody,
  cybergrange: CybergrangeBody,
  "stage-beyer": StageBody,
  yowl: YowlBody,
  etodo: EtodoBody
};
function ProjectPage() {
  const { slug } = useParams();
  const p = projectPages[slug];
  const Body = BODIES[slug];
  if (!p || !Body) return jsxRuntimeExports.jsx(NotFound, {});
  const others = projectOrder.filter((s) => s !== slug);
  return jsxRuntimeExports.jsxs(PageWrapper, { children: [
    jsxRuntimeExports.jsxs(Section, { className: "!pb-10", children: [
      jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/projects",
          className: "inline-flex items-center gap-2 text-sm text-[#b5bac1] hover:text-white transition-colors",
          children: [
            jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
            " Tous les projets"
          ]
        }
      ),
      jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap items-center gap-3 text-xs", children: [
        jsxRuntimeExports.jsx("span", { className: "font-mono text-[#80848e]", children: p.year }),
        jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded border font-semibold text-[#5865f2] bg-[#5865f2]/10 border-[#5865f2]/30", children: p.module })
      ] }),
      jsxRuntimeExports.jsx("h1", { className: "mt-4 font-display text-4xl sm:text-6xl font-bold tracking-tight text-white", children: p.title }),
      jsxRuntimeExports.jsx("p", { className: "mt-3 font-display text-xl sm:text-2xl text-[#b5bac1]", children: p.subtitle }),
      jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-[#b5bac1] leading-relaxed", children: p.intro }),
      jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: p.tags.map((t) => jsxRuntimeExports.jsx(
        "span",
        {
          className: "px-2.5 py-1 rounded-md bg-[#2b2d31] text-[#b5bac1] border border-[#313338] text-xs font-mono",
          children: t
        },
        t
      )) })
    ] }),
    jsxRuntimeExports.jsx(Body, {}),
    jsxRuntimeExports.jsx(Block, { eyebrow: "Recul", title: "Ce que j'en retiens.", children: jsxRuntimeExports.jsx("div", { className: "border-l-2 border-[#5865f2] pl-4 max-w-2xl", children: jsxRuntimeExports.jsx("p", { className: "text-[15px] text-[#b5bac1] italic leading-relaxed", children: p.reflection }) }) }),
    jsxRuntimeExports.jsxs(Section, { className: "!pt-0", children: [
      jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] font-bold text-[#80848e]", children: "Autres projets" }),
      jsxRuntimeExports.jsx("div", { className: "mt-4 grid gap-3 sm:grid-cols-3", children: others.slice(0, 3).map((s) => jsxRuntimeExports.jsxs(
        Link,
        {
          to: `/projects/${s}`,
          className: `${CARD} p-5 flex items-center justify-between hover-lift`,
          children: [
            jsxRuntimeExports.jsx("span", { className: "font-display text-lg font-semibold text-white", children: projectPages[s].title }),
            jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-4 h-4 text-[#b5bac1]" })
          ]
        },
        s
      )) })
    ] })
  ] });
}
const steps = [
  {
    period: "Collège - 3ème",
    title: "Les débuts autodidactes",
    body: "Mes premiers programmes en Bash, pas par obligation mais par curiosité."
  },
  {
    period: "Lycée - Bac Pro SystèmeNumérique",
    title: "La révélation pour le réseau et la cybersécurité",
    body: "J'ai découvert une faille sur la plateforme pédagogique de mon lycée me donnant accès à tous les comptes élèves. J'ai choisi de la signaler à la direction. Ce jour-là, j'ai su exactement ce que je voulais faire.  stages réalisés, dont 5 chez le même groupe en tant qu'administrateur système et réseau."
  },
  {
    period: "Groupe Beyer - 2021-2025",
    title: "L'expérience en entreprise",
    body: "5 stages en administration réseau sur 3 ans. Installation de réseaux téléphoniques, déploiement de scripts PowerShell d'automatisation silencieuse, gestion d'Active Directory, support et ticketing. J'ai eu de vraies responsabilités dès le début."
  },
  {
    period: "Epitech - Tek1",
    title: "Le début de mes études supérieures",
    body: "J'ai renforcé mes connaissances autour de la programmation, de la cybersécurité ainsi que du travail de groupe."
  },
  {
    period: "Epitech - Tek2",
    title: "Le commencement de la spécialisation cybersécurité",
    body: "J'ai renforcé mes connaissances autour de de la cybersécurité je suis maintenant capables de faire des test de pénétrations simple."
  },
  {
    period: "Bénévolat continu",
    title: "Tech pour tous",
    body: "Emmaüs Connect (2022, 2024) : formation numérique pour des publics éloignés du digital. Devfest Strasbourg : bénévole dans la communauté tech locale."
  },
  {
    period: "Prochaine étape",
    title: "Aller plus loin",
    body: "Apporter ma triple casquette : compétences en développement, sécurité, administration système et réseau. L'objectif : être le profil qui pense à la sécurité dès la conception afin d'éviter des problèmes futurs."
  }
];
const lessons = [
  "Ne jamais arrêter d'apprendre, surtout que dans le monde de l'informatique, ça change tous les jours.",
  "La sécurité est primordiale : un projet/système sans protection risque des fuites de données clients ou pire.",
  "La pratique sur le terrain, les stages et les projets font progresser bien plus vite que la théorie seule.",
  "Partager ses connaissances rend la tech plus accessible et crée des équipes plus fortes."
];
function Journey() {
  return jsxRuntimeExports.jsxs(PageWrapper, { children: [
    jsxRuntimeExports.jsxs(Section, { children: [
      jsxRuntimeExports.jsx(Eyebrow$1, { children: "Parcours" }),
      jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl sm:text-5xl font-bold tracking-tight text-white max-w-2xl", children: "Ce que j'ai appris, comment j'ai progressé." }),
      jsxRuntimeExports.jsx("p", { className: "mt-4 text-[#b5bac1] max-w-2xl", children: "Un aperçu de mon chemin - les étapes, les projets et les leçons qui ont changé ma façon de penser la sécurité et le développement." })
    ] }),
    jsxRuntimeExports.jsx(Section, { className: "!pt-0", children: jsxRuntimeExports.jsxs("div", { className: "relative pl-6 md:pl-10", children: [
      jsxRuntimeExports.jsx("div", { className: "absolute left-2 md:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-[#5865f2] to-[#313338]" }),
      steps.map((s, i) => jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -16 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true, amount: 0.3 },
          transition: { delay: i * 0.08, duration: 0.5 },
          className: "relative pb-10 last:pb-0",
          children: [
            jsxRuntimeExports.jsx("span", { className: "absolute -left-[11px] md:-left-[19px] top-1.5 w-4 h-4 rounded-full bg-[#5865f2] ring-4 ring-[#0e0f10]" }),
            jsxRuntimeExports.jsx("div", { className: "text-xs tracking-[0.2em] uppercase text-[#80848e] font-mono", children: s.period }),
            jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display text-2xl font-semibold text-white", children: s.title }),
            jsxRuntimeExports.jsx("p", { className: "mt-2 text-[#b5bac1] leading-relaxed max-w-2xl", children: s.body })
          ]
        },
        s.title
      ))
    ] }) }),
    jsxRuntimeExports.jsxs(Section, { className: "!pt-0", children: [
      jsxRuntimeExports.jsx(Eyebrow$1, { children: "Leçons apprises" }),
      jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mt-6", children: lessons.map((l, i) => jsxRuntimeExports.jsxs(
        motion.blockquote,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.07, duration: 0.5 },
          className: "rounded-xl border border-[#313338] bg-[#1e1f22] p-6 text-[#f2f3f5] leading-relaxed",
          children: [
            jsxRuntimeExports.jsx("span", { className: "text-[#5865f2] mr-2 font-display text-xl", children: '"' }),
            l
          ]
        },
        l
      )) })
    ] })
  ] });
}
const infos = [
  { icon: Mail, label: "Email", value: "seyf.sfaxi@epitech.eu", href: "mailto:seyf.sfaxi@epitech.eu" },
  { icon: Phone, label: "Téléphone", value: "07 69 56 45 47", href: "tel:+33769564547" },
  { icon: MapPin, label: "Localisation", value: "Strasbourg, France", href: null },
  { icon: Github, label: "GitHub", value: "github.com/Seyf5", href: "https://github.com/Seyf5" },
  { icon: Linkedin, label: "LinkedIn", value: "Seyf Sfaxi", href: "https://www.linkedin.com/in/seyf-sfaxi-34a807292/" }
];
function Contact() {
  const [form, setForm] = reactExports.useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = reactExports.useState(false);
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      ue.error("Merci de remplir tous les champs.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      ue.success("Message envoyé - je vous réponds rapidement !");
      setForm({ name: "", email: "", subject: "", message: "" });
      setLoading(false);
    }, 900);
  };
  return jsxRuntimeExports.jsx(PageWrapper, { children: jsxRuntimeExports.jsxs(Section, { children: [
    jsxRuntimeExports.jsx(Eyebrow$1, { children: "Contact" }),
    jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl sm:text-5xl font-bold tracking-tight text-white max-w-2xl", children: "Construisons quelque chose ensemble." }),
    jsxRuntimeExports.jsx("p", { className: "mt-4 text-[#b5bac1] max-w-2xl", children: "Un projet, une question, un stage? - écrivez-moi et je vous réponds." }),
    jsxRuntimeExports.jsxs("div", { className: "mt-12 grid grid-cols-1 lg:grid-cols-5 gap-6", children: [
      jsxRuntimeExports.jsxs(
        motion.aside,
        {
          initial: { opacity: 0, x: -16 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.5 },
          className: "lg:col-span-2 rounded-2xl border border-[#313338] bg-[#1e1f22] p-7 h-fit space-y-6",
          children: [
            jsxRuntimeExports.jsxs("div", { children: [
              jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-semibold text-white", children: "Me contacter" }),
              jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-[#b5bac1] leading-relaxed", children: "Vous préféré les emails ? Je réponds généralement sous 48h." })
            ] }),
            jsxRuntimeExports.jsx("div", { className: "space-y-3", children: infos.map(({ icon: Icon, label, value, href }) => jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-sm text-[#b5bac1]", children: [
              jsxRuntimeExports.jsx("span", { className: "w-9 h-9 rounded-md bg-[#2b2d31] grid place-items-center flex-shrink-0", children: jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4 text-[#5865f2]" }) }),
              href ? jsxRuntimeExports.jsx(
                "a",
                {
                  href,
                  target: href.startsWith("http") ? "_blank" : void 0,
                  rel: "noreferrer",
                  className: "hover:text-white transition-colors",
                  children: value
                }
              ) : jsxRuntimeExports.jsx("span", { children: value })
            ] }, label)) })
          ]
        }
      ),
      jsxRuntimeExports.jsxs(
        motion.form,
        {
          initial: { opacity: 0, x: 16 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.5, delay: 0.1 },
          onSubmit,
          className: "lg:col-span-3 rounded-2xl border border-[#313338] bg-[#1e1f22] p-7 space-y-5",
          children: [
            jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
              jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                jsxRuntimeExports.jsx("label", { htmlFor: "name", className: "block text-sm text-[#b5bac1]", children: "Nom" }),
                jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "name",
                    value: form.name,
                    onChange: update("name"),
                    placeholder: "Jean Dupont",
                    className: "w-full px-4 py-2.5 rounded-md bg-[#0e0f10] border border-[#313338] text-white text-sm placeholder:text-[#80848e] outline-none focus:border-[#5865f2] focus:ring-1 focus:ring-[#5865f2] transition-colors"
                  }
                )
              ] }),
              jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                jsxRuntimeExports.jsx("label", { htmlFor: "email", className: "block text-sm text-[#b5bac1]", children: "Email" }),
                jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "email",
                    type: "email",
                    value: form.email,
                    onChange: update("email"),
                    placeholder: "vous@domaine.fr",
                    className: "w-full px-4 py-2.5 rounded-md bg-[#0e0f10] border border-[#313338] text-white text-sm placeholder:text-[#80848e] outline-none focus:border-[#5865f2] focus:ring-1 focus:ring-[#5865f2] transition-colors"
                  }
                )
              ] })
            ] }),
            jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              jsxRuntimeExports.jsx("label", { htmlFor: "subject", className: "block text-sm text-[#b5bac1]", children: "Sujet" }),
              jsxRuntimeExports.jsx(
                "input",
                {
                  id: "subject",
                  value: form.subject,
                  onChange: update("subject"),
                  placeholder: "De quoi s'agit-il ?",
                  className: "w-full px-4 py-2.5 rounded-md bg-[#0e0f10] border border-[#313338] text-white text-sm placeholder:text-[#80848e] outline-none focus:border-[#5865f2] focus:ring-1 focus:ring-[#5865f2] transition-colors"
                }
              )
            ] }),
            jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              jsxRuntimeExports.jsx("label", { htmlFor: "message", className: "block text-sm text-[#b5bac1]", children: "Message" }),
              jsxRuntimeExports.jsx(
                "textarea",
                {
                  id: "message",
                  rows: 6,
                  value: form.message,
                  onChange: update("message"),
                  placeholder: "Dites-m'en un peu plus…",
                  className: "w-full px-4 py-2.5 rounded-md bg-[#0e0f10] border border-[#313338] text-white text-sm placeholder:text-[#80848e] outline-none focus:border-[#5865f2] focus:ring-1 focus:ring-[#5865f2] transition-colors resize-none"
                }
              )
            ] }),
            jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: jsxRuntimeExports.jsx(
              "button",
              {
                type: "submit",
                disabled: loading,
                className: "inline-flex items-center gap-2 px-6 py-2.5 bg-[#5865f2] hover:bg-[#4752c4] disabled:opacity-50 text-white text-sm font-semibold rounded-md transition-colors",
                children: loading ? jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }),
                  " Envoi…"
                ] }) : jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  "Envoyer ",
                  jsxRuntimeExports.jsx(Send, { className: "w-4 h-4" })
                ] })
              }
            ) })
          ]
        }
      )
    ] })
  ] }) });
}
function RoutedPages() {
  const location = useLocation();
  return jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: jsxRuntimeExports.jsxs(Routes, { location, children: [
    jsxRuntimeExports.jsx(Route, { path: "/", element: jsxRuntimeExports.jsx(Home, {}) }),
    jsxRuntimeExports.jsx(Route, { path: "/about", element: jsxRuntimeExports.jsx(About, {}) }),
    jsxRuntimeExports.jsx(Route, { path: "/projects", element: jsxRuntimeExports.jsx(Projects, {}) }),
    jsxRuntimeExports.jsx(Route, { path: "/projects/nationsglory", element: jsxRuntimeExports.jsx(ProjectNationsGlory, {}) }),
    jsxRuntimeExports.jsx(Route, { path: "/projects/:slug", element: jsxRuntimeExports.jsx(ProjectPage, {}) }),
    jsxRuntimeExports.jsx(Route, { path: "/journey", element: jsxRuntimeExports.jsx(Journey, {}) }),
    jsxRuntimeExports.jsx(Route, { path: "/contact", element: jsxRuntimeExports.jsx(Contact, {}) }),
    jsxRuntimeExports.jsx(Route, { path: "*", element: jsxRuntimeExports.jsx(NotFound, {}) })
  ] }, location.pathname) });
}
function App() {
  return jsxRuntimeExports.jsx("div", { className: "font-body", children: jsxRuntimeExports.jsxs(HashRouter, { children: [
    jsxRuntimeExports.jsx(ScrollToTop, {}),
    jsxRuntimeExports.jsx(Navbar, {}),
    jsxRuntimeExports.jsx("main", { className: "pt-20", children: jsxRuntimeExports.jsx(RoutedPages, {}) }),
    jsxRuntimeExports.jsx(Footer, {}),
    jsxRuntimeExports.jsx(
      $e,
      {
        position: "bottom-right",
        theme: "dark",
        toastOptions: {
          style: {
            background: "#1e1f22",
            border: "1px solid #313338",
            color: "#f2f3f5"
          }
        }
      }
    )
  ] }) });
}
ReactDOM.createRoot(document.getElementById("root")).render(
  jsxRuntimeExports.jsx(React.StrictMode, { children: jsxRuntimeExports.jsx(App, {}) })
);
export {
  BrowserFrame as B,
  Lightbox as L
};
