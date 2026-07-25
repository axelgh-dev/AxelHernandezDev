import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project, index }) {
    return (
        <motion.div
            className="glass-card rounded-2xl overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            {/* imagen del proyecto */}
            <div className="h-44 overflow-hidden relative group">
                <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
            </div>

            <div className="p-6 flex flex-col flex-1">
                <h4 className="font-semibold text-lg mb-1">{project.name}</h4>
                <p className="font-mono text-xs text-accent2 mb-3">{project.tagline}</p>
                <p className="text-sm text-muted leading-relaxed mb-4 flex-1">{project.desc}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech) => (
                        <span key={tech} className="badge">{tech}</span>
                    ))}
                </div>

                <div className="flex gap-4 text-lg text-gray-400 mt-auto">
                    <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-accent2 transition flex items-center gap-2 text-sm">
                        <FaGithub /> GitHub
                    </a>
                    <a href={project.demo} target="_blank" rel="noreferrer" className="hover:text-accent2 transition flex items-center gap-2 text-sm">
                        <FaExternalLinkAlt className="text-sm" /> Demo
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

export default function Projects({ t }) {
    return (
        <section id="projects" className="py-24 px-6 border-t border-white/5 bg-surface/40">
            <motion.div
                className="max-w-5xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <h3 className="text-3xl font-bold mb-2">{t.projectsTitle}</h3>
                <p className="text-muted mb-10">{t.projectsSubtitle}</p>

                <div className="grid md:grid-cols-3 gap-6">
                    {t.projects.map((project, i) => (
                        <ProjectCard key={project.name} project={project} index={i} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}