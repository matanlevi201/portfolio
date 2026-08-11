import ProjectCard from "./card-project";

function ProjectsSection() {
  return (
    <section id="projects" className="px-5 py-30 pt-15 relative">
      <div className="absolute top-0 left-0 right-0 h-24" />
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Showcase Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>
      </div>
      <div className="flex">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            logo="auth-icon.png"
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
      </div>
    </section>
  );
}

export default ProjectsSection;
