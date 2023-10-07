import { IArticle } from "@/data/Models/Article";
import { Dict, DictData } from "@/data/locales/dict/dict";

const FindArticle = {
  findArticleInDict: async (id: string, dict: Dict) => {
    const parseId = id.replaceAll("-", "");

    const articleIndex = Object.keys(dict).find(
      (dictName) => dictName === parseId
    );
    if (articleIndex) {
      const article = await dict[articleIndex];
      return article;
    }
  },
  // Here we can do an assert or smth to erase casting
  transformDictToArticle: (dict: DictData, articleId: string) => {
    const article: IArticle = {
      articleId: articleId as string,
      author: dict.author as string,
      date: dict.date as string,
      image: dict.image as string,
      imageAlt: dict.imageAlt as string,
      paragraphs: dict.paragraphs as string[],
      title: dict.title as string,
    };

    return article;
  },
};

export const { findArticleInDict, transformDictToArticle } = FindArticle;
