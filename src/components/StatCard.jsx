import { useCountUp } from "../hooks/useCountUp";

export default function StatCard({ value, suffix, label }) {
  const { value: count, ref } = useCountUp(value);

  return (
    <div ref={ref} className="glass-card rounded-xl p-4 text-center">
      <p className="text-3xl font-extrabold gradient-text">
        {count}{suffix}
      </p>
      <p className="text-xs text-muted mt-1">{label}</p>
    </div>
  );
}