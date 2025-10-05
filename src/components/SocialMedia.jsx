import React from "react";
import { Github, Linkedin, Facebook, Mail } from "lucide-react";

// JSON-style array of socials
const socialLinks = [
  {
    icon: Github,
    url: "https://github.com/safayetahmed1999",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/safayet-ahmed-/",
    label: "LinkedIn",
  },
  {
    icon: Facebook,
    url: "https://www.facebook.com/sssafayetahmed",
    label: "Facebook",
  },
  {
    icon: Mail,
    url: "https://mail.google.com/mail/?view=cm&to=safayetahmed1999@gmail.com",
    label: "Email",
  },
];

export default function SocialMedia() {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map(({ icon: Icon, url, label }) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Icon className="h-6 w-6" />
        </a>
      ))}
    </div>
  );
}
