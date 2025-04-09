import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { tabs } from "../constant/data";
import { ScrollAnimationWrapper } from "./ScrollAnimationWrapper";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const Stack = () => {
  const [activeTab, setActiveTab] = useState("stack");
  return (
    <section id="skills" className="relative py-20">
      <ScrollAnimationWrapper variant="slide-up">
        <div className="section-title">
          <div>
            <h2>
              Stack & <span className="accent-text">Tools</span>
            </h2>
            <p className="subtitle">
              This is my tech stack to create a fast, responsive, and
              maintainable website that delivers an exceptional user experience.
            </p>
          </div>
        </div>
      </ScrollAnimationWrapper>
      {/* Tab Navigation */}
      <div className="mb-12 flex flex-wrap justify-center border-b border-green-700/20">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-6 py-3 text-sm font-medium transition-colors md:text-base ${
              activeTab === tab.id
                ? "text-green-300"
                : "text-muted-foreground hover:text-green-300/70"
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="min-h-[300px]"
        >
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
          >
            {tabs
              .find((tab) => tab.id === activeTab)
              ?.technologies.map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={item}
                  className="card-modern flex flex-col items-center justify-center p-4 text-center transition-all duration-300 hover:border-green-500/40"
                >
                  <div className="mb-3 text-4xl transition-transform duration-300 hover:scale-110">
                    {tech.icon && <tech.icon color={tech.textColor} />}
                  </div>
                  <h3 className="text-sm font-medium">{tech.name}</h3>
                </motion.div>
              ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Stack;
