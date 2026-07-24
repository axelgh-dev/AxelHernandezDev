import { motion } from "framer-motion";
import StatCard from "./StatCard";
import { whatIDoIcons } from "../utils/whatIDoIcons";

export default function About({ t, meta }) {
  return (
    <section id="about" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[280px_1fr] gap-12 items-start mb-24">
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
            <img src="/profile.jpg" alt={meta.name} className="w-full h-full object-cover rounded-2xl" />
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

      {/* What I Do */}
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-bold mb-10">{t.whatIDoTitle}</h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.whatIDo.map((item, i) => {
            const Icon = whatIDoIcons[item.icon];
            return (
              <motion.div
                key={item.title}
                className="glass-card rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="w-11 h-11 rounded-xl glass flex items-center justify-center text-accent2 text-xl mb-4">
                  <Icon />
                </div>
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}

          {/* CTA card */}
          <motion.a
            href="#contact"
            className="rounded-2xl p-6 bg-gradient-to-br from-accent/25 to-accent2/25 border border-white/10 flex flex-col justify-between hover:from-accent/35 hover:to-accent2/35 transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: t.whatIDo.length * 0.08 }}
          >
            <div>
              <p className="text-xs font-mono text-accent2 mb-3">{t.whatIDoCta.label}</p>
              <p className="text-lg font-semibold leading-snug">{t.whatIDoCta.title}</p>
            </div>
            <span className="inline-flex items-center gap-2 mt-6 text-sm font-semibold">
              {t.whatIDoCta.button} <span aria-hidden>→</span>
            </span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}