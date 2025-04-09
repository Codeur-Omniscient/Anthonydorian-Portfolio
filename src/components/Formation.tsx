import { motion } from "motion/react";
import { Award, GraduationCap, BookOpen } from "lucide-react";
import { certifications, education } from "../constant/data";
import { ScrollAnimationWrapper } from "./ScrollAnimationWrapper";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
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

export default function Formation() {
  return (
    <section id="learning" className="relative py-20">
      <ScrollAnimationWrapper variant="slide-up">
        <div className="section-title">
          <div>
            <h2>
              My <span className="accent-text">Training</span>
            </h2>
            <p className="subtitle">
              Education, certifications, and continuous learning
            </p>
          </div>
        </div>
      </ScrollAnimationWrapper>

      <div className="grid gap-12 md:grid-cols-2">
        {/* Education */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex items-center text-xl font-semibold text-foreground"
          >
            <GraduationCap className="mr-2 h-5 w-5 text-green-300" />
            <div className="mr-3 h-6 w-1 rounded-full bg-green-700"></div>
            Education
          </motion.h3>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {education
              .filter((edu) => edu.type === "degree")
              .map((edu, index) => (
                <motion.div
                  key={edu.name + index}
                  variants={item}
                  className="rounded-lg border border-green-700/20 bg-[#111111] p-4 transition-colors hover:border-green-500/40"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-700/20 text-green-300">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                      <h5 className="font-medium text-foreground">
                        {edu.name}
                      </h5>
                      <p className="text-sm text-green-300">
                        {edu.institution}
                      </p>
                      <p className="mb-2 text-xs text-muted-foreground">
                        {edu.location && `${edu.location} • `}
                        {edu.date}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="my-8 flex items-center text-xl font-semibold text-foreground"
          >
            <BookOpen className="mr-2 h-5 w-5 text-green-300" />
            <div className="mr-3 h-6 w-1 rounded-full bg-green-700"></div>
            Online Courses
          </motion.h3>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {education
              .filter((edu) => edu.type === "online")
              .map((edu, index) => (
                <motion.div
                  key={edu.name + index}
                  variants={item}
                  className="rounded-lg border border-green-700/20 bg-[#111111] p-4 transition-colors hover:border-green-500/40"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-700/20 text-green-300">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <div>
                      <h5 className="font-medium text-foreground">
                        {edu.name}
                      </h5>
                      <p className="text-sm text-green-300">
                        {edu.institution}
                      </p>
                      <p className="mb-2 text-xs text-muted-foreground">
                        {edu.date}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </div>

        {/* Certifications */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex items-center text-xl font-semibold text-foreground"
          >
            <Award className="mr-2 h-5 w-5 text-green-300" />
            <div className="mr-3 h-6 w-1 rounded-full bg-green-700"></div>
            Certifications
          </motion.h3>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name + index}
                variants={item}
                className="rounded-lg border border-green-700/20 bg-[#111111] p-4 transition-colors hover:border-green-500/40"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full text-xs text-white"
                    style={{ backgroundColor: cert.color }}
                  >
                    FCC
                  </div>
                  <div>
                    <h5 className="font-medium text-foreground">{cert.name}</h5>
                    <p className="text-xs text-muted-foreground">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
