import { ExternalLink } from "lucide-react";
import { ProjectsType } from "../types";

interface ProjectCardProps {
  project: ProjectsType;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="card-modern">
      <div className="flex items-center">
        <img
          src={project.image}
          alt="Project banner"
          className="h-60 object-cover object-center"
        />
      </div>
      <div className="flex flex-col gap-3 px-4 pb-2 pt-1">
        <div className="flex items-center justify-between text-lg font-semibold">
          <h3>{project.title}</h3>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View project"
          >
            <ExternalLink className="h-5 w-5 cursor-pointer text-inherit" />
          </a>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <div
              key={tech.name + i}
              className="flex items-center gap-2 rounded-md px-3 py-1 text-sm font-semibold"
              style={{ backgroundColor: tech.bgColor, color: tech.textColor }}
            >
              <span>{tech.icon && <tech.icon className="size-4" />}</span>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
        <div className="h-[1px] bg-gray-600" />
        <p className="text-gray-400">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
