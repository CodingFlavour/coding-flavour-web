import React from "react";
import styles from "@/presentation/styles/layouts/_project-cta.module.scss";
import ImagePreviewThree from "@/presentation/assets/images/image-preview-3.jpg";
import ImagePreviewFive from "@/presentation/assets/images/image-preview-5.png";
import Image from "next/image";
import Visit from "../components/Visit";

const {
  projectCTA,
  projectCTA__images,
  projectCTA__images__static,
  projectCTA__images__dynamic,
  projectCTA__information,
  projectCTA__information__text,
} = styles;

const ProjectCTA = () => {
  return (
    <section className={projectCTA} data-testid={"project-cta"}>
      <div className={projectCTA__images} data-testid={"project-cta-images"}>
        <Image
          className={projectCTA__images__dynamic}
          src={ImagePreviewFive}
          alt=""
        />
        <Image
          className={projectCTA__images__static}
          src={ImagePreviewThree}
          alt=""
        />
        <Image
          className={projectCTA__images__dynamic}
          src={ImagePreviewFive}
          alt=""
        />
      </div>
      <div
        className={projectCTA__information}
        data-testid={"project-cta-information"}
      >
        <span className={projectCTA__information__text}>
          Lorem ipsum dolor sit amet consectetur. Tellus in ultricies lobortis
          nunc diam. Ultrices eget fringilla id et tortor at. Nunc etiam
          scelerisque fermentum eu mus. Odio scelerisque felis aenean amet vel
          morbi platea vitae. Ultrices eu enim nec pellentesque a vel cras arcu
          nec.
        </span>
        <Visit href={"/projects"} text={"Our Projects"} target="_self" />
      </div>
    </section>
  );
};

export default ProjectCTA;
