import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaLinux,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiAngular,
  SiDocker,
  SiDotnet,
  SiPostgresql,
  SiPython,
} from "react-icons/si";

import chatgptLogo from "../assets/openai.svg";
import claudeLogo from "../assets/claude-color.svg";
import geminiLogo from "../assets/gemini-color.svg";

const CENTER = 250;

const skills = [
  {
    x: 250,
    y: 20,
    logo: chatgptLogo,
    title: "OpenAI",
  },

  {
    x: 400,
    y: 90,
    logo: claudeLogo,
    title: "Claude",
  },

  {
    x: 450,
    y: 180,
    logo: geminiLogo,
    title: "Gemini",
  },

  {
    x: 350,
    y: 330,
    Icon: SiPython,
    color: "text-yellow-300",
    title: "Python",
  },

  {
    x: 250,
    y: 420,
    Icon: SiDotnet,
    color: "text-violet-400",
    title: ".NET",
  },

  {
    x: 120,
    y: 350,
    Icon: FaNodeJs,
    color: "text-green-400",
    title: "Node.js",
  },

  {
    x: 50,
    y: 240,
    Icon: SiPostgresql,
    color: "text-blue-400",
    title: "PostgreSQL",
  },

  {
    x: 80,
    y: 120,
    Icon: FaReact,
    color: "text-cyan-400",
    title: "React",
  },

  {
    x: 160,
    y: 60,
    Icon: SiAngular,
    color: "text-red-400",
    title: "Angular",
  },

  {
    x: 180,
    y: 460,
    Icon: FaGitAlt,
    color: "text-orange-500",
    title: "Git",
  },

  {
    x: 320,
    y: 100,
    Icon: SiDocker,
    color: "text-cyan-400",
    title: "Docker",
  },

  {
    x: 210,
    y: 100,
    Icon: FaAws,
    color: "text-yellow-500",
    title: "AWS",
  },
];

function LogoNode({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-5 h-5 object-contain"
    />
  );
}

function SkillNode({ skill, index }) {
  const {
    x,
    y,
    Icon,
    logo,
    color = "text-white",
    title,
  } = skill;

  return (
    <motion.div
      className="group absolute"
      style={{
        left: x,
        top: y,
      }}
      animate={{
        y: [0, -6, 0],
      }}
      transition={{
        duration: 2 + (index % 4),
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div
        className={`
          glass-card
          w-12
          h-12
          rounded-xl
          flex
          items-center
          justify-center
          ${color}
        `}
      >
        {Icon && <Icon size={20} />}

        {logo && (
          <img
            src={logo}
            alt={title}
            className="w-5 h-5 object-contain"
          />
        )}
      </div>

      <div
        className="
          absolute
          top-14
          left-1/2
          -translate-x-1/2
          px-2
          py-1
          rounded-md
          text-xs
          bg-black/80
          text-white
          opacity-0
          group-hover:opacity-100
          transition-opacity
          whitespace-nowrap
          pointer-events-none
        "
      >
        {title}
      </div>
    </motion.div>
  );
}


function Connections() {
  return (
    <svg
      className="absolute inset-0"
      width="500"
      height="500"
    >
      {skills.map((skill, index) => (
        <motion.line
          key={index}
          x1={CENTER}
          y1={CENTER}
          x2={skill.x + 24}
          y2={skill.y + 24}
          stroke="rgba(255,255,255,.10)"
          strokeWidth="1.5"
          animate={{
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 2 + (index % 3),
            repeat: Infinity,
          }}
        />
      ))}
    </svg>
  );
}

function BackgroundParticles() {
  return (
    <>
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-cyan-400"
          style={{
            width: 2,
            height: 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
          }}
        />
      ))}
    </>
  );
}

export default function TechOrbit() {
  return (
    <motion.div
      className="
        relative
        hidden
        lg:flex
        items-center
        justify-center
        w-[500px]
        h-[500px]
      "
      animate={{
        rotate: [-2, 2, -2],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Glow */}

      <div className="absolute w-[450px] h-[450px] rounded-full bg-violet-500/10 blur-3xl" />

      <div className="absolute w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-3xl" />

      <BackgroundParticles />

      <Connections />

      {/* Skills */}

      {skills.map((skill, index) => (
        <SkillNode
          key={index}
          skill={skill}
          index={index}
        />
      ))}

      {/* Núcleo */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
          absolute
          z-50
          w-32
          h-32
          rounded-full
          glass-card
          glow
          flex
          items-center
          justify-center
        "
      >
        <div className="text-center">

          <p className="font-bold gradient-text">
            FULL STACK 
          </p>
          <p className="font-bold gradient-text">
            &
          </p>
          <p className="font-bold gradient-text">
            GEN AI
          </p>
         
        </div>
      </motion.div>
    </motion.div>
  );
}