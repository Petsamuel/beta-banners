import {
  FaReact,
  FaAws,
  FaDocker,
  FaFigma,
  FaPython,
  FaNodeJs,
  FaPenNib,
  FaBullhorn,
  FaTrello,
  FaSlack,
  FaYoutube,
} from "react-icons/fa";
import {
  SiAdobe,
  SiTypescript,
  SiTensorflow,
  SiJupyter,
  SiKubernetes,
  SiAdobexd,
  SiSketch,
  SiPostgresql,
  SiNotion,
} from "react-icons/si";
import { IconType } from "react-icons";

export interface Tool {
  name: string;
  icon: IconType;
}

export interface Profession {
  id: string;
  title: string;
  category:
    | "Development"
    | "Design"
    | "Data"
    | "Infrastructure"
    | "Management"
    | "Content";
  icon: IconType;
  tools: Tool[];
  description: string;
}
export const bannerSizes = [
  {
    name: "aspect-facebook-cover",
  }, // Facebook Cover Photo
  { name: "aspect-twitter-cover" }, // Twitter Cover Photo
  { name: "aspect-instagram-square" }, // Instagram Square Post
  { name: "aspect-instagram-portrait" }, // Instagram Portrait Post
  { name: "aspect-instagram-story" }, // Instagram Story
  { name: "aspect-youtube-thumbnail" }, // YouTube Thumbnail
  { name: "aspect-linkedin-cover" }, // LinkedIn Cover Photo
  {
    name: "aspect-pinterest-pin", // Pinterest Pin
  },
];


export const PROFESSIONS: Profession[] = [
  {
    id: "frontend-dev",
    title: "Frontend Developer",
    category: "Development",
    icon: FaReact,
    tools: [
      { name: "React", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Figma", icon: FaFigma },
    ],
    description:
      "Specializes in building user interfaces and web applications.",
  },
  {
    id: "backend-dev",
    title: "Backend Developer",
    category: "Development",
    icon: FaNodeJs,
    tools: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Docker", icon: FaDocker },
    ],
    description: "Specializes in building server-side logic and APIs.",
  },
  {
    id: "ui-designer",
    title: "UI/UX Designer",
    category: "Design",
    icon: SiAdobe,
    tools: [
      { name: "Figma", icon: FaFigma },
      { name: "Adobe XD", icon: SiAdobexd },
      { name: "Sketch", icon: SiSketch },
    ],
    description: "Creates user-centered designs and intuitive interfaces.",
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    category: "Data",
    icon: FaPython,
    tools: [
      { name: "Python", icon: FaPython },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Jupyter", icon: SiJupyter },
    ],
    description: "Analyzes complex data to help make informed decisions.",
  },
  {
    id: "cloud-engineer",
    title: "Cloud Engineer",
    category: "Infrastructure",
    icon: FaAws,
    tools: [
      { name: "AWS", icon: FaAws },
      { name: "Docker", icon: FaDocker },
      { name: "Kubernetes", icon: SiKubernetes },
    ],
    description: "Designs and manages cloud-based systems and services.",
  },
  {
    id: "project-manager",
    title: "Project Manager",
    category: "Management",
    icon: FaTrello,
    tools: [
      { name: "Trello", icon: FaTrello },
      { name: "Slack", icon: FaSlack },
      { name: "Notion", icon: SiNotion },
    ],
    description:
      "Coordinates team efforts to achieve project goals efficiently.",
  },
  {
    id: "content-creator",
    title: "Content Creator",
    category: "Content",
    icon: FaPenNib,
    tools: [
      { name: "YouTube", icon: FaYoutube },
      { name: "Notion", icon: SiNotion },
      { name: "Adobe Premiere", icon: SiAdobe },
    ],
    description: "Develops engaging content for online platforms.",
  },
  {
    id: "marketing-specialist",
    title: "Marketing Specialist",
    category: "Content",
    icon: FaBullhorn,
    tools: [
      { name: "Google Analytics", icon: FaBullhorn },
      { name: "Mailchimp", icon: FaBullhorn },
      { name: "Hootsuite", icon: FaBullhorn },
    ],
    description:
      "Creates and implements marketing strategies for brand growth.",
  },
];

// Helper function to filter professions by category
export const getProfessionsByCategory = (category: Profession["category"]) =>
  PROFESSIONS.filter((prof) => prof.category === category);

// Helper function to get all available tools for a profession
// export const getToolsForProfession = (professionId: string | []) =>
//   PROFESSIONS.find((prof) => prof.id === professionId)?.tools || [];
export const getToolsForProfession = (
  professionId: string | string[]
): Tool[] => {
  if (Array.isArray(professionId)) {
    return professionId
      .map((id) =>
        PROFESSIONS.filter(
          (prof) => prof.id === id || prof.category === id
        ).flatMap((prof) => prof.tools)
      )
      .flat();
  }

  return (
    PROFESSIONS.filter(
      (prof) => prof.id === professionId || prof.category === professionId
    ).flatMap((prof) => prof.tools) || []
  );
};
