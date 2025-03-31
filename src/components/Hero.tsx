import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="py-32 md:py-40 relative">
      <div className="flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-green-700/30 bg-green-700/5 text-green-300 text-sm mb-8">
            <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
            Fullstack Web Developer
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Hello, world!👋
          </h1>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            I'm <span className="text-green-600">Anthony Dorian</span>
            <span className="inline-block ml-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="#4ADE80"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </h2>

          <p className="text-xl text-muted-foreground mb-8 mx-auto">
            Passionate and creative fullstack developer with a focus on building
            elegant, user-friendly interfaces while enhancing my skills along
            the way.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="#project">
              <Button className="button-modern group px-6 py-6 text-base">
                <span className="relative z-10 flex items-center text-white group-hover:text-black">
                  View my work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </a>

            <a href="#about">
              <button className="flex items-center gap-2 px-6 py-3 bg-[#111111] hover:bg-[#222222] transition-colors rounded-md text-white text-base">
                More about me
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
