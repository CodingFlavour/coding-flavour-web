import React from "react";
import styles from "@/presentation/styles/layouts/_project-list.module.scss";
import ProjectCard from "../components/ProjectCard";
import { IProject } from "@/data/Models/Project";

export interface IProjectListProps {
  projects: IProject[];
  title: string;
}

const { projectList, projectList__projects, projectList__header } = styles;

const ProjectList: React.FC<IProjectListProps> = ({ projects, title }) => {
  return (
    <section className={projectList} data-testid={"project-list"}>
      <h1 className={projectList__header} data-testid={"project-list-header"}>
        {title}
      </h1>
      <div
        className={projectList__projects}
        data-testid={"project-list-projects"}
      >
        {projects.map((project) => (
          <ProjectCard
            projectId={project.projectId}
            projectName={project.projectName}
            date={project.date}
            platform={project.platform}
            key={project.projectId}
          />
        ))}
      </div>
    </section>
  );
};

export default React.memo(ProjectList);
