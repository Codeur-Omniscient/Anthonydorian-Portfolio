import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import mortgageImg from "../assets/preview.jpg";
import pokedexImg from "../assets/Pokedex-Screenshot.jpg";
import pulseImg from "../assets/Pulse-Screenshot.jpg";
import tutorifyImg from "../assets/Tutorify-Screenshot.jpg";

export const Projects = [
  {
    title: "Mortgage Repayment Calculator",
    description:
      "A web application that helps users calculate their mortgage repayments based on loan amount, interest rate, and term",
    image: mortgageImg,
    technologies: [
      {
        name: "React",
        textColor: "#61DAFB",
        bgColor: "#61dafb4d",
        icon: SiReact,
      },
      {
        name: "Typescript",
        textColor: "#2f74c0",
        bgColor: "#2f74c04d",
        icon: SiTypescript,
      },
      {
        name: "TailwindCss",
        textColor: "#36b7f0",
        bgColor: "#36b7f04d",
        icon: SiTailwindcss,
      },
    ],
    link: "https://mortgagecalculator-codeuromniscient.netlify.app/",
  },
  {
    title: "Pokedex",
    description:
      "A web application that allows users to search and view information about Pokémon, including their types, abilities, and stats.",
    image: pokedexImg,
    technologies: [
      {
        name: "Html",
        textColor: "#dd4b25",
        bgColor: "#dd4b254d",
        icon: SiHtml5,
      },
      {
        name: "Css",
        textColor: "#2d53e5",
        bgColor: "#2d53e54d",
        icon: SiCss3,
      },
      {
        name: "JavaScript",
        textColor: "#efd81d",
        bgColor: "#efd81d4d",
        icon: SiJavascript,
      },
    ],
    link: "https://pokedec-codeuromniscient.netlify.app/",
  },
  {
    title: "Pulse - Headphone Product Landing Page",
    description:
      "A product landing page for Pulse headphones, showcasing features, specifications, and a call to action.",
    image: pulseImg,
    technologies: [
      {
        name: "Html",
        textColor: "#dd4b25",
        bgColor: "#dd4b254d",
        icon: SiHtml5,
      },
      {
        name: "Css",
        textColor: "#2d53e5",
        bgColor: "#2d53e54d",
        icon: SiCss3,
      },
      {
        name: "JavaScript",
        textColor: "#efd81d",
        bgColor: "#efd81d4d",
        icon: SiJavascript,
      },
    ],
    link: "https://headphone-product-codeur-omniscient.netlify.app/",
  },
  {
    title: "Tutorify - Education landing page",
    description:
      "A landing page for an online education platform, showcasing courses, instructors, and testimonials.",
    image: tutorifyImg,
    technologies: [
      {
        name: "Html",
        textColor: "#dd4b25",
        bgColor: "#dd4b254d",
        icon: SiHtml5,
      },
      {
        name: "Css",
        textColor: "#2d53e5",
        bgColor: "#2d53e54d",
        icon: SiCss3,
      },
      {
        name: "JavaScript",
        textColor: "#efd81d",
        bgColor: "#efd81d4d",
        icon: SiJavascript,
      },
    ],
    link: "https://tutorify-elearning.netlify.app/",
  },
];

export const techStack = [
  {
    name: "React",
    textColor: "#61DAFB",
    bgColor: "#61dafb4d",
    icon: SiReact,
  },
  {
    name: "Typescript",
    textColor: "#2f74c0",
    bgColor: "#2f74c04d",
    icon: SiTypescript,
  },
  {
    name: "TailwindCss",
    textColor: "#36b7f0",
    bgColor: "#36b7f04d",
    icon: SiTailwindcss,
  },
  {
    name: "Node.js",
    textColor: "#58a745",
    bgColor: "#58a7454d",
    icon: SiNodedotjs,
  },
  {
    name: "Html",
    textColor: "#dd4b25",
    bgColor: "#dd4b254d",
    icon: SiHtml5,
  },
  {
    name: "Css",
    textColor: "#2d53e5",
    bgColor: "#2d53e54d",
    icon: SiCss3,
  },
  {
    name: "JavaScript",
    textColor: "#efd81d",
    bgColor: "#efd81d4d",
    icon: SiJavascript,
  },
];

export const tools = [
  { name: "Git", color: "#F05032" },
  { name: "GitHub", color: "#181717" },
  { name: "VS Code", color: "#007ACC" },
  { name: "Figma", color: "#F24E1E" },
  { name: "Postman", color: "#FF6C37" },
  { name: "Docker", color: "#2496ED" },
  { name: "Jira", color: "#0052CC" },
  { name: "Notion", color: "#000000" },
];
