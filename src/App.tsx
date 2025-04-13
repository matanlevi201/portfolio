import Navbar from "./components/navbar";
import ProjectSection from "./components/project-section";
// import TopProject from "./components/top-project";
import HeroSection from "./components/hero-section";
// import ShowcaseProject from "./components/showcase-project";
import { ScrollAnimation } from "./components/scroll-animation";

function App() {
  return (
    <div className="h-full bg-black/90">
      <Navbar />
      <HeroSection />
      {/* <HeroSection /> */}
      {/* <MainProject /> */}
      {/* <ShowcaseProject /> */}
      <ScrollAnimation />
      {/* <TopProject /> */}
      <ProjectSection />
    </div>
  );
}

export default App;
