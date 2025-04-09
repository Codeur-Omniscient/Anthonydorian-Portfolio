import { motion } from "motion/react";
import aboutImg from "../assets/about-img.webp";
import { useState } from "react";
import { easterEggs } from "../constant/data";
import { ScrollAnimationWrapper } from "./ScrollAnimationWrapper";

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
    <section id="about" className="relative py-20">
      <ScrollAnimationWrapper variant="slide-up">
        <div className="section-title">
          <div>
            <h2>
              About <span className="accent-text">Me</span>
            </h2>
          </div>
        </div>
      </ScrollAnimationWrapper>

      <div className="grid items-start gap-12 md:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -50, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative md:col-span-2"
        >
          <div className="relative">
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
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-6 text-muted-foreground md:col-span-3"
        >
          <div className="interactive-text text-lg">
            <p>
              I'm a passionate{" "}
              <button
                className="easter-egg-trigger cursor-help"
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
                className="easter-egg-trigger cursor-help"
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
                className="easter-egg-trigger cursor-help"
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
                className="easter-egg-trigger cursor-help"
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
                className="easter-egg-trigger cursor-help"
                onMouseEnter={(e) => handleEasterEggHover("accessible", e)}
                onMouseLeave={handleEasterEggLeave}
              >
                accessible
              </button>
              ,{" "}
              <button
                className="easter-egg-trigger cursor-help"
                onMouseEnter={(e) => handleEasterEggHover("performant", e)}
                onMouseLeave={handleEasterEggLeave}
              >
                performant
              </button>
              , and{" "}
              <button
                className="easter-egg-trigger cursor-help"
                onMouseEnter={(e) => handleEasterEggHover("intuitive", e)}
                onMouseLeave={handleEasterEggLeave}
              >
                intuitive
              </button>
              . I believe in writing{" "}
              <button
                className="easter-egg-trigger cursor-help"
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
          className="fixed z-50 w-64 rounded-lg border border-green-700/30 bg-[#0a0a0a] p-4 shadow-lg"
          style={{
            left: `${Math.min(easterEggPosition.x, window.innerWidth - 280)}px`,
            top: `${easterEggPosition.y + 20}px`,
          }}
        >
          <div className="mb-2 flex items-center gap-2">
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
    </section>
  );
};

export default About;
