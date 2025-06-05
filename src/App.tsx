import Navbar from "./components/navbar";
import ProjectSection from "./components/project-section";
import HeroSection from "./components/hero-section";
import { ScrollAnimation } from "./components/scroll-animation";
import SkillsSection from "./components/skills-section";
import ExperienceSection from "./components/experience-section";

function App() {
  return (
    <div className="h-full bg-black/90">
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <ScrollAnimation />
      <ProjectSection />
      <SkillsSection />
    </div>
  );
}

export default App;
