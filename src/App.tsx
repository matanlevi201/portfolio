import ExperienceSection from "./components/section-experience";
import SectionHero from "./components/section-hero";
import ProjectsSection from "./components/section-projects";
import { useTheme } from "./components/theme-provider";

function App() {
  const { theme } = useTheme();
  return (
    <div
      className={`h-full ${
        theme === "light"
          ? "bg-gray-50 text-gray-900"
          : "bg-neutral-950 text-white"
      }`}
    >
      <SectionHero />
      <ExperienceSection />
      <ProjectsSection />
      <footer className="border-t">
        <div className="container mx-auto flex justify-center gap-2 py-6 w-full shrink-0 px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2024 Matan.dev. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
