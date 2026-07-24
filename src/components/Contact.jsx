export default function Contact({ t, meta }) {
  return (
    <section id="contact" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-4xl font-bold mb-4">{t.contact.title}</h3>
        <p className="text-muted text-lg mb-8 max-w-xl mx-auto">{t.contact.body}</p>
        <a
          href={`mailto:${meta.email}`}
          className="inline-block bg-gradient-to-r from-accent to-accent2 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition glow"
        >
          {t.contact.cta}
        </a>
      </div>
    </section>
  );
}