import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { X, Menu } from "lucide-react";

// Type pour les éléments de navigation
interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#stack" },
  { name: "Learning", href: "#formation" },
  { name: "Projects", href: "#project" },
  { name: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight &&
          sectionId
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fonction pour gérer le scroll smooth vers les sections
  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ): void => {
    e.preventDefault();
    const targetId = href.substring(1); // Enlever le # du href
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });

      // Mettre à jour la section active
      setActiveSection(targetId);

      // Fermer le menu mobile si ouvert
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex items-center justify-between h-16">
            <a
              href="#home"
              className="flex items-center space-x-2"
              onClick={(e) => handleScrollToSection(e, "#home")}
            >
              <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center text-white font-bold">
                C
              </div>
              <span className="text-lg font-bold gradient-text">
                Anthony.dev
              </span>
            </a>

            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-green-300 ${
                    `#${activeSection}` === item.href
                      ? "text-green-300"
                      : "text-muted-foreground"
                  }`}
                  onClick={(e) => handleScrollToSection(e, item.href)}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <button
              className="md:hidden text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center text-white font-bold">
                C
              </div>
              <span className="text-lg font-bold">Codeur</span>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col space-y-6 mb-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-medium transition-colors hover:text-green-300"
                onClick={(e) => handleScrollToSection(e, item.href)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navigation;
