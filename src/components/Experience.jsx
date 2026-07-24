import { motion } from "framer-motion";

import {
  FaBriefcase,
  FaGraduationCap,
} from "react-icons/fa";

function TimelineCard({
  title,
  subtitle,
  date,
  points,
  badges = [],
  icon,
  index,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -50 : 50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      className="relative flex items-start gap-6"
    >
      {/* Nodo */}

      <div className="relative z-10 flex flex-col items-center">
        <div
          className="
            w-12
            h-12
            rounded-full
            glass-card
            glow
            flex
            items-center
            justify-center
            text-cyan-400
          "
        >
          {icon}
        </div>

        <div className="w-[2px] h-full bg-gradient-to-b from-cyan-500/50 to-violet-500/20" />
      </div>

      {/* Card */}

      <motion.div
        whileHover={{
          y: -5,
          scale: 1.01,
        }}
        className="
          flex-1
          glass-card
          rounded-2xl
          p-6
        "
      >
        <div className="flex flex-wrap justify-between gap-2">
          <div>
            <h4 className="text-xl font-semibold">
              {title}
            </h4>

            <p className="text-muted">
              {subtitle}
            </p>
          </div>

          <span className="font-mono text-xs text-accent2">
            {date}
          </span>
        </div>

        <ul className="mt-5 space-y-2 text-sm text-gray-300">
          {points.map((point, i) => (
            <li key={i}>
              ▸ {point}
            </li>
          ))}
        </ul>

        {!!badges.length && (
          <div className="flex flex-wrap gap-2 mt-5">
            {badges.map((badge) => (
              <span
                key={badge}
                className="badge"
              >
                {badge}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function Experience({ t }) {
  return (
    <section
      id="experience"
      className="
        py-24
        px-6
        border-t
        border-white/5
        bg-surface/40
      "
    >
      <div className="max-w-5xl mx-auto">
        {/* EXPERIENCE */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold mb-12">
            {t.sectionsTitle.experience}
          </h3>

          <div className="space-y-10">
            {t.experience.map((job, index) => (
              <TimelineCard
                key={job.company}
                title={job.company}
                subtitle={job.role}
                date={job.date}
                points={job.points}
                badges={job.badges}
                icon={<FaBriefcase />}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Divider */}

        <div className="my-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* EDUCATION */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold mb-12">
            {t.sectionsTitle.education}
          </h3>

          <TimelineCard
            title={t.education.degree}
            subtitle={t.education.school}
            date={t.education.date}
            points={t.education.coursework}
            icon={<FaGraduationCap />}
            badges={[
              "Software Architecture",
              "REST APIs",
              "Scrum",
              "Testing",
              "Distributed Systems",
            ]}
            index={0}
          />
        </motion.div>
      </div>
    </section>
  );
}