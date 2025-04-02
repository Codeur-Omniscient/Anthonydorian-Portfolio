import {
  SiCss3,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import mortgageImg from "../assets/preview.jpg";
import pokedexImg from "../assets/Pokedex-Screenshot.jpg";
import pulseImg from "../assets/Pulse-Screenshot.jpg";
import tutorifyImg from "../assets/Tutorify-Screenshot.jpg";

// Projects section data
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

// About section data
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
    name: "ExpressJs",
    textColor: "#5c5c5d",
    bgColor: "#5c5c5d4d",
    icon: SiExpress,
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

export const easterEggs = {
  "fullstack developer": {
    title: "Fullstack Developer",
    content:
      "A developer who works with both frontend (client-side) and backend (server-side) technologies, capable of building complete web applications from start to finish.",
    icon: "🛠",
  },
  "UI/UX design": {
    title: "UI/UX Design",
    content:
      "UI (User Interface) focuses on the visual elements users interact with, while UX (User Experience) ensures the overall interaction is intuitive and enjoyable.",
    icon: "🎨",
  },
  "modern web technologies": {
    title: "Modern Web Technologies",
    content:
      "Includes frameworks like React, Astro and Next, along with tools like Vite, TypeScript, and serverless architectures that enable building fast, responsive web applications.",
    icon: "🚀",
  },
  "design and development": {
    title: "Design + Development",
    content:
      "The powerful combination of aesthetic design principles with technical implementation skills, creating solutions that are both beautiful and functional.",
    icon: "⚙️",
  },
  accessible: {
    title: "Web Accessibility",
    content:
      "Ensuring websites can be used by everyone, including people with disabilities, by following WCAG guidelines and implementing features like keyboard navigation and screen reader support.",
    icon: "♿",
  },
  performant: {
    title: "Web Performance",
    content:
      "Optimizing load times, rendering, and runtime execution through techniques like code splitting, lazy loading, and efficient asset delivery to create fast, responsive experiences.",
    icon: "⚡",
  },
  intuitive: {
    title: "Intuitive Design",
    content:
      "Creating interfaces that users can understand and use without explicit instructions, following established patterns and mental models that feel natural and obvious.",
    icon: "💡",
  },
  "clean, maintainable code": {
    title: "Clean Code Practices",
    content:
      "Writing code that is readable, well-structured, and follows principles like DRY (Don't Repeat Yourself) and SOLID, making it easier to maintain and extend over time.",
    icon: "✨",
  },
};

// Formation section data
export const certifications = [
  {
    name: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    date: "2025",
    type: "certification",
    color: "#0A0A23",
  },
  {
    name: "JavaScript Algorithms and Data Structures",
    issuer: "FreeCodeCamp",
    date: "2025",
    type: "certification",
    color: "#0A0A23",
  },
];

export const education = [
  {
    name: "Bachelor of Computer Science",
    institution: "CFI - CIRAS",
    location: "Brazzaville, Republic of Congo",
    date: "2021 - 2024",
    type: "degree",
    description:
      "Specialized in Software Engineering with focus on web technologies and distributed systems.",
  },
  {
    name: "Fullstack Web Development",
    institution: "Akieny - Academy",
    location: "Brazzaville, Republic of Congo",
    date: "2024 - 2025",
    type: "degree",
    description:
      "Intensive program covering frontend and backend development, databases, and deployment.",
  },
  {
    name: "The Ultimate React Course by Jonas Schmedtmann",
    institution: "Udemy",
    date: "2024",
    type: "online",
    description:
      "Master modern React development, including hooks, context API, advanced patterns and Nextjs.",
  },
  {
    name: "Nodejs, Express, MongoDB & More: The Complete Bootcamp 2024",
    institution: "Udemy",
    date: "2024",
    type: "online",
    description:
      "Learn to build RESTful APIs and web applications using Node.js, Express, and MongoDB.",
  },
  {
    name: "Typescript 5 Fundamental",
    institution: "Pluralsight",
    date: "2024",
    type: "online",
    description:
      "Comprehensive course covering TypeScript fundamentals, advanced types, and best practices.",
  },
];

// Skills section data

export const tabs = [
  {
    id: "stack",
    label: "Stack",
    technologies: [
      {
        name: "React",
        textColor: "#61DAFB",
        icon: SiReact,
      },
      {
        name: "Typescript",
        textColor: "#2f74c0",
        icon: SiTypescript,
      },
      {
        name: "TailwindCss",
        textColor: "#36b7f0",
        icon: SiTailwindcss,
      },
      {
        name: "Node.js",
        textColor: "#58a745",
        icon: SiNodedotjs,
      },
      {
        name: "ExpressJs",
        textColor: "#5c5c5d",
        icon: SiExpress,
      },
      {
        name: "Html",
        textColor: "#dd4b25",
        icon: SiHtml5,
      },
      {
        name: "Css",
        textColor: "#2d53e5",
        icon: SiCss3,
      },
      {
        name: "JavaScript",
        textColor: "#efd81d",
        icon: SiJavascript,
      },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    technologies: [
      {
        name: "MongoDB",
        textColor: "#47A248",
        icon: SiMongodb,
      },
      {
        name: "Supabase",
        textColor: "#36ba7f",
        icon: SiSupabase,
      },
      { name: "MySQL", textColor: "#4479A1", icon: SiMysql },
      { name: "PostgresSQL", textColor: "#31638c", icon: SiPostgresql },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    technologies: [
      { name: "Git", textColor: "#f94d27", icon: SiGit },
      { name: "GitHub", color: "#000000", icon: SiGithub },
      {
        name: "Netlify",
        textColor: "#42cdcb",
        icon: SiNetlify,
      },
      { name: "Figma", textColor: "#a259ff", icon: SiFigma },
      {
        name: "Postman",
        textColor: "#ff6c36",
        icon: SiPostman,
      },
      { name: "Jira", textColor: "#2684ff", icon: SiJira },
    ],
  },
];
