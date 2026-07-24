export default function Footer({ meta }) {
  return (
    <footer className="py-8 px-6 border-t border-white/5 text-center text-muted text-sm font-mono">
      © {new Date().getFullYear()} {meta.name}
    </footer>
  );
}