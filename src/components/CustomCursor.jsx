import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e) => e.target.closest("a, button") && setHovering(true);
    const out = (e) => e.target.closest("a, button") && setHovering(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseout", out);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mouseout", out);
    };
  }, []);

  return (
    <motion.div
      className="hidden md:block fixed top-0 left-0 pointer-events-none z-[999] rounded-full mix-blend-difference bg-white"
      animate={{
        x: pos.x - (hovering ? 20 : 6),
        y: pos.y - (hovering ? 20 : 6),
        width: hovering ? 40 : 12,
        height: hovering ? 40 : 12,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 40, mass: 0.5 }}
    />
  );
}