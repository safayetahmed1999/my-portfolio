import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* LEFT COLUMN */}
          <div className="space-y-8 max-w-3xl mx-auto">
            <div className="space-y-5">
              <h3 className="text-3xl font-semibold text-center">
                Frontend Developer
              </h3>

              <p className="text-muted-foreground text-lg leading-relaxed">
                With 1 year of hands-on experience in React.js, I'm actively
                leveling up my skills by diving into React Native and Next.js.
                My goal is to grow into a versatile full-stack developer by
                mastering backend technologies next.
              </p>
            </div>

            <div className="bg-muted p-6 rounded-lg border border-primary/30">
              <h4 className="text-2xl font-semibold mb-4 border-b-2 pb-2 border-primary inline-block">
                🎓 Education
              </h4>

              <p className="font-medium text-lg">
                B.Sc. in Computer Science & Engineering
              </p>
              <p className="text-muted-foreground text-lg">
               University Of Information Technology and Sciences, Dhaka
              </p>
              <p className="text text-muted-foreground mt-1">
                2021 – 2025 | CGPA:{" "}
                <span className="font-semibold">3.42 / 4.00</span>
              </p>
            </div>

            {/* Optional CTA Buttons */}

            <div className="flex flex-col sm:flex-row gap-4 pt-3 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="https://drive.google.com/file/d/1xHjCddBYWG4CEEmNv131atR_iwhxSV_2/view?usp=sharing"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="grid grid-cols-1 gap-6">
            {/* Frontend Development */}
            <div className="gradient-border p-6 card-hover rounded-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-xl">
                    Frontend Development
                  </h4>
                  <p className="text-muted-foreground">
                    Building responsive, accessible user interfaces using modern
                    web technologies like React, Tailwind CSS, and RESTful APIs.
                  </p>
                </div>
              </div>
            </div>

            {/* UI/UX Design */}
            <div className="gradient-border p-6 card-hover rounded-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-xl">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Crafting intuitive interfaces and engaging experiences
                    focused on usability, accessibility, and visual consistency.
                  </p>
                </div>
              </div>
            </div>

            {/* Software Testing & QA */}
            <div className="gradient-border p-6 card-hover rounded-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-xl">
                    Software Testing & QA
                  </h4>
                  <p className="text-muted-foreground">
                    Ensuring software quality through manual testing, bug
                    tracking, and maintaining high performance and reliability
                    standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
