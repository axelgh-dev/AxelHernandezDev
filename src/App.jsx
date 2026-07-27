import { useState } from "react";
import BackgroundFX from "./components/BackgroundFX";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CustomCursor from "./components/CustomCursor";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import { content, meta } from "./data/profile";


export default function App() {
  const [lang, setLang] = useState("es");
  const t = content[lang];

  return (
    <div className="min-h-screen relative">
      <CustomCursor />
      <BackgroundFX />
      <Navbar t={t} lang={lang} setLang={setLang} />
      <Hero t={t} meta={meta} />
      <About t={t} meta={meta} />
      <Experience t={t} />
      <Skills t={t} />
      <Certifications t={t} />
      <Projects t={t} />
      <Contact t={t} meta={meta} />
      <Footer t={t} meta={meta}  />
    </div>
  );
}