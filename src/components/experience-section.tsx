import { CalendarIcon, MapPinIcon } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

function ExperienceSection() {
  const workExperiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "TechCorp Solutions",
      duration: "Jan 2023 - Present",
      location: "San Francisco, CA",
      type: "Full-time",
      responsibilities: [
        "Led development of microservices architecture serving 1M+ users daily",
        "Architected and implemented real-time chat system using WebSocket and Redis",
        "Mentored 5 junior developers and conducted code reviews",
        "Reduced application load time by 40% through performance optimization",
        "Collaborated with product team to deliver 15+ features on schedule",
      ],
      technologies: [
        "React",
        "Node.js",
        "TypeScript",
        "PostgreSQL",
        "AWS",
        "Docker",
      ],
    },
  ];
  return (
    <section id="experience" className="px-5 py-30 pt-15 bg-black relative">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent" />
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Experience
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mb-6"></div>
        </div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8 mb-12 md:mb-16">
          {workExperiences.map((experience, index) => (
            <Card
              key={index}
              className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-4 md:p-8 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

              <div className="relative z-10 space-y-4">
                {/* Header */}
                <div className="flex flex-col">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                    {experience.title}
                  </h3>
                  <p className="text-lg md:text-xl text-purple-300 font-semibold mb-2">
                    {experience.company}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 md:gap-4 text-gray-400 text-sm md:text-base">
                    <div className="flex items-center gap-1">
                      <CalendarIcon className="w-3 h-3 md:w-4 md:h-4" />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPinIcon className="w-3 h-3 md:w-4 md:h-4" />
                      <span>{experience.location}</span>
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-xs md:text-sm"
                    >
                      {experience.type}
                    </Badge>
                  </div>
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-white mb-2 md:mb-3">
                    Key Achievements
                  </h4>
                  <ul className="space-y-1 md:space-y-2">
                    {experience.responsibilities
                      .slice(0, 3)
                      .map((responsibility, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 md:gap-3 text-gray-300 text-sm md:text-base"
                        >
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 mt-1.5 flex-shrink-0" />
                          <span className="leading-relaxed">
                            {responsibility}
                          </span>
                        </li>
                      ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-white mb-2 md:mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {experience.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:border-purple-400/50 hover:text-white transition-all duration-300 text-xs md:text-sm py-0 px-2 md:px-2.5"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
