import { motion } from "motion/react";
import { FileDown } from "lucide-react";
import aboutImg from "../assets/about-img.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="section-title">
        <div>
          <h2>
            About <span className="accent-text">Me</span>
          </h2>
          <p className="subtitle">A story of growth and discovery</p>
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
            <div className="absolute -top-4 -left-4 w-full h-full border border-green-700 rounded-lg"></div>
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
            <div className="absolute bottom-4 right-4 p-2 bg-background border border-green-700 rounded-lg">
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
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="md:col-span-3 space-y-6 text-muted-foreground"
        >
          <h3 className="text-2xl font-bold text-foreground">Anthont Dorian</h3>
          <p className="text-green-300">
            Founding Full-stack Engineer at Dimension
          </p>

          <p className="text-lg">
            Hello! You can call me{" "}
            <span className="text-foreground font-medium">Clarence</span>. I am
            a Software Engineer who works with the React ecosystem and writes to
            teach people how to rebuild and redefine fundamental concepts
            through mental models.
          </p>

          <p className="text-lg">
            I was born in 2001 in Jakarta, Indonesia. When the pandemic hit 5
            years ago, my university was closed for a few weeks, and I started
            to learn web development, especially front-end development, out of
            boredom.
          </p>

          <p className="text-lg">
            As part of my learning journey, I started writing blog articles as a
            way to solidify my knowledge. When I posted them here as
            documentation, I discovered that many people found them valuable.
            Hopefully, it can help you too.
          </p>

          <div className="pt-4">
            <p className="mb-4 text-lg">
              I am also a full-stack engineer, here are my current favorite tech
              stack:
            </p>
            <div className="flex flex-wrap gap-4">
              {["N", "React", "TS", "Tailwind", "Next.js"].map(
                (tech, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground"
                  >
                    {tech === "React" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <circle cx="12" cy="12" r="4"></circle>
                      </svg>
                    ) : tech === "TS" ? (
                      <span className="text-sm font-bold">TS</span>
                    ) : tech === "Tailwind" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                        <path d="M2 17l10 5 10-5"></path>
                        <path d="M2 12l10 5 10-5"></path>
                      </svg>
                    ) : tech === "Next.js" ? (
                      <span className="text-sm font-bold">N</span>
                    ) : (
                      <span className="text-sm font-bold">{tech}</span>
                    )}
                  </div>
                )
              )}
            </div>
          </div>

          <div className="pt-4">
            <a
              href="./Resume-Anthony.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-[#111111] hover:bg-[#222222] transition-colors rounded-md text-white"
            >
              <FileDown className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
