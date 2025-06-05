import { ExternalLinkIcon } from "lucide-react";
import ProjectCard from "./project-card";
import { Button } from "./ui/button";

function ProjectSection() {
  return (
    <section id="projects" className="px-5 py-30 bg-zinc-900/50 relative">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent" />
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Check out some of my recent work. These projects showcase my skills
            and expertise in building modern web applications.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Authify"
            description="Developed a secure auth system with email, Google OAuth2, 2FA, password reset, and robust DI. Fully tested backend with CI/CD via GitHub Actions and deployed on Render.com."
            tags={[
              "Typescript",
              "React",
              "Express",
              "PostgreSQL",
              "Jest",
              "CI/CD",
            ]}
            image="authify.png"
            sourceCodeLink="https://github.com/matanlevi201/authify"
            demoLink="https://authify-8yww.onrender.com"
            logo="authify-logo.png"
          />
          <ProjectCard
            title="Chatify"
            description="Built a real-time chat app with Express, TypeScript, React, MongoDB, and Socket.IO. Used React Query for data fetching, with live messaging and state sync. Deployed on Render.com."
            tags={["Typescript", "React", "Express", "MongoDB", "Socket.IO"]}
            image="chatify.png"
            sourceCodeLink="https://github.com/matanlevi201/chatify"
            demoLink="https://chatify.it.com"
            logo="chatify.svg"
          />
          <ProjectCard
            title="Interview Platform"
            description="An app designed for coding interviews, where interviewers can video chat with candidates, ask technical questions, and collaborate in real time through a shared coding environment."
            tags={["Next.js", "Convex"]}
            image="code-sync.png"
            sourceCodeLink="https://github.com/matanlevi201/code-sync"
            demoLink="https://code-sync-ochre.vercel.app/"
            logo=""
          />
        </div>
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-zinc-700 hover:bg-zinc-800"
          >
            View All Projects <ExternalLinkIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
