import { motion } from "framer-motion";


export default function Skills({ t }) {
  return (
    <section id="skills" className="py-24 px-6 border-t border-white/5">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-bold mb-12">{t.sectionsTitle.skills}</h3>
        <div className="grid md:grid-cols-2 gap-10">
          {Object.entries(t.skills).map(([group, items]) => (
            <div key={group}>
              <h5 className="font-mono text-accent2 mb-3 text-sm">{group}</h5>
              <div>{items.map((s) => <span key={s} className="badge">{s}</span>)}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}