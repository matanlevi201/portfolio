import { Badge } from "../ui/badge";

function Title() {
  return (
    <>
      <Badge className="mb-4 bg-purple-900/30 text-purple-400 hover:bg-purple-900/40 border-purple-700/50">
        Showcase Project
      </Badge>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
        Project{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
          Spotlight
        </span>
      </h2>
      <p className="text-gray-400 max-w-2xl">
        My most ambitious and technically challenging project to date,
        showcasing the pinnacle of my development skills.
      </p>
    </>
  );
}

export default Title;
