import { useState } from "react";
import { motion } from "framer-motion";
import { useCountUp } from "../hooks/useCountUp";

function FunStatItem({ value, suffix, emoji, label }) {
  const { value: count, ref } = useCountUp(value, 1800);

  return (
    <div ref={ref} className="glass-card rounded-2xl p-6 text-center">
      <p className="text-2xl mb-2">{emoji}</p>
      <p className="text-2xl md:text-3xl font-extrabold gradient-text mb-1">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="text-xs text-muted">{label}</p>
    </div>
  );
}

export default function FunStats({ t }) {
  const [showNote, setShowNote] = useState(false);

  return (
    <div className="mt-20">
      <div className="flex items-center gap-2 mb-8 justify-center">
        <h4 className="text-lg font-semibold text-muted">{t.funStats.title}</h4>
        <button
          onClick={() => setShowNote((v) => !v)}
          onMouseEnter={() => setShowNote(true)}
          onMouseLeave={() => setShowNote(false)}
          className="relative w-5 h-5 rounded-full glass text-[10px] font-mono flex items-center justify-center text-accent2"
        >
          ?
          {showNote && (
            <motion.span
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-7 left-1/2 -translate-x-1/2 w-56 glass-card rounded-lg px-3 py-2 text-xs text-gray-300 font-sans normal-case"
            >
              {t.funStats.note}
            </motion.span>
          )}
        </button>
      </div>

      <div className="grid sm:grid-cols-3 gap-5 max-w-2xl mx-auto">
        {t.funStats.items.map((item) => (
          <FunStatItem key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
}