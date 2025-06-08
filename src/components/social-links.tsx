import { GithubIcon, LinkedinIcon } from "lucide-react";
import { Button } from "./ui/button";

function SocialLinks() {
  const socialLinks = [
    {
      icon: <GithubIcon className="size-5" />,
      href: "https://github.com/matanlevi201",
      label: "GitHub",
    },
    {
      icon: <LinkedinIcon className="size-5" />,
      href: "https://www.linkedin.com/in/matanlevi404",
      label: "LinkedIn",
    },
    {
      icon: (
        <img
          src={`https://cdn.simpleicons.org/whatsapp/1f9f5b`}
          className="p-2"
        />
      ),
      href: "https://wa.me/0527099594",
      label: "Whatsapp",
    },
  ];

  return (
    <div className="flex justify-center space-x-3">
      {socialLinks.map((l) => (
        <a key={l.label} href={l.href}>
          <Button
            variant="outline"
            size="icon"
            className="size-10 shadow-xl dark:bg-[#111116] dark:text-neutral-400 text-neutral-600 dark:hover:bg-[#111116]"
          >
            {l.icon}
          </Button>
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
