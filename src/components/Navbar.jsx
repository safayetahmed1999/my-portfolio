import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  return (
    <nav className={cn("fixed w-full z-40 bg-background py-6 shadow-md")}>
      <ThemeToggle/>
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center cursor-pointer"
          href="#"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setIsMenuOpen(false); // closes mobile menu if open
          }}
        >
          {/* <span className="relative z-10">
            <span className="text-glow text-foreground">hasibul</span>{" "}
            217
          </span> */}
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* mobile nav toggle */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* backdrop with blur */}
        {isMenuOpen && (
          <div
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 z-30 backdrop-blur-sm md:hidden"
            aria-hidden="true"
          />
        )}

        
        <div
          className={cn(
            "fixed top-0 right-0 h-full z-40 md:hidden p-6 transition-transform duration-300 ease-in-out",
            isMenuOpen ? "translate-x-0" : "translate-x-full",
            "w-64 max-w-full flex flex-col",
            "bg-background shadow-lg rounded-l-xl"
          )}
        >
          <div className="flex flex-col space-y-4 text-lg mt-16">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-5 py-3 rounded-lg bg-purple-800 text-white hover:bg-purple-900 transition-colors duration-300 cursor-pointer select-none text-center font-semibold shadow"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
