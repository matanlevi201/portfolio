import { ExternalLinkIcon, GithubIcon } from "lucide-react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  sourceCodeLink: string;
  demoLink: string;
  tags: string[];
  logo: string;
}

function ProjectCard({
  title,
  description,
  image,
  sourceCodeLink,
  demoLink,
  tags,
  logo,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden pt-0 dark:bg-[#111116] shadow-lg">
      <div className="relative aspect-video">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <CardContent className="px-4">
        <div className="flex gap-2 items-end">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          {logo && <img src={logo} alt="" className="size-10" />}
        </div>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 mt-auto">
        <a
          href={sourceCodeLink}
          target="_blank"
          className="inline-flex items-center gap-2 text-sm flex-1"
        >
          <Button className="flex-1">
            <GithubIcon className="h-4 w-4" />
            View Source
          </Button>
        </a>

        <a
          href={demoLink}
          target="_blank"
          className="inline-flex items-center gap-2 text-sm flex-1"
        >
          <Button variant="secondary" className="flex-1">
            <ExternalLinkIcon className="h-4 w-4" />
            View Demo
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
