import { FaReact, FaNodeJs, FaAws, FaLinux, FaGitAlt, FaMicrosoft, FaRobot } from "react-icons/fa";
import { SiDotnet, SiPostgresql, SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";

// tamaño del lienzo local de cada anillo
const SIZE = 420;
const CX = SIZE / 2;
const CY = SIZE / 2;
const RX = 180;
const RY = 70;

// path de una elipse centrada en (CX, CY) con radio RX, RY
const ellipsePath = `M ${CX - RX} ${CY} A ${RX} ${RY} 0 1 1 ${CX + RX} ${CY} A ${RX} ${RY} 0 1 1 ${CX - RX} ${CY}`;

const rings = [
  { angle: 0, duration: 16, icons: [FaReact, SiDotnet, FaGitAlt] },
  { angle: 60, duration: 22, icons: [FaNodeJs, SiPostgresql, FaAws] },
  { angle: -60, duration: 28, icons: [SiMongodb, FaLinux, FaMicrosoft] },
];

function Ring({ angle, duration, icons }) {
  const count = icons.length;

  return (
    <div
      className="absolute inset-0"
      style={{ transform: `rotate(${angle}deg)` }}
    >
      {/* línea visual de la órbita */}
      <svg
        className="absolute inset-0"
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        width={SIZE}
        height={SIZE}
      >
        <ellipse
          cx={CX}
          cy={CY}
          rx={RX}
          ry={RY}
          fill="none"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1"
        />
      </svg>

      {/* electrones siguiendo la curva */}
      {icons.map((Icon, i) => (
        <div
          key={i}
          className="orbit-electron absolute"
          style={{
            offsetPath: `path("${ellipsePath}")`,
            animationDuration: `${duration}s`,
            animationDelay: `-${(duration / count) * i}s`,
          }}
        >
          {/* contrarresta el rotate del anillo para quedar siempre horizontal */}
          <div
            className="w-10 h-10 -mt-5 -ml-5 rounded-xl glass-card flex items-center justify-center text-base text-accent2"
            style={{ transform: `rotate(${-angle}deg)` }}
          >
            <Icon />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function SkillsAtom() {
  return (
    <div className="relative w-[420px] h-[420px] scale-75 sm:scale-90 lg:scale-100">
      {/* núcleo central */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.div
          className="w-20 h-20 rounded-full glass glow flex items-center justify-center"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="font-mono text-[10px] text-accent2 text-center leading-tight">AI<br />DEV</span>
        </motion.div>
      </div>

      {rings.map((ring, i) => (
        <Ring key={i} {...ring} />
      ))}
    </div>
  );
}