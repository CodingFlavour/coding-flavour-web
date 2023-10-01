import { StaticImageData } from "next/image";

interface IArticleCard {
  image: StaticImageData;
  imageAlt: string;
  date: string;
  title: string;
  description: string;
  articleId: string;
}

export type { IArticleCard };
