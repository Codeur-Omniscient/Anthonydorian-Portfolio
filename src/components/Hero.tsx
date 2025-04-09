import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight, FileDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative py-32 md:py-40">
      <div className="flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl"
        >
          <div className="mb-8 inline-flex items-center rounded-full border border-green-700/30 bg-green-700/5 px-3 py-1 text-sm text-green-300">
            <div className="mr-2 h-2 w-2 rounded-full bg-green-500"></div>
            Fullstack Web Developer
          </div>

          <h1 className="mb-6 text-5xl font-bold md:text-6xl">
            Hello, world!👋
          </h1>

          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            I'm <span className="text-green-600">Anthony Dorian</span>
          </h2>

          <p className="mx-auto mb-8 text-xl text-muted-foreground">
            Passionate and creative fullstack developer with a focus on building
            elegant, user-friendly interfaces while enhancing my skills along
            the way.
          </p>

          <div className="mb-12 flex flex-wrap justify-center gap-4">
            <a href="#project">
              <Button className="button-modern group px-6 py-6 text-base">
                <span className="relative z-10 flex items-center text-white group-hover:text-black">
                  View my work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </a>

            <a
              href="./Resume-Anthony.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-md bg-[#111111] px-6 py-3 text-white transition-colors hover:bg-[#222222]"
              aria-label="Download CV"
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

export default Hero;
