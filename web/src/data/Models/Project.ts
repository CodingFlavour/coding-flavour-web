import { StaticImageData } from "next/image";

interface IImage {
  image: StaticImageData;
  alt: string;
}

interface ITechStack {
  icon: StaticImageData;
  alt: string;
}


interface IProject {
  projectId: string;
  projectName: string;
  url: string;
  platform: string;
  date: string;
  images: IImage[];
  paragraphs: string[];
  techStack: ITechStack[];
}

export type { IProject };
