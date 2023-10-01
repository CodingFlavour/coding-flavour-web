import { IProject } from "@/data/Project";
import IconJS from "@/presentation/assets/icons/icon-js.svg";
import IconReact from "@/presentation/assets/icons/icon-react.svg";
import IconRedux from "@/presentation/assets/icons/icon-redux.svg";
import IconSass from "@/presentation/assets/icons/icon-sass.svg";
import ImagePreviewTwo from "@/presentation/assets/images/image-preview-2.png";
import ImagePreviewThree from "@/presentation/assets/images/image-preview-3.jpg";
import ImagePreviewFour from "@/presentation/assets/images/image-preview-4.png";
import ImagePreview from "@/presentation/assets/images/image-preview.jpg";

const DEFAULT_TECH_STACK = [
  {
    icon: IconReact,
    alt: "React",
  },
  {
    icon: IconRedux,
    alt: "Redux",
  },
  {
    icon: IconJS,
    alt: "JavaScript",
  },
  {
    icon: IconSass,
    alt: "Sass",
  },
];

const DEFAULT_PROJECT_MOCK: IProject = {
  date: "mock-date",
  platform: "mock-platform",
  projectId: "mock-project-id",
  projectName: "mock-project-name",
  url: "mock-url",
  images: [
    {
      image: ImagePreview,
      alt: "Image",
    },
    {
      image: ImagePreviewTwo,
      alt: "Image",
    },
    {
      image: ImagePreviewThree,
      alt: "Image",
    },
    {
      image: ImagePreviewFour,
      alt: "Image",
    },
  ],
  paragraphs: [
    `${Array.from(Array(10)).map(
      () =>
        "In this article, we cover how to improve the legibility of your Sass files by injecting all of the common @use via WebPack and having them available in all your files with their alias"
    )}`,
    `${Array.from(Array(3)).map(
      () =>
        "In this article, we cover how to improve the legibility of your Sass files by injecting all of the common @use via WebPack and having them available in all your files with their alias"
    )}`,
    `${Array.from(Array(6)).map(
      () =>
        "In this article, we cover how to improve the legibility of your Sass files by injecting all of the common @use via WebPack and having them available in all your files with their alias"
    )}`,
    `${Array.from(Array(6)).map(
      () =>
        "In this article, we cover how to improve the legibility of your Sass files by injecting all of the common @use via WebPack and having them available in all your files with their alias"
    )}`,
  ],
  techStack: DEFAULT_TECH_STACK,
};

export { DEFAULT_PROJECT_MOCK };
