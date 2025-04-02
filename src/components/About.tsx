import { motion } from "motion/react";
import { Info } from "lucide-react";
import aboutImg from "../assets/about-img.jpg";
import { useState } from "react";
import { easterEggs } from "../constant/data";

const About = () => {
  const [activeEasterEgg, setActiveEasterEgg] = useState<string | null>(null);
  const [easterEggPosition, setEasterEggPosition] = useState({ x: 0, y: 0 });

  const handleEasterEggHover = (key: string, e: React.MouseEvent) => {
    // Get position relative to the viewport
    const x = e.clientX;
    const y = e.clientY;

    // Set the position for the tooltip
    setEasterEggPosition({ x, y });
    setActiveEasterEgg(key);
  };

  const handleEasterEggLeave = () => {
    setActiveEasterEgg(null);
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="section-title">
        <div>
          <h2>
            About <span className="accent-text">Me</span>
          </h2>
        </div>
      </div>

      <div className="grid md:grid-cols-5 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-2 relative"
        >
          <div className="relative">
            {/* <div className="absolute -top-4 -left-4 w-full h-full border border-green-700 rounded-lg"></div> */}
            <div className="relative z-10 overflow-hidden rounded-lg">
              <img
                src={aboutImg}
                width={500}
                height={600}
                className="w-full object-cover"
                alt="Anthony Dorian"
                loading="lazy"
              />
            </div>
            {/* <div className="absolute bottom-4 right-4 p-2 bg-background border border-green-700 rounded-lg">
              <svg
                width="80"
                height="30"
                viewBox="0 0 120 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 30C20 10 30 25 40 20C50 15 60 30 70 25C80 20 90 10 110 30"
                  stroke="#8B5A2B"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div> */}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="md:col-span-3 space-y-6 text-muted-foreground"
        >
          <div className="text-lg interactive-text">
            <p>
              I'm a passionate{" "}
              <button
                className="cursor-help easter-egg-trigger"
                onMouseEnter={(e) =>
                  handleEasterEggHover("fullstack developer", e)
                }
                onMouseLeave={handleEasterEggLeave}
              >
                fullstack developer
              </button>{" "}
              with a strong focus on frontend and{" "}
              <button
                type="button"
                className="cursor-help easter-egg-trigger"
                onMouseEnter={(e) => handleEasterEggHover("UI/UX design", e)}
                onMouseLeave={handleEasterEggLeave}
                // onFocus={(e) => handleEasterEggHover("UI/UX design", e)}
                onBlur={handleEasterEggLeave}
              >
                UI/UX design
              </button>
              . My journey in web development started with a curiosity about how
              websites work, which led me to dive deep into{" "}
              <button
                className="cursor-help easter-egg-trigger"
                onMouseEnter={(e) =>
                  handleEasterEggHover("modern web technologies", e)
                }
                onMouseLeave={handleEasterEggLeave}
              >
                modern web technologies
              </button>{" "}
              and best practices.
            </p>

            <p className="mt-4">
              With a background in both{" "}
              <button
                className="cursor-help easter-egg-trigger"
                onMouseEnter={(e) =>
                  handleEasterEggHover("design and development", e)
                }
                onMouseLeave={handleEasterEggLeave}
              >
                design and development
              </button>{" "}
              , I bring a unique perspective to projects, ensuring they not only
              function flawlessly but also provide an exceptional user
              experience. I'm constantly learning and exploring new technologies
              to stay at the forefront of web development.
            </p>

            <p className="mt-4">
              My goal is to create digital experiences that are not only
              visually appealing but also{" "}
              <button
                className="cursor-help easter-egg-trigger"
                onMouseEnter={(e) => handleEasterEggHover("accessible", e)}
                onMouseLeave={handleEasterEggLeave}
              >
                accessible
              </button>
              ,{" "}
              <button
                className="cursor-help easter-egg-trigger"
                onMouseEnter={(e) => handleEasterEggHover("performant", e)}
                onMouseLeave={handleEasterEggLeave}
              >
                performant
              </button>
              , and{" "}
              <button
                className="cursor-help easter-egg-trigger"
                onMouseEnter={(e) => handleEasterEggHover("intuitive", e)}
                onMouseLeave={handleEasterEggLeave}
              >
                intuitive
              </button>
              . I believe in writing{" "}
              <button
                className="cursor-help easter-egg-trigger"
                onMouseEnter={(e) =>
                  handleEasterEggHover("clean, maintainable code", e)
                }
                onMouseLeave={handleEasterEggLeave}
              >
                clean, maintainable code
              </button>{" "}
              and following best practices to ensure scalability and longevity
              of the projects I work on.
            </p>
          </div>
        </motion.div>
      </div>
      {/* Easter Egg Tooltip */}
      {activeEasterEgg && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="fixed z-50 w-64 bg-[#0a0a0a] border border-green-700/30 rounded-lg shadow-lg p-4"
          style={{
            left: `${Math.min(easterEggPosition.x, window.innerWidth - 280)}px`,
            top: `${easterEggPosition.y + 20}px`,
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">
              {easterEggs[activeEasterEgg as keyof typeof easterEggs].icon}
            </span>
            <h4 className="font-medium text-green-300">
              {easterEggs[activeEasterEgg as keyof typeof easterEggs].title}
            </h4>
          </div>
          <p className="text-sm text-muted-foreground">
            {easterEggs[activeEasterEgg as keyof typeof easterEggs].content}
          </p>
        </motion.div>
      )}

      {/* Small hint for users */}
      <div className="absolute bottom-2 right-2 text-xs text-muted-foreground/40 flex items-center gap-1">
        <Info className="h-3 w-3" />
        <span>Hover over highlighted text for more info</span>
      </div>
    </section>
  );
};

export default About;
