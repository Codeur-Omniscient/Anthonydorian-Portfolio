import { Projects } from "../constant/data";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <section
      id="project"
      className="py-20 grid gap-5 grid-cols-1 md:grid-cols-2 md:grid-rows-5 md:gap-10"
    >
      <div className="mb-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-2">
          All Creative <span className="text-green-300">Works.</span>
        </h2>
        <p className="text-muted-foreground text-xl mb-4">
          Here's some of my projects that I have worked on.
        </p>
      </div>
      <div className="md:row-span-2 card-modern">
        <ProjectCard project={Projects[0]} />
      </div>
      <div className="md:row-span-2 card-modern">
        <ProjectCard project={Projects[1]} />
      </div>
      <div className="md:row-span-2 md:col-start-2 md:row-start-3 card-modern">
        <ProjectCard project={Projects[2]} />
      </div>
      <div className="md:row-span-2 md:row-start-4 card-modern">
        <ProjectCard project={Projects[3]} />
      </div>
    </section>
  );
};

export default Project;
