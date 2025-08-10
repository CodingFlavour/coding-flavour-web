interface IArticleCommonParams {
  articleId: string;
  image: string;
  imageAlt: string;
  date: string;
  title: string;
}

enum ParagraphType {
  Title = "title",
  Text = "text",
  Code = "code",
}

interface Paragraph {
  type: ParagraphType;
  content: string;
}

interface IArticle extends IArticleCommonParams {
  paragraphs: Paragraph[];
  author: string;
}

interface IArticleCard extends IArticleCommonParams {
  description: string;
}

export type { Paragraph, IArticle, IArticleCard };
export { ParagraphType };