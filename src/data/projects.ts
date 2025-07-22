export interface Project {
  img: string;
  name: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    img: "/static/projects/iampitrproject.png",
    name: "iampitrproject",
    description: "A personal website for my side projects and experiments.",
    technologies: ["Next.js", "Tailwind CSS", "Motion"],
    github: "https://github.com/peterpacka/iampitrproject.xyz",
    live: "https://iampitrproject.xyz",
  },
  {
    img: "/static/projects/talktohyro.png",
    name: "talk to hyro",
    description:
      "An AI-powered chatbot for my friend, build using Cloudflare Workers.",
    technologies: ["Next.js", "Tailwind CSS", "Motion"],
    live: "https://talk.xhyrom.dev",
  },
  {
    img: "/static/projects/quotes.png",
    name: "quotes",
    description: "Brightens your mood with a random feel-good quote.",
    technologies: ["Vite", "React", "Tailwind CSS", "Motion"],
    github: "https://github.com/peterpacka/quotes.iampitrproject.xyz",
    live: "https://quotes.iampitrproject.xyz",
  },
];
