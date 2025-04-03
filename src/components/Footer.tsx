import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronUp, Mail, ExternalLink } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const currentYear = new Date().getFullYear();

  // Handle scroll to show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Recent projects data
  const recentProjects = [
    {
      name: "Mortgage Repayment",
      link: "https://mortgagecalculator-codeuromniscient.netlify.app/",
    },
    { name: "Pokedex", link: "https://pokedec-codeuromniscient.netlify.app/" },
    {
      name: "Pulse",
      link: "https://headphone-product-codeur-omniscient.netlify.app/",
    },
  ];
  return (
    <footer className="relative overflow-hidden pb-10 pt-20">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Footer content grid */}
        <div className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="max-w-md md:col-span-3">
            <a href="#home" className="mb-6 flex items-center space-x-2">
              <span className="gradient-text text-xl font-bold">
                Anthony Dorian
              </span>
            </a>
            <p className="mb-6 text-muted-foreground">
              Passionate and creative fullstack developer with a focus on
              building elegant, user-friendly interfaces while enhancing my
              skills along the way.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/Codeur-Omniscient"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 transition-all duration-300 hover:scale-110"
              >
                <SiGithub className="h-5 w-5 text-green-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/anthony-mban/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 transition-all duration-300 hover:scale-110"
              >
                <SiLinkedin className="h-5 w-5 text-green-300" />
              </a>
              <a
                href="https://x.com/mark_anthony242?s=21"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 transition-all duration-300 hover:scale-110"
              >
                <FaTwitter className="h-5 w-5 text-green-300" />
              </a>
              <a
                href="mailto:anthonymedin963@gmail.com"
                className="p-2 transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-5 w-5 text-green-300" />
              </a>
            </div>
          </div>
          {/* Navigation */}
          <div className="md:col-span-3">
            <h3 className="mb-4 text-lg font-semibold text-green-300">
              Navigation
            </h3>
            <ul className="space-y-3">
              {["About", "Skills", "Learning", "Project", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="group flex items-center gap-2 text-muted-foreground transition-colors hover:text-green-300"
                      //
                    >
                      <span className="h-px w-0 bg-green-300 transition-all duration-300 group-hover:w-4"></span>
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h3 className="mb-4 text-lg font-semibold text-green-300">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                "Web Development",
                "Frontend Development",
                "Backend Development",
                "Responsive Design",
              ].map((item) => (
                <li key={item} className="text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Projects */}
          <div className="md:col-span-3">
            <h3 className="mb-4 text-lg font-semibold text-green-300">
              Recent Projects
            </h3>
            <ul className="space-y-3">
              {recentProjects.map((project) => (
                <li key={project.name}>
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-green-300"
                  >
                    {project.name}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}

        <div className="flex items-center justify-center border-t border-gray-600 pt-8">
          <div className="mb-4 text-center text-sm text-muted-foreground md:mb-0">
            &copy; {currentYear} Anthony Dorian. All rights reserved.
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 rounded-full bg-green-700 p-3 text-white shadow-lg transition-colors hover:bg-green-600"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
