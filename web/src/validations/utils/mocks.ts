import { IArticle, IArticleCard } from "@/data/Article";
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
  date: "07/2023",
  platform: "Web",
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
    `${Array.from(Array(2)).map(
      () =>
        "In this article, we cover how to improve the legibility of your Sass files by injecting all of the common @use via WebPack and having them available in all your files with their alias"
    )}`,
  ],
  techStack: DEFAULT_TECH_STACK,
};

const DEFAULT_ARTICLE_MOCK: IArticle = {
  articleId: "sass-prepend-via-webpack",
  image: ImagePreviewTwo,
  imageAlt: "Article about Sass",
  date: "09/2023",
  title: "Injecting Sass @use via webpack",
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
    `${Array.from(Array(2)).map(
      () =>
        "In this article, we cover how to improve the legibility of your Sass files by injecting all of the common @use via WebPack and having them available in all your files with their alias"
    )}`,
  ],
  author: "Daniel Sánchez",
};

const DEFAULT_ARTICLE_CARD_MOCK: IArticleCard = {
  image: ImagePreview,
  imageAlt: "Article about Sass",
  date: "09/2023",
  title: "Injecting Sass @use via webpack",
  description:
    "In this article, we cover how to improve the legibility of your Sass files by injecting all of the common @use via WebPack and having them available in all your files with their alias",
  articleId: "sass-prepend-via-webpack",
};

export {
  DEFAULT_PROJECT_MOCK,
  DEFAULT_ARTICLE_MOCK,
  DEFAULT_ARTICLE_CARD_MOCK,
};
