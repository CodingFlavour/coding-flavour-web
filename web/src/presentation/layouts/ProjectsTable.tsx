import IconArrowUpRight from "@public/icons/icon-arrow-up-right.svg";
import Component from "@src/data/Models/Component";
import { IProject } from "@src/data/Models/Project";
import styles from "@src/presentation/styles/layouts/_project-table.module.scss";
import Image from "next/image";
import React from "react";
import Visit from "../components/Visit";

export interface IProjectsTableProps {
  projects: IProject[];
}

const {
  projectsTable,
  projectsTable__wrapper,
  projectsTable__header,
  project__row,
  project__row__counter,
  project__row__name,
  project__row__icon,
  only_desktop,
} = styles;

const ProjectsTable: Component<IProjectsTableProps> = ({ projects, dict }) => {
  return (
    <section className={projectsTable} data-testid={"projects-table"}>
      <div
        className={`${projectsTable__wrapper} column_1`}
        data-testid={"projects-table-wrapper"}
      >
        <h3
          className={projectsTable__header}
          data-testid={"projects-table-header"}
        >
          {dict.ourProjects}
        </h3>
        {projects.map((project, index) => (
          <div
            className={project__row}
            key={`row_${project.projectName.split(" ").join("-")}`}
          >
            <span
              className={project__row__counter}
              data-testid={`projects-table-${index}-counter`}
            >
              {(index + 1).toString().padStart(3, "0")}
            </span>
            <span
              className={project__row__name}
              data-testid={`projects-table-${index}-name`}
            >
              {project.projectName}
            </span>
            <span
              className={only_desktop}
              data-testid={`projects-table-${index}-platform`}
            >
              {project.platform}
            </span>
            <span
              className={only_desktop}
              data-testid={`projects-table-${index}-date`}
            >
              {project.date}
            </span>
            <a href={project.url} data-testid={`projects-table-${index}-link`} target='_blank'>
              <Image
              className={project__row__icon}
                src={IconArrowUpRight}
                alt={`${dict.visit} ${project.url}`}
              />
            </a>
          </div>
        ))}
        <Visit href="/projects" text={dict.seeMore as string} target="_self" />
      </div>
    </section>
  );
};

export default React.memo(ProjectsTable);
