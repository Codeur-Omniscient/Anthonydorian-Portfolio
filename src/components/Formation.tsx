import { motion } from "motion/react";
import { Award, GraduationCap, BookOpen } from "lucide-react";
import { certifications, education } from "../constant/data";

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
    <section id="formation" className="py-20 relative">
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

      <div className="grid md:grid-cols-2 gap-12">
        {/* Education */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xl font-semibold mb-8 text-foreground flex items-center"
          >
            <GraduationCap className="h-5 w-5 mr-2 text-green-300" />
            <div className="h-6 w-1 bg-green-700 mr-3 rounded-full"></div>
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
                  className="p-4 rounded-lg bg-[#111111] border border-green-700/20 hover:border-green-500/40 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-700/20 flex items-center justify-center text-green-300">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                      <h5 className="font-medium text-foreground">
                        {edu.name}
                      </h5>
                      <p className="text-sm text-green-300">
                        {edu.institution}
                      </p>
                      <p className="text-xs text-muted-foreground mb-2">
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
            className="text-xl font-semibold my-8 text-foreground flex items-center"
          >
            <BookOpen className="h-5 w-5 mr-2 text-green-300" />
            <div className="h-6 w-1 bg-green-700 mr-3 rounded-full"></div>
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
                  className="p-4 rounded-lg bg-[#111111] border border-green-700/20 hover:border-green-500/40 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-700/20 flex items-center justify-center text-green-300">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <div>
                      <h5 className="font-medium text-foreground">
                        {edu.name}
                      </h5>
                      <p className="text-sm text-green-300">
                        {edu.institution}
                      </p>
                      <p className="text-xs text-muted-foreground mb-2">
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
            className="text-xl font-semibold mb-8 text-foreground flex items-center"
          >
            <Award className="h-5 w-5 mr-2 text-green-300" />
            <div className="h-6 w-1 bg-green-700 mr-3 rounded-full"></div>
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
                className="p-4 rounded-lg bg-[#111111] border border-green-700/20 hover:border-green-500/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs"
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
