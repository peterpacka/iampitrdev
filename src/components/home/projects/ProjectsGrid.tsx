import { projects } from "@/data/projects";
import { ProjectsGridItem } from "./ProjectsGridItem";

export const ProjectsGrid = () => {
  return (
    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <li key={project.name}>
          <ProjectsGridItem project={project} />
        </li>
      ))}
    </ul>
  );
};
