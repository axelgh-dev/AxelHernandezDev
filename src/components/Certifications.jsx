import { motion } from "framer-motion";
import { FaGoogle } from "react-icons/fa";

export default function Certifications({ t }) {
  return (
    <section id="certifications" className="py-24 px-6 border-t border-white/5 bg-surface/40">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-bold mb-12">{t.sectionsTitle.certifications}</h3>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {t.certifications.map((c) => (
            <div key={c.name} className="glass-card rounded-xl p-5">
              <h5 className="font-semibold mb-2">{c.name}</h5>
              <p className="text-xs text-accent2 font-mono mb-2">{c.provider}</p>
              <p className="text-sm text-muted">{c.desc}</p>
            </div>
          ))}
        </div>

        <h4 className="text-xl font-semibold mb-4">{t.sectionsTitle.learning}</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {t.learning.map((course, i) => (
            <motion.div
              key={course.name}
              className="glass-card rounded-lg p-3.5"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="flex items-center gap-2 mb-2 text-accent2">
                <FaGoogle className="text-sm" />
                <span className="text-[11px] font-mono text-muted">{course.provider}</span>
              </div>
              <p className="text-sm font-medium leading-snug">{course.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}