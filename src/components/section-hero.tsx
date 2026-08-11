import { cn } from "@/lib/utils";
import BeamsBackground from "./ui/beams-background";
import { useTheme } from "./theme-provider";
import ThemeToggle from "./theme-toggle";
import { Button } from "./ui/button";
import SocialLinks from "./social-links";
import TechCube from "./tech-cube";
const skills = [
  { name: "JavaScript", icon: "devicon-javascript-plain" },
  { name: "TypeScript", icon: "devicon-typescript-plain" },
  { name: "React", icon: "devicon-react-original" },
  { name: "Vue", icon: "devicon-vuejs-plain" },
  { name: "Node.js", icon: "devicon-nodejs-plain" },
  { name: "Express", icon: "devicon-express-original" },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
  { name: "MongoDB", icon: "devicon-mongodb-plain" },
  { name: "GraphQL", icon: "devicon-graphql-plain" },
  { name: "Docker", icon: "devicon-docker-plain" },
  { name: "AWS", icon: "devicon-amazonwebservices-original" },
  { name: "Git", icon: "devicon-git-plain" },
  { name: "Tailwind", icon: "devicon-tailwindcss-plain" },
  { name: "Three.js", icon: "devicon-threejs-original" },
  { name: "Python", icon: "devicon-python-plain" },
  { name: "Figma", icon: "devicon-figma-plain" },
];
function SectionHero() {
  const { theme } = useTheme();
  return (
    <BeamsBackground intensity="medium">
      <div className="min-h-screen">
        {/* Navigation */}
        <nav
          className={cn(
            "fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300",
            theme === "light"
              ? "bg-white/80 border-gray-200"
              : "bg-neutral-950/80 border-neutral-800"
          )}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div
                className={cn(
                  "text-xl font-bold transition-colors duration-300",
                  theme === "light" ? "text-gray-900" : "text-white"
                )}
              >
                Matan L
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  evi
                </span>
              </div>
              <div className="flex items-center space-x-6">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section
          id="about"
          className="min-h-screen flex items-center justify-center px-4 relative"
        >
          <div className="max-w-4xl mx-auto text-center relative space-y-10">
            <div className="relative flex justify-between w-full">
              <TechCube
                {...skills[3]}
                className="translate-x-full"
                colored={true}
              />
              <TechCube
                {...skills[6]}
                className="-translate-y-1/2"
                colored={true}
              />
              <TechCube {...skills[1]} className="-translate-x-full" />
            </div>
            <div className="space-y-6 md:space-y-8">
              <div>
                <h1
                  className={cn(
                    "text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 transition-colors duration-300",
                    theme === "light" ? "text-gray-900" : "text-white"
                  )}
                >
                  Fullstack{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Developer
                  </span>
                </h1>
                <p
                  className={cn(
                    "text-md md:text-2xl max-w-2xl mx-auto transition-colors duration-300",
                    theme === "light" ? "text-gray-600" : "text-neutral-300"
                  )}
                >
                  Building modern web applications with cutting-edge
                  technologies. Passionate about creating seamless user
                  experiences and scalable solutions.
                </p>
              </div>

              <SocialLinks />

              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0"
                onClick={() =>
                  document
                    .getElementById("experience")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Experience
              </Button>
            </div>
            <div className="relative flex justify-between w-full">
              <TechCube
                {...skills[2]}
                className="translate-x-full translate-y-[40%]"
              />
              <TechCube {...skills[0]} className="translate-y-[150%]" />
              <TechCube
                {...skills[4]}
                className="-translate-x-full"
                colored={true}
              />
            </div>
          </div>
        </section>

        {/* Transition element - this creates a smooth gradient between sections */}
        <div
          className={cn(
            "fixed inset-0 pointer-events-none z-0 opacity-0 transition-opacity duration-300",
            theme === "light"
              ? "bg-gradient-to-b from-transparent via-gray-50/70 to-gray-50"
              : "bg-gradient-to-b from-transparent via-neutral-950/70 to-neutral-950"
          )}
          style={{ height: "100vh" }}
        />
      </div>
    </BeamsBackground>
  );
}

export default SectionHero;
