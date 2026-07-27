import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaStackOverflow, FaTwitter } from "react-icons/fa";
import { useTypewriter } from "../hooks/useTypewriter";
import TechOrbit from "./TechOrbit";

export default function Hero({ t, meta }) {
  const typedRole = useTypewriter(t.roles, { typingSpeed: 70, deletingSpeed: 35, pause: 1800 });

  return (
    <section id="hero" className="min-h-screen flex items-center px-6 pt-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
        <div>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="font-mono text-accent2 mb-4">
            &lt;{meta.location}/&gt;
          </motion.p>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-extrabold mb-4">
            {meta.name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl font-semibold gradient-text mb-6 h-10"
          >
            {typedRole}
            <span className="animate-pulse">|</span>
          </motion.h2>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-muted text-lg max-w-xl mb-8">
            {t.taglinefirst}
            <br />
            {t.taglinesecond}
          </motion.p>

          <div className="flex gap-5 text-2xl text-gray-400">
            <a href={meta.socials.github} target="_blank" className="hover:text-accent2"><FaGithub /></a>
            <a href={meta.socials.linkedin} target="_blank" className="hover:text-accent2"><FaLinkedin /></a>
            <a href={meta.socials.stackoverflow} target="_blank" className="hover:text-accent2"><FaStackOverflow /></a>
            <a href={meta.socials.twitter} target="_blank" className="hover:text-accent2"><FaTwitter /></a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="hidden md:flex justify-center"
        >
          <TechOrbit />
        </motion.div>
      </div>
    </section>
  );
}