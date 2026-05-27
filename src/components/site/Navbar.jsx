import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "À propos" },
  { to: "/projects", label: "Projets" },
  { to: "/journey", label: "Parcours" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-[#313338]"
    >
      <nav className="max-w-6xl mx-auto h-16 flex items-center justify-between px-5 md:px-8">
        <Link to="/" className="group flex items-center gap-2">
          <motion.span
            whileHover={{ rotate: 12 }}
            className="w-8 h-8 rounded-md bg-[#5865f2] grid place-items-center font-display font-bold text-white text-sm"
          >
            S
          </motion.span>
          <span className="font-display font-semibold tracking-tight text-[#f2f3f5]">
            sfaxi<span className="text-[#5865f2]">.</span>seyf
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm rounded-md transition-colors ${
                    isActive ? "text-white" : "text-[#b5bac1] hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 -z-10 rounded-md bg-[#2b2d31]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#5865f2] hover:bg-[#4752c4] text-white text-sm font-semibold rounded-md transition-colors"
          >
            <Download className="w-4 h-4" /> CV
          </a>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden text-white p-2 rounded-md hover:bg-[#2b2d31]"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-[#313338] bg-[#0e0f10]"
          >
            <ul className="flex flex-col p-4 gap-1">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.to === "/"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-md text-sm ${
                        isActive
                          ? "bg-[#2b2d31] text-white"
                          : "text-[#b5bac1] hover:bg-[#1e1f22] hover:text-white"
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href="/cv.pdf"
                  download
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-[#5865f2] hover:bg-[#4752c4] text-white text-sm transition-colors"
                >
                  <Download className="w-4 h-4" /> Télécharger CV
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
