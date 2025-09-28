import React from "react";
import { Code2, Bug } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Jr. Frontend Developer",
      company: "MADBangla",
      date: "Jan 2025 – Aug 2025",
      description:
        "Developed reusable React/React Native components, integrated Django APIs, and supported multi-tenant ERP architecture.",
      icon: <Code2 className="h-6 w-6 text-primary" />,
    },
    {
      title: "Trainee SQA",
      company: "CDIP, UIU",
      date: "June – Sept 2023",
      description:
        "Performed functional, API, and automation testing. Authored test cases and contributed to QA process improvements.",
      icon: <Bug className="h-6 w-6 text-primary" />,
    },
  ];

  return (
    <section id="experience" className="py-16 px-4 bg-muted/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="gradient-border p-6 card-hover rounded-xl"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  {exp.icon}
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-xl text-primary">
                    {exp.title} – {exp.company}
                  </h4>
                  <p className="text-muted-foreground text-sm mt-1">{exp.date}</p>
                  <p className="text-muted-foreground mt-2">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
