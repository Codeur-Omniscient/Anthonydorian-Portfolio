import { Projects } from "../constant/data";
import ProjectCard from "./ProjectCard";
import {
  ScrollAnimationWrapper,
  StaggerContainer,
} from "./ScrollAnimationWrapper";

const Project = () => {
  return (
    <section id="project" className="grid gap-5 py-20">
      <ScrollAnimationWrapper variant="slide-up">
        <div className="mb-8">
          <h2 className="mb-2 text-4xl font-bold md:text-5xl">
            Featured <span className="text-green-300">Projects.</span>
          </h2>
          <p className="mb-4 text-xl text-muted-foreground">
            Here are some of the projects I have worked on. Feel free to check
            them out and explore!
          </p>
        </div>
      </ScrollAnimationWrapper>
      <StaggerContainer
        variant="fade"
        staggerDelay={0.15}
        delay={0.2}
        className="grid grid-cols-1 gap-10 md:grid-cols-2"
      >
        {Projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </StaggerContainer>
    </section>
  );
};

export default Project;
