import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { X, Menu, Terminal } from "lucide-react";

// Type pour les éléments de navigation
interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Learning", href: "#learning" },
  { name: "Project", href: "#project" },
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
    href: string,
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
        className="fixed left-0 right-0 top-0 z-50 border-b border-border/20 backdrop-blur-md"
      >
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Terminal className="h-5 w-5 text-green-300 md:h-7 md:w-7" />
            <nav className="hidden items-center space-x-8 md:flex">
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
              className="text-muted-foreground hover:text-foreground md:hidden"
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
          <div className="mb-8 flex items-center justify-between">
            <Terminal className="h-5 w-5 text-green-300" />

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="mb-8 flex flex-col space-y-6">
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
