import { motion } from "framer-motion";
import SkillsAtom from "./SkillsAtom";
import FunStats from "./FunStats";

export default function Skills({ t }) {
  return (
    <section id="skills" className="py-24 px-6 border-t border-white/5">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-bold mb-4 text-center">{t.sectionsTitle.skills}</h3>

        {/* Átomo */}
        <div className="flex justify-center -mt-4 mb-4">
          <SkillsAtom />
        </div>

        {/* Soft vs Hard */}
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-10 items-start mt-8">
          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h5 className="font-mono text-accent mb-4 text-sm text-center md:text-right">
              {t.skillsLabels.soft}
            </h5>
            <div className="space-y-5">
              {Object.entries(t.skills.soft).map(([group, items]) => (
                <div key={group}>
                  <p className="text-xs text-muted mb-2 text-center md:text-right">{group}</p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-end">
                    {items.map((s) => <span key={s} className="badge">{s}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Divisor */}
          <div className="hidden md:block w-px bg-white/10 h-full" />
          <div className="md:hidden h-px bg-white/10 w-full" />

          {/* Hard Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h5 className="font-mono text-accent2 mb-4 text-sm text-center md:text-left">
              {t.skillsLabels.hard}
            </h5>
            <div className="space-y-5">
              {Object.entries(t.skills.hard).map(([group, items]) => (
                <div key={group}>
                  <p className="text-xs text-muted mb-2">{group}</p>
                  <div>{items.map((s) => <span key={s} className="badge">{s}</span>)}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <FunStats t={t} />
      </motion.div>
    </section>
  );
}