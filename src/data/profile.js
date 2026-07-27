export const meta = {
  name: "Axel Hernández",
  location: "Software Developer",
  email: "axelgutierrez_softwaredev@outlook.com",
  phone: "+52 961 377 58 83",
  socials: {
    github: "https://github.com/axelgh-dev",
    linkedin: "https://www.linkedin.com/in/axel-gh-dev/",
    stackoverflow: "https://stackoverflow.com/users/13090843/axel-ghh",
    twitter: "https://twitter.com/axel_guther",
  },
};

export const content = {
  es: {
    role: "Ingeniero de Software — Full Stack & Automatización con IA",
    roles: [
      "Ingeniero de Software",
      "Full Stack Developer",
      "Automatización con IA",
      "Constructor de Soluciones",
    ],
    taglinefirst: `
    Ingeniero de Software con más de 2 años de experiencia
    desarrollando aplicaciones Full Stack, infraestructura cloud,
    integraciones empresariales y soluciones de automatización inteligente.
    `,

    taglinesecond: `
    Integrando ingeniería de software, tecnologías cloud
    e IA Generativa para transformar ideas en aplicaciones
    inteligentes y de alto rendimiento.
    `,

    nav: { about: "Sobre mí", experience: "Experiencia", skills: "Habilidades", projects: "Proyectos", certs: "Certificaciones", contact: "Contacto" },
    about: "Ingeniero de Software con más de 2 años de experiencia construyendo aplicaciones Full Stack, automatizando procesos de negocio y desplegando soluciones en producción. Mi experiencia cubre frontend, backend, administración de servidores Linux, infraestructura cloud e integración de sistemas empresariales. En el último año he incorporado IA generativa (LLMs) a mis flujos de automatización y desarrollo, acelerando entregas sin sacrificar calidad. Busco retos donde pueda seguir aprendiendo, colaborar con equipos talentosos y construir tecnología con impacto real.",
    stats: [
      { value: 2, suffix: "+", label: "Años de experiencia" },
      { value: 15, suffix: "+", label: "Tecnologías dominadas" },
      { value: 2, suffix: "", label: "Empresas" },
      { value: 3, suffix: "", label: "Certificaciones" },
    ],
    whatIDoTitle: "¿Qué hago?",
    whatIDo: [
      { icon: "fullstack", title: "Full Stack Development", desc: "Aplicaciones completas con React, Node.js, .NET y Flask, del frontend a la base de datos." },
      { icon: "automation", title: "Automatización de Procesos", desc: "Soluciones RPA con Puppeteer que eliminan tareas repetitivas y aceleran operaciones." },
      { icon: "ai", title: "Flujos con IA Generativa", desc: "Integro LLMs en el desarrollo y la automatización para entregar más rápido, sin bajar la calidad." },
      { icon: "cloud", title: "Cloud & DevOps", desc: "Despliegue y administración de servidores Linux, NGINX, PM2 e infraestructura en DigitalOcean." },
      { icon: "integration", title: "Integración de Sistemas", desc: "Conecto plataformas empresariales y APIs para que los sistemas trabajen juntos, no en silos." },
    ],
    whatIDoCta: {
      label: "¿TIENES UN PROYECTO?",
      title: "Me interesa saber qué estás construyendo.",
      button: "Hablemos",
    },
    projectsTitle: "Proyectos Personales",
    projectsSubtitle: "Cosas que construí por mi cuenta, sin cliente de por medio.",
    projects: [
      {
        name: "Prisma",
        tagline: "React + Tailwind + Express + Claude",
        desc: "Un Kanban personal minimalista con estética glass, para crear, organizar y dar seguimiento a tus proyectos de forma individual.",
        tech: ["React", "Vite", "TypeScript", "Tailwind CSS"],
        image: "/projects/prisma.png",
        github: "https://github.com/axelgh-dev/Prisma", // TODO: reemplazar con tu link real
        demo: "https://github.com/axelgh-dev/Prisma",   // TODO: reemplazar con tu link real
      },
      {
        name: "Diariccalia",
        tagline: "React + Vite + Gemini",
        desc: "Landing page para una clínica de salud: muestra servicios, misión/visión, ubicación, y un formulario de reservación de citas.",
        tech: ["React", "Vite"],
        image: "/projects/diariccalia.png",
        github: "https://github.com/axelgh-dev/DIARICCALIA", // TODO: reemplazar con tu link real
        demo: "https://github.com/axelgh-dev/DIARICCALIA",   // TODO: reemplazar con tu link real
      },
      {
        name: "BrainMind Studio",
        tagline: "React + Vite",
        desc: "Aplicación para crear mapas mentales de forma visual y exportarlos como imagen, lista para compartir o guardar.",
        tech: ["React", "Vite"],
        image: "/projects/brainmind.png",
        github: "https://github.com/axelgh-dev/BrainMind", // TODO: reemplazar con tu link real
        demo: "https://github.com/axelgh-dev/BrainMind",   // TODO: reemplazar con tu link real
      },
    ],
    experience: [
      {
        company: "SOC Asesores",
        role: "Junior Full Stack Developer",
        date: "Enero 2025 — Junio 2026",
        badges: [
          "React",
          ".NET",
          "Node.js",
          "Flask",
          "AI",
          "RPA",
          "Linux",
        ],
        points: [
          "Desarrollo y mantenimiento de aplicaciones internas de negocio con React, .NET, Node.js, Flask y bases de datos SQL.",
          "Integración de IA Generativa para soluciones de automatización y optimización de flujos de trabajo.",
          "Soluciones RPA con Node.js y Puppeteer para automatizar procesos repetitivos y mejorar eficiencia operativa.",
          "Integraciones .NET para DocProStar (DPS / OctoIDP), plataforma de Intelligent Document Processing.",
          "Administración de servidores Linux en producción, configuración de NGINX, PM2 y recursos en DigitalOcean.",
          "Colaboración con equipos multidisciplinarios para análisis de requerimientos y resolución de incidencias en producción.",
        ],
      },
      {
        company: "Vulcanics",
        role: "Junior Full Stack Developer",
        date: "Marzo 2024 — Enero 2025",
        points: [
          "Desarrollo de soluciones Full Stack con React + Vite, Express (Node.js), Flask y bases de datos SQL para clientes de distintas industrias.",
          "Participación en el ciclo completo de desarrollo: requerimientos, diseño técnico, despliegue y soporte en producción.",
          "Integración de IA Generativa para soluciones de automatización y optimización de flujos de trabajo.",
          "Despliegue y mantenimiento de aplicaciones en servidores Ubuntu, configurando NGINX, PM2 e infraestructura cloud en DigitalOcean.",
          "Trabajo directo con clientes para traducir necesidades de negocio en soluciones escalables y mantenibles.",
        ],
      },
    ],
    education: {
      degree: "Ingeniería en Desarrollo de Software",
      school: "Universidad Politécnica de Chiapas",
      date: "Enero 2019 — Diciembre 2023",
      coursework: [
        "Ingeniería y Arquitectura de Software",
        "Programación Orientada a Objetos",
        "Desarrollo Web y APIs RESTful",
        "Diseño y Administración de Bases de Datos",
        "Testing y Aseguramiento de Calidad",
        "Sistemas Distribuidos y Arquitectura Cliente-Servidor",
        "Desarrollo Ágil de Software (Scrum)",
      ],
    },
    skillsLabels: { hard: "Hard Skills", soft: "Soft Skills" },
    skills: {
      hard: {
        "Desarrollo": ["React", "Vite", "Angular", "Node.js", "Express", "Flask", ".NET", "Bootstrap"],
        "Lenguajes": ["JavaScript", "C#", "Python", "SQL"],
        "IA & Automatización": ["Integración de LLMs (OpenAI, Claude)", "Prompt Engineering", "RPA con Puppeteer", "REST APIs"],
        "Bases de Datos": ["PostgreSQL", "MySQL", "MongoDB"],
        "Cloud & DevOps": ["Ubuntu Server", "NGINX", "PM2", "Git", "DigitalOcean", "AWS", "Azure"],
      },
      soft: {
          "Pensamiento": ["Resolución de Problemas", "Pensamiento Analítico", "Pensamiento Crítico", "Atención al Detalle"],
          "Colaboración": ["Trabajo en Equipo", "Comunicación Efectiva", "Empatía", "Trabajo con Clientes"],
          "Crecimiento": ["Aprendizaje Continuo", "Adaptabilidad", "Proactividad", "Autogestión"],
          "Metodología": ["Agile / Scrum", "Gestión del Tiempo", "Priorización"],
      },
    },
    funStats: {
      title: "Estadísticas serias",
      items: [
        { value: 128400, suffix: "+", emoji: "🔥", label: "Tokens de Claude quemados" },
        { value: 5230, suffix: "+", emoji: "🤖", label: "Llamadas a la API de OpenAI" },
        { value: 897, suffix: "", emoji: "🔍", label: "Búsquedas en Gemini" },
      ],
      note: "Okay, tal vez estoy exagerando un poco 😅",
    },
    certifications: [
      { name: "Scrum Fundamentals Certified (SFC)", provider: "SCRUMstudy / VMEdu", desc: "Framework Scrum, principios ágiles, sprint planning, product backlog." },
      { name: "Python Programming Basic", provider: "Huawei", desc: "Fundamentos de Python, funciones, programación orientada a objetos." },
      { name: "Linux Unhatched", provider: "Cisco Networking Academy", desc: "Línea de comandos Linux, filesystem, permisos y shell." },
    ],
    learning: [
      { name: "JavaScript Avanzado", provider: "Google" },
      { name: "Web Performance", provider: "Google" },
      { name: "Progressive Web Apps", provider: "Google" },
      { name: "IA Generativa / LLMs", provider: "Google" },
    ],
    sectionsTitle: { experience: "Experiencia Profesional", education: "Educación", skills: "Habilidades Técnicas", certifications: "Certificaciones", learning: "Cursos" },
    contact: { title: "Hablemos", body: "Estoy abierto a nuevos proyectos y colaboraciones. ¿Tienes una idea en mente? Construyamos algo increíble.", cta: "Enviar mensaje" },
    downloadCV: "Descargar CV",
  },


  en: {
    role: "Software Engineer — Full Stack & AI-Driven Automation",
    roles: [
      "Software Engineer",
      "Full Stack Developer",
      "AI-Driven Automation",
      "Solutions Builder",
    ],
    taglinefirst: `
    Software Engineer with 2+ years of experience
    building Full Stack applications, cloud infrastructure,
    enterprise integrations and intelligent automation solutions.
    `,

    taglinesecond: `
    Integrating software engineering, cloud technologies
    and Generative AI to transform ideas into intelligent,
    high-performance applications.
    `,
    nav: { about: "About", experience: "Experience", skills: "Skills", certs: "Certifications", projects: "Projects", contact: "Contact" },
    about: "Software Engineer with 2+ years of experience building Full Stack applications, automating business processes, and deploying production-ready solutions. My experience spans frontend, backend, Linux server administration, cloud infrastructure, and enterprise system integration. Over the past year I've integrated generative AI (LLMs) into my development and automation workflows, speeding up delivery without sacrificing quality. I'm looking for challenges where I can keep learning, collaborate with talented teams, and build technology with real impact.",
    stats: [
      { value: 2, suffix: "+", label: "Years of experience" },
      { value: 15, suffix: "+", label: "Technologies mastered" },
      { value: 2, suffix: "", label: "Companies" },
      { value: 3, suffix: "", label: "Certifications" },
    ],
    whatIDoTitle: "What I Do",
    whatIDo: [
      { icon: "fullstack", title: "Full Stack Development", desc: "End-to-end applications with React, Node.js, .NET and Flask, from frontend to database." },
      { icon: "automation", title: "Process Automation", desc: "RPA solutions with Puppeteer that eliminate repetitive tasks and speed up operations." },
      { icon: "ai", title: "AI-Powered Workflows", desc: "I integrate LLMs into development and automation to ship faster without cutting quality." },
      { icon: "cloud", title: "Cloud & DevOps", desc: "Deployment and management of Linux servers, NGINX, PM2 and DigitalOcean infrastructure." },
      { icon: "integration", title: "System Integration", desc: "Connecting enterprise platforms and APIs so systems work together, not in silos." },
    ],
    whatIDoCta: {
      label: "HAVE A PROJECT?",
      title: "I'd love to hear what you're building.",
      button: "Let's talk",
    },
    projectsTitle: "Personal Projects",
    projectsSubtitle: "Things I built on my own, no client involved.",
    projects: [
      {
        name: "Prisma",
        tagline: "React + Tailwind + Express + Claude",
        desc: "A clean, glass-inspired personal Kanban app to create, organize and track your projects individually.",
        tech: ["React", "Vite", "TypeScript", "Tailwind CSS"],
        image: "/projects/prisma.png",
        github: "https://github.com/axelgh-dev/Prisma", // TODO: replace with your real link
        demo: "https://github.com/axelgh-dev/Prisma",   // TODO: replace with your real link
      },
      {
        name: "Diariccalia",
        tagline: "React + Vite + Gemini",
        desc: "Landing page for a medical clinic brand: showcases services, mission/vision, location details, and an appointment reservation form.",
        tech: ["React", "Vite"],
        image: "/projects/diariccalia.png",
        github: "https://github.com/axelgh-dev/DIARICCALIA", // TODO: replace with your real link
        demo: "https://github.com/axelgh-dev/DIARICCALIA",   // TODO: replace with your real link
      },
      {
        name: "BrainMind Studio",
        tagline: "React + Vite",
        desc: "An app to visually build mind maps and export them as an image, ready to share or save.",
        tech: ["React", "Vite"],
        image: "/projects/brainmind.png",
        github: "https://github.com/axelgh-dev/BrainMind", // TODO: replace with your real link
        demo: "https://github.com/axelgh-dev/BrainMind",   // TODO: replace with your real link
      },
    ],
    experience: [
      {
        company: "SOC Asesores",
        role: "Junior Full Stack Developer",
        date: "January 2025 — June 2026",
        badges: [
          "React",
          ".NET",
          "Node.js",
          "Flask",
          "AI",
          "RPA",
          "Linux",
        ],
        points: [
          "Built and maintained internal business applications using React, .NET, Node.js, Flask and SQL databases.",
          "Integrated generative AI (LLMs) into development and automation workflows.",
          "Developed RPA solutions with Node.js and Puppeteer to automate repetitive business processes.",
          ".NET integrations for DocProStar (DPS / OctoIDP), an Intelligent Document Processing platform.",
          "Managed Linux production servers, configuring NGINX, PM2 and DigitalOcean resources.",
          "Collaborated with multidisciplinary teams to troubleshoot production issues and ensure system availability.",
        ],
      },
      {
        company: "Vulcanics",
        role: "Junior Full Stack Developer",
        date: "March 2024 — January 2025",
        points: [
          "Designed and developed Full Stack solutions using React + Vite, Express (Node.js), Flask and SQL databases.",
          "Participated in the complete software development lifecycle, from requirements to production support.",
          "Integrated generative AI (LLMs) into development and automation workflows.",
          "Deployed and maintained applications on Ubuntu servers, configuring NGINX, PM2 and DigitalOcean.",
          "Worked directly with clients to translate business needs into scalable software solutions.",
        ],
      },
    ],
    education: {
      degree: "Bachelor's Degree in Software Development Engineering",
      school: "Chiapas Polytechnic University",
      date: "January 2019 — December 2023",
      coursework: [
        "Software Engineering & Architecture",
        "Object-Oriented Programming",
        "Web Development & RESTful APIs",
        "Database Design & Management",
        "Software Testing & QA",
        "Distributed Systems & Client-Server Architecture",
        "Agile Software Development (Scrum)",
      ],
    },
    skillsLabels: { hard: "Hard Skills", soft: "Soft Skills" },
    skills: {
      hard: {
        "Development": ["React", "Vite", "Angular", "Node.js", "Express", "Flask", ".NET", "Bootstrap"],
        "Languages": ["JavaScript", "C#", "Python", "SQL"],
        "AI & Automation": ["LLM Integration (OpenAI, Claude)", "Prompt Engineering", "RPA with Puppeteer", "REST APIs"],
        "Databases": ["PostgreSQL", "MySQL", "MongoDB"],
        "Cloud & DevOps": ["Ubuntu Server", "NGINX", "PM2", "Git", "DigitalOcean", "AWS", "Azure"],
      },
      soft: {
        "Thinking": ["Problem Solving", "Analytical Thinking", "Critical Thinking", "Attention to Detail"],
        "Collaboration": ["Team Collaboration", "Effective Communication", "Empathy", "Client-Facing Work"],
        "Growth": ["Continuous Learning", "Adaptability", "Proactivity", "Self-Management"],
        "Methodology": ["Agile / Scrum", "Time Management", "Prioritization"],
      },
    },
    funStats: {
      title: "Serious Stats",
      items: [
        { value: 128400, suffix: "+", emoji: "🔥", label: "Claude tokens burnt" },
        { value: 5230, suffix: "+", emoji: "🤖", label: "OpenAI API calls" },
        { value: 897, suffix: "", emoji: "🔍", label: "Gemini searches" },
      ],
      note: "Okay, maybe I'm exaggerating a little 😅",
    },
    certifications: [
      { name: "Scrum Fundamentals Certified (SFC)", provider: "SCRUMstudy / VMEdu", desc: "Scrum framework, agile principles, sprint planning, product backlog." },
      { name: "Python Programming Basic", provider: "Huawei", desc: "Python fundamentals, functions, object-oriented programming." },
      { name: "Linux Unhatched", provider: "Cisco Networking Academy", desc: "Linux command line, filesystem, permissions and shell basics." },
    ],
    learning: [
      { name: "JavaScript Avanzado", provider: "Google" },
      { name: "Web Performance", provider: "Google" },
      { name: "Progressive Web Apps", provider: "Google" },
      { name: "IA Generativa / LLMs", provider: "Google" },
    ],
    sectionsTitle: { experience: "Professional Experience", education: "Education", skills: "Technical Skills", certifications: "Certifications", learning: "Courses" },
    contact: { title: "Let's Talk", body: "I'm open to new projects and collaborations. Have an idea in mind? Let's build something awesome.", cta: "Send a message" },
    downloadCV: "Download CV",
  },
};