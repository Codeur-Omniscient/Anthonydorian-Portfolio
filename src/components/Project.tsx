import { Projects } from "../constant/data";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <section id="project" className="py-20 grid gap-5 ">
      <div className="mb-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-2">
          Featured <span className="text-green-300">Projects.</span>
        </h2>
        <p className="text-muted-foreground text-xl mb-4">
          Here are some of the projects I have worked on. Feel free to check
          them out and explore!
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:grid-rows-5 md:gap-10">
        <div className="md:row-span-2 card-modern">
          <ProjectCard project={Projects[0]} />
        </div>
        <div className="md:row-span-2 md:col-start-2 md:row-start-2 card-modern">
          <ProjectCard project={Projects[1]} />
        </div>
        <div className="md:row-span-2 md:row-start-3 card-modern">
          <ProjectCard project={Projects[2]} />
        </div>
        <div className="md:row-span-2 md:col-start-2 md:row-start-4 card-modern">
          <ProjectCard project={Projects[3]} />
        </div>
      </div>
    </section>
  );
};

export default Project;
