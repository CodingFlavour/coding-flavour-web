import React from "react";
import styles from "@/presentation/styles/layouts/_project-list.module.scss";
import ProjectCard from "../components/ProjectCard";

const { projectList, projectList__projects, projectList__header } = styles;

const ProjectList = () => {
  const projects = [
    {
      projectId: "tell-us",
      projectName: "Tell Us",
      date: "07/2023",
      platform: "Web",
      url: "https://tell-us.com",
    },
    {
      projectId: "portfolios",
      projectName: "Portfolio",
      date: "08/2023",
      platform: "Desktop",
      url: "https://coding-flavour/portfolios",
    },
    {
      projectId: "coding-flavour",
      projectName: "Coding Flavour",
      date: "09/2023",
      platform: "Server",
      url: "https://coding-flavour.com",
    },
    {
      projectId: "another-project",
      projectName: "Another project",
      date: "10/2023",
      platform: "Web",
      url: "https://another-project.com",
    },
  ];

  return (
    <section className={projectList} data-testid={"project-list"}>
      <h1 className={projectList__header} data-testid={"project-list-header"}>
        Projects
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
