import React from "react";
import ImagePreviewThree from "@public/images/image-preview-3.jpg";
import Image from "next/image";
import Visit from "./Visit";
import styles from "@src/presentation/styles/components/_project-card.module.scss";

const {
  projectCard,
  projectCard__image,
  projectCard__name,
  projectCard__date,
} = styles;

export interface IProjectCardProps {
  projectId: string;
  projectName: string;
  platform: string;
  date: string;
  visitText: string;
}

const ProjectCard: React.FC<IProjectCardProps> = ({
  projectId,
  projectName,
  date,
  platform,
  visitText
}) => {
  return (
    <div className={projectCard} data-testid={"project-card"}>
      <Image
        className={projectCard__image}
        src={ImagePreviewThree}
        alt="Preview for the project"
      />
      <h2 className={projectCard__name} data-testid={"project-card-name"}>
        {projectName}
      </h2>
      <span
        className={projectCard__date}
        data-testid={"project-card-platform-date"}
      >
        {platform}, {date}
      </span>
      <Visit
        href={`/project/${projectId}`}
        text={visitText}
        size={"small"}
        target="_self"
      />
    </div>
  );
};

export default React.memo(ProjectCard);
