import { IconType } from "react-icons";

export interface ProjectsType {
  title: string;
  description: string;
  image: string;
  technologies: {
    name: string;
    textColor: string;
    bgColor: string;
    icon: IconType;
  }[];
  link: string;
}
