import styles from "@/presentation/styles/layouts/_project-information.module.scss";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface IImage {
  image: StaticImageData;
  alt: string;
}

interface ITechStack {
  icon: StaticImageData;
  alt: string;
}

export interface IProjectInformationProps {
  projectName: string;
  platform: string;
  date: string;
  images: IImage[];
  paragraphs: string[];
  techStack: ITechStack[];
}

const {
  projectInformation,
  projectInformation__name,
  projectInformation__name__header,
  projectInformation__firstImage,
  projectInformation__firstParagraph,
  projectInformation__secondImage,
  projectInformation__secondParagraph,
  projectInformation__thirdImage,
  projectInformation__thirdParagraph,
  projectInformation__fourImage,
  projectInformation__fourParagraph,
  projectInformation__techStack,
} = styles;

const ProjectInformation: React.FC<IProjectInformationProps> = ({
  projectName,
  date,
  platform,
  images,
  paragraphs,
  techStack,
}) => {
  return (
    <div className={projectInformation} data-testid={"project-information"}>
      <div className={projectInformation__name}>
        <h1
          className={projectInformation__name__header}
          data-testid={"project-information-name"}
        >
          {projectName}
        </h1>
        <span data-testid={"project-information-date"}>
          {platform}, {date}
        </span>
      </div>
      <Image
        className={projectInformation__firstImage}
        src={images[0].image}
        alt={images[0].alt}
        data-testid={"project-information-image-1"}
      />
      <span
        className={projectInformation__firstParagraph}
        data-testid={"project-information-paragraph-1"}
      >
        {paragraphs[0]}
      </span>
      <Image
        className={projectInformation__secondImage}
        src={images[1].image}
        alt={images[1].alt}
        data-testid={"project-information-image-2"}
      />
      <span
        className={projectInformation__secondParagraph}
        data-testid={"project-information-paragraph-2"}
      >
        {paragraphs[1]}
      </span>
      <Image
        className={projectInformation__thirdImage}
        src={images[2].image}
        alt={images[2].alt}
        data-testid={"project-information-image-3"}
      />
      <span
        className={projectInformation__thirdParagraph}
        data-testid={"project-information-paragraph-3"}
      >
        {paragraphs[2]}
      </span>
      <Image
        className={projectInformation__fourImage}
        src={images[3].image}
        alt={images[3].alt}
        data-testid={"project-information-image-4"}
      />
      <span
        className={projectInformation__fourParagraph}
        data-testid={"project-information-paragraph-4"}
      >
        {paragraphs[3]}
      </span>
      <div
        className={projectInformation__techStack}
        data-testid={"project-information-tech-stack"}
      >
        {techStack.map((tech) => (
          <Image src={tech.icon} alt={tech.alt} key={tech.alt} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(ProjectInformation);
