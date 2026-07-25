import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaDownload,
  FaCircle,
} from "react-icons/fa";

export default function Contact({ t, meta }) {
  return (
    <section
      id="contact"
      className="
        py-24
        px-6
        border-t
        border-white/5
      "
    >
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div
          className="
            glass-card
            rounded-3xl
            p-10
            text-center
            relative
            overflow-hidden
          "
        >
          {/* Glow */}

          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl" />

          <h3 className="text-5xl font-bold mb-4">
            {t.contact.title}
          </h3>

          <p className="text-muted text-lg max-w-2xl mx-auto mb-10">
            {t.contact.body}
          </p>

          {/* STATUS */}

          <div
            className="
              inline-flex
              items-center
              gap-3
              px-5
              py-2
              rounded-full
              bg-green-500/10
              border
              border-green-500/20
              mb-8
            "
          >
            <motion.div
              animate={{
                opacity: [1, 0.3, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              <FaCircle
                size={10}
                className="text-green-400"
              />
            </motion.div>

            <span className="text-sm font-mono">
              AVAILABLE FOR NEW OPPORTUNITIES
            </span>
          </div>

          {/* INFO */}

          <div className="space-y-3 mb-10">
            <p className="text-gray-300">
              FULL STACK • AI • RPA • CLOUD
            </p>

            <div className="flex items-center justify-center gap-2">
              <FaEnvelope className="text-cyan-400" />

              <span>{meta.email}</span>
            </div>

            <p className="text-sm text-muted">
              Mexico · Remote Friendly
            </p>
          </div>

          {/* BUTTONS */}

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${meta.email}`}
              className="
                px-8
                py-3
                rounded-full
                bg-gradient-to-r
                from-accent
                to-accent2
                font-semibold
                glow
                hover:scale-105
                transition
              "
            >
              {t.contact.cta}
            </a>

            <a
              href="/Axel-Hernandez-CV.pdf"
              download
              className="
                glass-card
                px-8
                py-3
                rounded-full
                flex
                items-center
                gap-2
                hover:scale-105
                transition
              "
            >
              <FaDownload />

              Download CV
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}