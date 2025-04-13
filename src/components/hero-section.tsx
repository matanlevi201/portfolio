import AnimatedText from "./animated-text";
import FloatingTechCubes from "./floating-tech-cubes";
import { Button } from "./ui/button";

function HeroSection() {
  return (
    <section
      id="hero-section"
      className="mx-auto h-screen relative flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/15 sm:bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-800/15 sm:bg-purple-800/20 rounded-full blur-3xl" />
      </div>
      <FloatingTechCubes />
      <div className="container relative z-10 sm:mx-10 flex flex-col items-center justify-center gap-4">
        <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
          <AnimatedText text="Full-Stack Developer" />
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Junior Role, Senior Soul
          </span>
        </div>
        <p className="text-sm sm:text-md md:text-lg lg:text-xl text-zinc-400 text-center max-w-[400px] md:max-w-[400px] lg:max-w-[550px] mx-2 xs:mx-10">
          Specializing in modern JavaScript ecosystems with expertise in React,
          Vue, Express.js, and PostgreSQL to build powerful, scalable
          applications.
        </p>
        <div className="flex gap-4 mt-2">
          <Button className=" bg-purple-600 hover:bg-purple-700">
            View Projects
          </Button>
          <Button
            variant="outline"
            className="border-zinc-700 hover:bg-zinc-800"
          >
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
