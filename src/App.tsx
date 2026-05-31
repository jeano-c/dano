import Contact from "./components/Contact";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="bg-[#f8f9fa] min-h-screen relative">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-[#B7004B] z-[60] origin-left"
        style={{ scaleX }}
      />
      <NavBar />
      <Hero />
      <TechStack />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
