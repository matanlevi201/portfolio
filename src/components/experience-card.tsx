import {
  ArrowRightIcon,
  AwardIcon,
  MapPinIcon,
  SparklesIcon,
} from "lucide-react";
import { ReactNode } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import TypewriterComponent from "typewriter-effect";

function ExperienceCardRight(item: {
  title: string;
  company: string;
  type: string;
  startDate: string;
  endDate: string;
  description?: string;
  achievements: string[];
  technologies: string[];
  location: string;
  logo?: ReactNode;
}) {
  return (
    <div className="relative w-full flex flex-col items-center gap-2">
      <div className="flex flex-col relative items-center w-full gap-4">
        <div className="size-5 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center ring-2 ring-background">
          <div className="size-2 rounded-full bg-background" />
        </div>
        <p
          className={`relative font-medium inline-block px-4 py-2 dark:bg-[#111116] bg-card text-sm rounded-lg border border-gray-400/30  dark:border-[#111116]/50 text-gray-600 dark:text-neutral-300`}
        >
          {item.startDate} - {item.endDate}
        </p>
      </div>

      <div className={`flex flex-col w-full dark:text-gray-300 items-end`}>
        <div
          className={`dark:bg-[#111116] bg-card rounded-xl p-6 shadow-lg text-left min-w-[45%]`}
        >
          <div
            className={`flex gap-2 justify-end items-center mb-1 flex-row-reverse`}
          >
            <h3
              className={`flex flex-col font-bold text-lg md:text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 items-start`}
            >
              <span>{item.title}</span>
              <span className="font-semibold text-foreground text-[0.9rem]">
                {item.company}
              </span>
            </h3>
            <div className="p-2 rounded-lg bg-accent/70">{item.logo}</div>
          </div>
          <div
            className={`flex gap-2 justify-end items-center flex-row-reverse`}
          >
            <span className="flex items-center gap-1">
              <MapPinIcon className="w-3 h-3 md:w-4 md:h-4" />
              {item.location}
            </span>
            <Badge variant="secondary" className="text-[0.7rem] bg-blue-600/10">
              {item.type}
            </Badge>
          </div>

          <p className="my-6 leading-relaxed">{item.description}</p>

          <div
            className={`flex my-2 gap-2 justify-end items-center flex-row-reverse`}
          >
            <h5 className="font-semibold text-sm sm:text-base text-foreground">
              Key Achievements
            </h5>
            <div className="p-1.5 rounded-md bg-blue-600/10">
              <AwardIcon className="h-4 w-4" />
            </div>
          </div>
          <ul className="list-none space-y-1 text-sm sm:text-base text-muted-foreground leading-relaxed">
            {item.achievements.map((achievement) => (
              <li
                key={achievement}
                className="flex justify-between items-start"
              >
                <span className="text-base mr-2 text-muted-foreground">•</span>
                <span className="flex-1">{achievement}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <h5 className="font-semibold text-sm sm:text-base text-foreground my-3">
              Technologies & Tools
            </h5>
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="text-xs sm:text-sm font-medium hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 bg-blue-600/10"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExperienceCardLeft(item: {
  title: string;
  company: string;
  type: string;
  startDate: string;
  endDate: string;
  description?: string;
  achievements: string[];
  technologies: string[];
  location: string;
  logo?: ReactNode;
}) {
  return (
    <div className="relative w-full flex flex-col items-center gap-2">
      <div className="flex flex-col relative items-center w-full gap-4">
        <div className="size-5 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center ring-2 ring-background">
          <div className="size-2 rounded-full bg-background" />
        </div>
        <p
          className={`relative font-medium inline-block px-4 py-2 dark:bg-[#111116] bg-card text-sm rounded-lg border border-gray-400/30  dark:border-[#111116]/50 text-gray-600 dark:text-neutral-300`}
        >
          {item.startDate} - {item.endDate}
        </p>
      </div>

      <div className={`flex flex-col w-full dark:text-gray-300 items-start`}>
        <div
          className={`dark:bg-[#111116] bg-card rounded-xl p-6 shadow-lg text-left min-w-[45%]`}
        >
          <div
            className={`flex gap-2 justify-end items-center mb-1 flex-row-reverse`}
          >
            <h3
              className={`flex flex-col font-bold text-lg md:text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 items-start`}
            >
              <span>{item.title}</span>
              <span className="font-semibold text-foreground text-[0.9rem]">
                {item.company}
              </span>
            </h3>
            <div className="p-2 rounded-lg bg-accent/70">{item.logo}</div>
          </div>
          <div
            className={`flex gap-2 justify-end items-center flex-row-reverse`}
          >
            <span className="flex items-center gap-1">
              <MapPinIcon className="w-3 h-3 md:w-4 md:h-4" />
              {item.location}
            </span>
            <Badge variant="secondary" className="text-[0.7rem] bg-blue-600/10">
              {item.type}
            </Badge>
          </div>

          <p className="my-6 leading-relaxed">{item.description}</p>

          <div
            className={`flex my-2 gap-2 justify-end items-center flex-row-reverse`}
          >
            <h5 className="font-semibold text-sm sm:text-base text-foreground">
              Key Achievements
            </h5>
            <div className="p-1.5 rounded-md bg-blue-600/10">
              <AwardIcon className="h-4 w-4" />
            </div>
          </div>
          <ul className="list-none space-y-1 text-sm sm:text-base text-muted-foreground leading-relaxed">
            {item.achievements.map((achievement) => (
              <li
                key={achievement}
                className="flex justify-between items-start"
              >
                <span className="text-base mr-2 text-muted-foreground">•</span>
                <span className="flex-1">{achievement}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <h5 className="font-semibold text-sm sm:text-base text-foreground my-3">
              Technologies & Tools
            </h5>
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="text-xs sm:text-sm font-medium hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 bg-blue-600/10"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExperienceCardCenter(item: {
  title: string;
  company: string;
  type: string;
  startDate: string;
  endDate: string;
  description?: string;
  achievements: string[];
  technologies: string[];
  location: string;
  logo?: ReactNode;
}) {
  return (
    <div className="relative w-full flex flex-col items-center gap-2">
      <div className="flex flex-col relative items-center w-full gap-4">
        <div className="size-5 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center ring-2 ring-background">
          <div className="size-2 rounded-full bg-background" />
        </div>
        <p
          className={`relative font-medium inline-block px-4 py-2 dark:bg-[#111116] bg-card text-sm rounded-lg border border-gray-400/30  dark:border-[#111116]/50 text-gray-600 dark:text-neutral-300`}
        >
          {item.startDate} - {item.endDate}
        </p>
      </div>
      <div className={`flex flex-col w-full dark:text-gray-300 items-center`}>
        <div
          className={`dark:bg-[#111116] bg-card rounded-xl p-6 shadow-lg text-left  min-w-[45%]`}
        >
          <div
            className={`flex gap-2 justify-end items-center mb-1 flex-row-reverse`}
          >
            <h3
              className={`flex flex-col font-bold text-lg md:text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 items-start`}
            >
              <span>{item.title}</span>
              <span className="font-semibold text-foreground text-[0.9rem]">
                {item.company}
              </span>
            </h3>
            <div className="p-2 rounded-lg bg-accent/70">{item.logo}</div>
          </div>
          <div
            className={`flex gap-2 justify-end items-center flex-row-reverse`}
          >
            <span className="flex items-center gap-1">
              <MapPinIcon className="w-3 h-3 md:w-4 md:h-4" />
              {item.location}
            </span>
            <Badge variant="secondary" className="text-[0.7rem] bg-blue-600/10">
              {item.type}
            </Badge>
          </div>

          <p className="my-6 leading-relaxed">{item.description}</p>

          <div
            className={`flex my-2 gap-2 justify-end items-center flex-row-reverse`}
          >
            <h5 className="font-semibold text-sm sm:text-base text-foreground">
              Key Achievements
            </h5>
            <div className="p-1.5 rounded-md bg-blue-600/10">
              <AwardIcon className="h-4 w-4" />
            </div>
          </div>
          <ul className="list-none space-y-1 text-sm sm:text-base text-muted-foreground leading-relaxed">
            {item.achievements.map((achievement) => (
              <li
                key={achievement}
                className="flex justify-between items-start"
              >
                <span className="text-base mr-2 text-muted-foreground">•</span>
                <span className="flex-1">{achievement}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <h5 className="font-semibold text-sm sm:text-base text-foreground my-3">
              Technologies & Tools
            </h5>
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="text-xs sm:text-sm font-medium hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 bg-blue-600/10"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExperienceCardFuture() {
  const formattedDate = new Date().toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });
  return (
    <div className="relative w-full flex flex-col items-center gap-2">
      <div className="flex flex-col relative items-center w-full gap-4">
        <div className="size-5 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center ring-2 ring-background">
          <div className="size-2 rounded-full bg-background" />
        </div>
        <p
          className={`relative font-medium inline-block px-4 py-2 dark:bg-[#111116] bg-card text-sm rounded-lg border border-gray-400/30  dark:border-[#111116]/50 text-gray-600 dark:text-neutral-300`}
        >
          {formattedDate} - Future
        </p>
      </div>
      <div className={`flex flex-col w-full dark:text-gray-300 items-center`}>
        <div
          className={`dark:bg-[#111116] bg-card rounded-xl p-6 shadow-lg text-left  min-w-[45%]`}
        >
          <div
            className={`flex gap-2 justify-end items-center mb-1 flex-row-reverse`}
          >
            <h3
              className={`flex flex-col font-bold text-lg md:text-xl bg-clip-text text-foreground items-start`}
            >
              <TypewriterComponent
                options={{
                  strings: ["Your Company Here!", "Let's Talk ⚡"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h3>

            <div className="p-2 rounded-lg bg-accent/70">
              <SparklesIcon className="animate-pulse" />
            </div>
          </div>
          <div
            className={`flex gap-2 justify-end items-center flex-row-reverse`}
          >
            <span className="flex items-center gap-1">
              <MapPinIcon className="w-3 h-3 md:w-4 md:h-4" />
              Your location
            </span>
            <Badge variant="secondary" className="text-[0.7rem] bg-blue-600/10">
              Full Time
            </Badge>
          </div>

          <div
            className={`flex my-2 gap-2 justify-end items-center flex-row-reverse mt-6`}
          >
            <h5 className="font-semibold text-sm sm:text-base text-foreground">
              What I'll Bring
            </h5>
            <div className="p-1.5 rounded-md bg-blue-600/10">
              <AwardIcon className="h-4 w-4" />
            </div>
          </div>
          <ul className="list-none space-y-1 text-sm sm:text-base text-muted-foreground leading-relaxed">
            {[
              "Proven track record of delivering high-quality web applications",
              "Strong problem-solving skills and attention to detail",
              "Collaborative approach and excellent communication",
            ].map((achievement) => (
              <li
                key={achievement}
                className="flex justify-between items-start"
              >
                <span className="text-base mr-2 text-muted-foreground">•</span>
                <span className="flex-1">{achievement}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-center sm:justify-start mt-6">
            <a href="https://wa.me/0527099594">
              <Button className="relative group overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Let's Talk
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExperienceCard({
  alignment,
  item,
}: {
  alignment: "left" | "right" | "center" | "future";
  item?: {
    title: string;
    company: string;
    type: string;
    startDate: string;
    endDate: string;
    description?: string;
    achievements: string[];
    technologies: string[];
    location: string;
    logo?: ReactNode;
  };
}) {
  switch (true) {
    case alignment === "left" && !!item:
      return <ExperienceCardLeft {...item} />;
    case alignment === "right" && !!item:
      return <ExperienceCardRight {...item} />;
    case alignment === "center" && !!item:
      return <ExperienceCardCenter {...item} />;
    case alignment === "future" && !item:
      return <ExperienceCardFuture />;
    default:
      return null;
  }
}

export default ExperienceCard;
