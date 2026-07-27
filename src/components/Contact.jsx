import { motion } from "framer-motion";
import { FaEnvelope, FaWhatsapp, FaDownload, FaCircle, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact({ t, meta }) {
  const whatsappLink = `https://wa.me/${meta.whatsapp}`;

  return (
    <section id="contact" className="py-24 px-6 border-t border-white/5">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="glass-card rounded-3xl p-10 text-center relative overflow-hidden">
          {/* Glow */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl" />

          <h3 className="text-5xl font-bold mb-4">{t.contact.title}</h3>
          <p className="text-muted text-lg max-w-2xl mx-auto mb-8">{t.contact.body}</p>

          {/* STATUS */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-10">
            <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <FaCircle size={10} className="text-green-400" />
            </motion.div>
            <span className="text-sm font-mono">AVAILABLE FOR NEW OPPORTUNITIES</span>
          </div>

          {/* CONTACT METHOD CARDS */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto">
            <a
              href={`mailto:${meta.email}`}
              className="glass rounded-xl p-4 flex flex-col items-center gap-2 hover:border-accent2/50 transition"
            >
              <FaEnvelope className="text-accent2 text-xl" />
              <span className="text-xs text-muted break-all">{meta.email}</span>
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="glass rounded-xl p-4 flex flex-col items-center gap-2 hover:border-accent2/50 transition"
            >
              <FaWhatsapp className="text-accent2 text-xl" />
              <span className="text-xs text-muted">{meta.phone}</span>
            </a>

            <div className="glass rounded-xl p-4 flex flex-col items-center gap-2">
              <FaMapMarkerAlt className="text-accent2 text-xl" />
              <span className="text-xs text-muted">Mexico · Remote Friendly</span>
            </div>
          </div>

          <p className="text-gray-300 mb-8 font-mono text-sm">FULL STACK • GEN AI • CLOUD • DEVOPS</p>

          {/* BUTTONS */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
            href={`mailto:${meta.email}`}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-accent to-accent2 font-semibold glow hover:scale-105 transition flex items-center gap-2"
            >
              {t.contact.cta}
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-400 font-semibold glow-green hover:scale-105 transition flex items-center gap-2"
            >
              <FaWhatsapp />
              {t.contact.whatsappCta}
            </a>

            <a
              href="/resume/AxelHernandezResume.pdf"
              download
              className="px-8 py-3 rounded-full bg-gradient-to-r from-accent to-accent2 font-semibold glow hover:scale-105 transition flex items-center gap-2"
            >
              <FaDownload />
              {t.downloadCV}
            </a>

          </div>
        </div>
      </motion.div>
    </section>
  );
}