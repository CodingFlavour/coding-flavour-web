import React from "react";
import styles from "@src/presentation/styles/layouts/_project-cta.module.scss";
import ImagePreviewThree from "@public/images/image-preview-3.jpg";
import ImagePreviewFive from "@public/images/image-preview-5.png";
import Image from "next/image";
import Visit from "../components/Visit";
import Component from "@src/data/Models/Component";

const {
  projectCTA,
  projectCTA__images,
  projectCTA__images__static,
  projectCTA__images__dynamic,
  projectCTA__information,
  projectCTA__information__text,
} = styles;

const ProjectCTA: Component = ({
  dict
}) => {
  return (
    <section className={`${projectCTA} column_1`} data-testid={"project-cta"}>
      <div className={projectCTA__images} data-testid={"project-cta-images"}>
        <Image
          className={projectCTA__images__dynamic}
          src={ImagePreviewFive}
         alt="Work in progress"
        />
        <Image
          className={projectCTA__images__static}
          src={ImagePreviewThree}
         alt="Work in progress"
        />
        <Image
          className={projectCTA__images__dynamic}
          src={ImagePreviewFive}
         alt="Work in progress"
        />
      </div>
      <div
        className={projectCTA__information}
        data-testid={"project-cta-information"}
      >
        <span className={projectCTA__information__text}>
          {dict.projectCTA}
        </span>
        <Visit href={"/projects"} text={dict.ourProjects as string} target="_self" />
      </div>
    </section>
  );
};

export default ProjectCTA;
