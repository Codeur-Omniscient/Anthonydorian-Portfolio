import { ExternalLink } from "lucide-react";
import { ProjectsType } from "../types";

interface ProjectCardProps {
  project: ProjectsType;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <>
      <div className="flex items-center">
        <img
          src={project.image}
          alt="Project banner"
          className="object-cover object-center h-60"
        />
      </div>
      <div className="flex flex-col gap-3 px-4 pb-2 pt-1">
        <div className="flex items-center justify-between text-lg font-semibold">
          <h3>{project.title}</h3>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-5 w-5 text-inherit cursor-pointer" />
          </a>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <div
              key={tech.name + i}
              className="flex items-center gap-2 px-3 py-1 text-sm rounded-md font-semibold"
              style={{ backgroundColor: tech.bgColor, color: tech.textColor }}
            >
              <span>{tech.icon && <tech.icon className="size-4" />}</span>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
        <div className="h-[1px] bg-gray-600" />
        <p>{project.description}</p>
      </div>
    </>
  );
};

export default ProjectCard;
