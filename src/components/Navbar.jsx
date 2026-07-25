import { useState } from "react";

export default function Navbar({ t, lang, setLang }) {
  const [open, setOpen] = useState(false);
  const links = [
    ["about", "#about"],
    ["experience", "#experience"],
    ["skills", "#skills"],
    ["certs", "#certifications"],
    ["projects", "#projects"],
    ["contact", "#contact"],
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-mono text-sm text-accent2">axel.dev</span>

        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          {links.map(([key, href]) => (
            <a key={key} href={href} className="hover:text-accent2 transition">
              {t.nav[key]}
            </a>
          ))}
        </div>

        <button
          onClick={() => setLang(lang === "es" ? "en" : "es")}
          className="font-mono text-xs border border-white/20 rounded-full px-3 py-1 hover:border-accent2 hover:text-accent2 transition"
        >
          {lang === "es" ? "EN" : "ES"}
        </button>

        <button className="md:hidden text-gray-300" onClick={() => setOpen(!open)}>☰</button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4 text-gray-300">
          {links.map(([key, href]) => (
            <a key={key} href={href} onClick={() => setOpen(false)}>{t.nav[key]}</a>
          ))}
        </div>
      )}
    </nav>
  );
}