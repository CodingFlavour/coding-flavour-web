import { IArticle, IArticleCard } from "@src/data/Models/Article";
import { Dict, DictData, articles } from "@src/data/locales/dict/dict";

const FindArticle = {
  findArticlesPreview: async (dict: Dict) => {
    const allArticles = Object.keys(dict).filter(
      (dictName) => articles.names.find((articleId) => dictName === articleId)
    );
    const promises = allArticles.map((articleId) => dict[articleId]);
    const articlesPreview = await Promise.all(promises);
    return articlesPreview;
  },
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
      articleId,
      author: dict.author as string,
      date: dict.date as string,
      image: dict.image as string,
      imageAlt: dict.imageAlt as string,
      paragraphs: dict.paragraphs as string[],
      title: dict.title as string,
    };

    return article;
  },
  transformDictToArticleCard: (dict: DictData) => {
    const article: IArticleCard = {
      articleId: dict.articleId as string,
      date: dict.date as string,
      image: dict.image as string,
      imageAlt: dict.imageAlt as string,
      title: dict.title as string,
      description: dict.description as string
    };

    return article;
  },
};

export const {
  findArticlesPreview,
  findArticleInDict,
  transformDictToArticle,
  transformDictToArticleCard,
} = FindArticle;
