import { motion } from "framer-motion";
import { useState } from "react";

const skills = [
  { name: "JavaScript", icon: "devicon-javascript-plain" },
  { name: "TypeScript", icon: "devicon-typescript-plain" },
  { name: "React", icon: "devicon-react-original" },
  { name: "Vue", icon: "devicon-vuejs-plain" },
  { name: "Node.js", icon: "devicon-nodejs-plain" },
  { name: "Express", icon: "devicon-express-original" },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
  { name: "MongoDB", icon: "devicon-mongodb-plain" },
  { name: "Docker", icon: "devicon-docker-plain" },
  { name: "Git", icon: "devicon-git-plain" },
  { name: "Tailwind", icon: "devicon-tailwindcss-plain" },
];

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section className="px-5 py-30 bg-zinc-900/50 relative" id="skills">
      <div className="container relative z-10 px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-2">Tech Stack & Tools</h2>
            <div className="h-1 w-20 bg-purple-600 mx-auto mb-6"></div>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="flex flex-col items-center justify-center"
            >
              <div
                className={`
                  relative flex items-center justify-center w-16 h-16 mb-3 transition-all duration-300 rounded-2xl
                  bg-gradient-to-br from-gray-900 to-gray-950
                  ${hoveredSkill === skill.name ? "transform scale-110" : ""}
                `}
              >
                {/* Glow effect */}
                <div
                  className={`
                    absolute inset-0 transition-opacity duration-300 rounded-2xl
                    bg-[radial-gradient(circle_at_50%_50%,rgba(120,0,255,0.5)_0%,rgba(0,200,255,0.5)_100%)]
                    ${hoveredSkill === skill.name ? "opacity-30" : "opacity-0"}
                  `}
                ></div>

                {/* Icon */}
                <i
                  className={`${
                    skill.icon
                  } text-3xl transition-all duration-300 ${
                    hoveredSkill === skill.name
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"
                      : "text-gray-400"
                  }`}
                ></i>
              </div>
              <span className="text-sm font-medium text-gray-400">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
