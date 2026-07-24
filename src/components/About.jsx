import { motion } from "framer-motion";
import StatCard from "./StatCard";

export default function About({ t, meta }) {
  return (
    <section id="about" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[280px_1fr] gap-12 items-start">
        {/* Columna foto */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto md:mx-0"
        >
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-accent/40 to-accent2/40 blur-xl opacity-60" />
          <div className="relative w-64 h-64 md:w-full md:h-80 rounded-3xl overflow-hidden glass p-1.5">
            <img
              src="/profile.jpg"
              alt={meta.name}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <motion.div
            className="absolute -bottom-4 -right-4 glass-card rounded-full px-4 py-2 font-mono text-xs text-accent2"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            &lt;/&gt; dev
          </motion.div>
          <motion.div
            className="absolute -top-4 -left-4 glass-card rounded-full px-4 py-2 font-mono text-xs text-accent"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            AI ✦
          </motion.div>
        </motion.div>

        {/* Columna texto + stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h3 className="text-3xl font-bold mb-6">{t.nav.about}</h3>
          <p className="text-gray-300 leading-relaxed text-lg mb-8">{t.about}</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {t.stats.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>

          <div className="flex flex-wrap gap-4 text-sm font-mono text-muted">
            <span>{meta.email}</span>
            <span>·</span>
            <span>{meta.phone}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}