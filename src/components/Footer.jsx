import { FaGithub, FaLinkedin, FaStackOverflow, FaTwitter, FaArrowUp } from "react-icons/fa";

export default function Footer({ meta, t }) {
  const socials = [
    { icon: FaGithub, href: meta.socials.github },
    { icon: FaLinkedin, href: meta.socials.linkedin },
    { icon: FaStackOverflow, href: meta.socials.stackoverflow },
    { icon: FaTwitter, href: meta.socials.twitter },
  ];

  return (
    <footer className="relative border-t border-white/5 pt-16 pb-8 px-6 overflow-hidden">
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-96 h-64 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        <div className="flex flex-col items-center text-center mb-10">
          <p className="text-2xl font-bold gradient-text mb-2">{meta.name}</p>
          <p className="text-muted text-sm max-w-md">{t.footer.tagline}</p>
        </div>

        <div className="flex justify-center gap-5 text-xl text-gray-400 mb-10">
          {socials.map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-full glass-card flex items-center justify-center hover:text-accent2 transition"
            >
              <Icon />
            </a>
          ))}
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mx-auto flex items-center gap-2 text-xs font-mono text-muted hover:text-accent2 transition mb-8"
        >
          <FaArrowUp className="text-[10px]" />
          {t.footer.backToTop}
        </button>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs font-mono text-muted">
          <span>© {new Date().getFullYear()} {meta.name}. All rights reserved.</span>
          <span>{t.footer.builtWith}</span>
        </div>
      </div>
    </footer>
  );
}