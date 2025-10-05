import { ArrowDown } from "lucide-react";
import SocialMedia from "./SocialMedia";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="lg:mt-40 mt-30 flex flex-col justify-center px-4 bg-background"
    >
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 ">
        {/* 🖼️ Image at top on mobile, left on desktop */}
        <div className="w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary shadow-lg mx-auto md:mx-0">
          <img
            src="/safayet.jpeg"
            alt="Safayet Ahmed"
            className="w-full h-full object-conrtain"
          />
        </div>

        {/* 📝 Text */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            <span className="block opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="block text-primary opacity-0 animate-fade-in-delay-1">
             Safayet Ahmed
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
            I’m a front-end developer focused on building responsive,
            accessible, and user-friendly web apps with NextJs & ReactJS. I specialize in
            modern UIs using Tailwind CSS, state management with Redux or
            Zustand, and seamless RESTful API integration—ensuring every
            interface looks polished and works flawlessly.
          </p>

          {/* SocialMedia centered on mobile */}
          <div className="flex justify-center md:justify-start">
            <SocialMedia />
          </div>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* ⬇️ Scroll Indicator */}
      <div className="flex flex-col items-center animate-bounce lg:mt-20 mt-10  mx-auto">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
