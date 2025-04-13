import { ExternalLinkIcon, GithubIcon } from "lucide-react";
import { Button } from "../ui/button";

function Description() {
  return (
    <>
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90 rounded-2xl blur"
        // style={{ backdropFilter: "blur(2px)" }}
      />
      <div className="relative space-y-2">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
          AI-Powered Analytics Dashboard
        </h3>
        <p className="text-gray-200 text-sm md:text-md lg:text-lg">
          A comprehensive analytics platform that leverages machine learning to
          provide predictive insights. Built with React, TypeScript, and
          Node.js.
        </p>

        <div className="flex flex-wrap gap-2">
          {["React", "TypeScript", "Node.js", "PostgreSQL"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded bg-gray-800 text-gray-300 border border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="pt-4 flex flex-wrap gap-4">
          <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white border-none">
            Live Demo <ExternalLinkIcon className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="border-gray-700 text-gray-300 hover:bg-gray-800"
          >
            <GithubIcon className="mr-2 h-4 w-4" /> View Code
          </Button>
        </div>

        <div className="mt-6 p-4 bg-gray-900/50 border border-gray-800 rounded-lg hidden md:block">
          <h4 className="text-cyan-400 font-medium mb-2">Key Achievement</h4>
          <p className="text-gray-400 text-xs xs:text-sm">
            Implemented a custom machine learning algorithm that improved
            prediction accuracy by 37%, resulting in a 25% increase in user
            engagement and featured in multiple tech publications.
          </p>
        </div>
      </div>
    </>
  );
}

export default Description;
