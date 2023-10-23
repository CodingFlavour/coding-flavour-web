interface IImage {
  image: string;
  alt: string;
}

interface ITechStack {
  icon: string;
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

export type { IImage, IProject, ITechStack };
