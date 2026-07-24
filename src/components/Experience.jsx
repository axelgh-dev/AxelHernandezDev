import { motion } from "framer-motion";


export default function Experience({ t }) {
  return (
    <section id="experience" className="py-24 px-6 border-t border-white/5 bg-surface/40">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-bold mb-12">{t.sectionsTitle.experience}</h3>

        <div className="space-y-12">
          {t.experience.map((job) => (
            <div key={job.company} className="border-l-2 border-accent/40 pl-6">
              <div className="flex flex-wrap justify-between items-baseline mb-2">
                <h4 className="text-xl font-semibold">{job.company}</h4>
                <span className="font-mono text-xs text-accent2">{job.date}</span>
              </div>
              <p className="text-muted mb-3">{job.role}</p>
              <ul className="space-y-2 text-gray-300 text-sm">
                {job.points.map((p, i) => <li key={i}>▸ {p}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <br />

        <h3 className="text-3xl font-bold mb-5">{t.sectionsTitle.education}</h3>
        <div className="mt-10 border-l-2 border-accent2/40 pl-6">

          <h4 className="text-xl font-semibold mb-1">{t.education.degree}</h4>
          <p className="text-muted text-sm mb-3">{t.education.school} · {t.education.date}</p>
          <div className="flex flex-wrap gap-2">
            {t.education.coursework.map((c) => <span key={c} className="badge">{c}</span>)}
          </div>
        </div>
      </motion.div>
    </section>
  );
}