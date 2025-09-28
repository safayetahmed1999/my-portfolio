import { useState } from "react";
import { cn } from "@/lib/utils";

// PNG image-based skills (all images are in /public)
const skills = [
  { name: "React", category: "frontend", image: "/REACT.png" },
  { name: "JavaScript", category: "frontend", image: "/jspng.webp" },

  { name: "Tailwind CSS", category: "frontend", image: "/TAILWIND.png" },
  { name: "Next.js", category: "frontend", image: "/NEXT.png" },
  { name: "HTML", category: "frontend", image: "/HTML.png" },
  { name: "CSS", category: "frontend", image: "/CSS.png" },

  { name: "Express JS", category: "backend", image: "/EXPRESS.png" },

  { name: "Python", category: "backend", image: "/PYTHON.png" },
  { name: "Django", category: "backend", image: "/DJANGO.png" },

  { name: "Node.js", category: "backend", image: "/NODEJS.png" },

  { name: "MongoDB", category: "backend", image: "/MONGODB.png" },
  { name: "My SQL", category: "backend", image: "/MYSQL.png" },

  { name: "Git", category: "tools", image: "/GIT.png" },
  { name: "GitHub", category: "tools", image: "/github.png" },
  { name: "Docker", category: "tools", image: "/DOCKER.png" },
  { name: "Postman", category: "tools", image: "/postman.webp" },
  { name: "Figma", category: "tools", image: "/FIGMA.png" },
  { name: "VS Code", category: "tools", image: "/VSCODE.png" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded shadow-sm card-hover flex flex-col items-center text-center transition hover:shadow-md"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-15 h-15 object-contain mb-3"
              />

              <h3 className="font-semibold text-lg">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
