import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import coffeceLogo from "@/assets/coffece-logo.png";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-coffee-dark/70 backdrop-blur-xl shadow-lg border-b border-border/10"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/">
          <img src={coffeceLogo} alt="Coffece" className="h-10 brightness-0 invert" />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <a href="/#ponuka" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors font-body">
            Ponuka
          </a>
          <a href="/#kontakt" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors font-body">
            Kontakt
          </a>
          <a
            href="/#kontakt"
            className="text-sm border border-primary-foreground/40 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground px-5 py-2 rounded-full hover:bg-primary-foreground/20 hover:scale-105 transition-all font-body"
          >
            Objednať
          </a>
        </div>
      </div>
    </nav>
  );
};
