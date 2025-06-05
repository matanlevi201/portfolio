import { Code2Icon } from "lucide-react";
import { Button } from "./ui/button";

function Navbar() {
  const scrollToProjects = () => {
    const section = document.querySelector("#projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const scrollToSkills = () => {
    const section = document.querySelector("#skills");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between mx-auto">
        <Button
          variant="link"
          className="flex items-center gap-2 text-xl font-bold"
        >
          <Code2Icon className="size-8 text-purple-500" />
          <span className="text-white">
            Dev<span className="text-purple-500">Portfolio</span>
          </span>
        </Button>
        <nav className="hidden md:flex items-center gap-6">
          <Button
            variant="link"
            onClick={scrollToSkills}
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            Skills
          </Button>
          <Button
            variant="link"
            onClick={scrollToProjects}
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            Projects
          </Button>
        </nav>
        <div className="flex items-center gap-4 px-4 py-2">
          <Button
            variant="outline"
            className="hidden md:flex border border-purple-500 text-purple-500 hover:bg-purple-500/10"
          >
            Resume
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700">
            Let's Talk
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
