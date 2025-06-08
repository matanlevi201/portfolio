import { Building2Icon } from "lucide-react";
import ExperienceCard from "./experience-card";

function ExperienceSection() {
  const workExperiences = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "Utopia Tech (closed).",
      type: "Full Time",
      startDate: "June 2023",
      endDate: "November 2024",
      achievements: [
        "Developed and maintained backend API services for high-scale B2B2C SaaS products.",
        "Collaborated with cross-functional teams to gather requirements and deliver high-quality software solutions.",
        "Participated in code reviews and implemented best practices to ensure code quality and maintainability.",
        "Optimized SQL queries improving database performance by 25%, enhancing system reliability.",
        "Built CLI tool to generate API documentation, saving 10+ hours team monthly",
        "Developed dynamic and interactive user interfaces using Vue.js.",
      ],
      technologies: [
        "Node.js",
        "JavaScript",
        "PostgreSQL",
        "Docker",
        "APIs",
        "Vue.js",
      ],
      location: "Ramat Gan, IL",
      logo: <Building2Icon />,
    },
  ];

  return (
    <section id="experience" className="px-5 py-30 pt-15 relative">
      <div className="absolute top-0 left-0 right-0 h-24" />
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
            Work Experience
          </h2>
          <div className="mb-2">Let's extend this timeline together! ✨</div>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        {/* Experience Cards */}
        <div className="relative flex flex-col items-center gap-18">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-300 via-purple-400 to-blue-300 -translate-x-1/2 z-0"></div>
          <ExperienceCard alignment="future" />

          <ExperienceCard item={workExperiences[0]} alignment="left" />
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
