import WelcomeScreen from "../components/intro/WelcomeScreen";
import ParticleBackground from "../components/canvas/ParticleBackground";
import CustomCursor from "../components/canvas/CustomCursor";
import Navbar from "../components/navigation/Navbar";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050507] text-zinc-200 antialiased selection:bg-[#FFE600] selection:text-black">
      <CustomCursor />
      <WelcomeScreen />
      <ParticleBackground />
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 space-y-12 pb-16">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}