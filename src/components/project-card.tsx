import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  sourceCodeLink: string;
  demoLink: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  image,
  sourceCodeLink,
  demoLink,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="h-full"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        className="overflow-hidden h-full bg-zinc-900 border-zinc-800 hover:border-purple-500/50 transition-colors p-0 gap-0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden aspect-video">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-700"
            style={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>
        <CardContent className="p-6 grow flex flex-col justify-between">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-zinc-400 text-sm mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-zinc-800 text-zinc-300 rounded text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            <Button
              size="sm"
              variant="outline"
              className="p-5 border-zinc-700 hover:bg-zinc-800 flex-1"
              onClick={() => window.open(sourceCodeLink, "_blank")}
            >
              <Github className="mr-2 h-4 w-4" /> Code
            </Button>
            <Button
              size="sm"
              className="p-5 bg-purple-600 hover:bg-purple-700 flex-1"
              onClick={() => window.open(demoLink, "_blank")}
            >
              <ExternalLink className="mr-2 h-4 w-4" /> Demo
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
