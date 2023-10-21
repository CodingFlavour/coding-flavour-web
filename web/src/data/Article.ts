import { StaticImageData } from "next/image";

interface IArticleCommonParams {
  articleId: string;
  image: StaticImageData;
  imageAlt: string;
  date: string;
  title: string;
}

interface IArticle extends IArticleCommonParams {
  paragraphs: string[];
  author: string;
}

interface IArticleCard extends IArticleCommonParams {
  description: string;
}

export type { IArticle, IArticleCard };
