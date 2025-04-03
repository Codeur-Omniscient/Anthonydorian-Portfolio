import { motion } from "motion/react";
import { Mail, FileText, MapPin, BriefcaseBusiness } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";

const Contact = () => {
  // Contact methods data
  const contactMethods = [
    {
      id: "email",
      title: "Email",
      value: "anthonymedin963@gmail.com",
      icon: <Mail className="h-5 w-5" />,
      link: "mailto:anthonymedin963@gmail.com",
    },
    {
      id: "available",
      title: "Available",
      value: "Freelance | Remote",
      icon: <BriefcaseBusiness className="h-5 w-5" />,
    },
    {
      id: "location",
      title: "Location",
      value: "Brazzaville, Republic of Congo",
      icon: <MapPin className="h-5 w-5" />,
      link: "https://maps.google.com/?q=Brazzaville,+Republic of Congo",
    },
  ];

  // Social links data
  const socialLinks = [
    {
      id: "linkedin",
      title: "LinkedIn",
      icon: <SiLinkedin className="h-5 w-5 text-green-300" />,
      link: "https://www.linkedin.com/in/anthony-mban/",
    },
    {
      id: "github",
      title: "GitHub",
      icon: <SiGithub className="h-5 w-5 text-green-300" />,
      link: "https://github.com/Codeur-Omniscient",
    },
    {
      id: "twitter",
      title: "Twitter",
      icon: <FaTwitter className="h-5 w-5 text-green-300" />,
      link: "https://x.com/mark_anthony242?s=21",
    },
    {
      id: "resume",
      title: "Resume",
      icon: <FileText className="h-5 w-5 text-green-300" />,
      link: "./Resume-Anthony.pdf",
    },
  ];

  return (
    <section id="contact" className="relative py-20">
      <div className="container relative z-10 mx-auto max-w-5xl px-2 md:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Get in <span className="text-green-300">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Have a project in mind or just want to say hello? I'd love to hear
            from you.
          </p>
        </motion.div>

        <div className="grid items-start gap-8 md:grid-cols-2">
          {/* Left column: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border bg-black/20 p-4 shadow-md backdrop-blur-sm md:p-6 lg:p-8"
          >
            <h3 className="mb-6 text-2xl font-semibold">Contact Information</h3>

            <div className="space-y-6">
              {contactMethods.map((method) => (
                <div key={method.id} className="group flex gap-4">
                  <div className="rounded-lg bg-green-700/10 p-3 text-green-300 transition-colors group-hover:bg-green-700/20">
                    {method.icon}
                  </div>

                  <div className="flex-1">
                    <h4 className="mb-1 text-xs font-medium text-muted-foreground md:text-sm">
                      {method.title}
                    </h4>
                    <div className="flex items-center justify-between text-sm md:text-base">
                      <a
                        href={method.link}
                        target={method.id === "location" ? "_blank" : undefined}
                        rel={
                          method.id === "location"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-foreground transition-colors hover:text-green-300"
                      >
                        {method.value}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-gray-600/10 pt-8">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-400"></span>
                <span className="text-sm font-medium text-green-300">
                  Available for new projects
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                I'm currently taking on new projects and would love to discuss
                how I can help bring your ideas to life.
              </p>
            </div>
          </motion.div>

          {/* Right column: Connect & Social */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Connect card */}
            <div className="rounded-xl border bg-black/20 p-4 shadow-md backdrop-blur-sm md:p-6 lg:p-8">
              <h3 className="mb-6 text-2xl font-semibold">Let's Connect</h3>
              <p className="mb-8 text-muted-foreground">
                Whether you have a question about my work, want to discuss a
                potential project, or just want to say hi, I'm always open to
                connecting.
              </p>

              <div className="mb-8 grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-md bg-[#111111] px-6 py-3 text-white transition-colors hover:bg-[#222222]"
                    aria-label={social.title}
                  >
                    {social.icon}
                    <span className="text-sm md:text-base">{social.title}</span>
                  </a>
                ))}
              </div>

              <div className="rounded-lg border p-4">
                <p className="text-sm italic text-muted-foreground">
                  "I believe in creating meaningful digital experiences that not
                  only look great but also solve real problems for users."
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <a
            href="mailto:anthonymedin963@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg bg-green-700 px-6 py-3 text-white transition-colors hover:bg-green-600"
          >
            <Mail className="h-4 w-4" />
            Send me an email
          </a>
          <p className="mt-4 text-sm text-muted-foreground">
            I'll get back to you as soon as possible.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
