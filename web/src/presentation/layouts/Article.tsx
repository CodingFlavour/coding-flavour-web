'use client';

import styles from "@/presentation/styles/layouts/_article.module.scss";
import React from "react";
import ArticleInformation, {
  IArticleInformation,
} from "../components/ArticleInformation";
import ShareStack from "../components/ShareStack";

interface IArticle extends IArticleInformation {
  articleId: string;
}

export interface IArticleProps {
  article: IArticle;
  // sendEmail: () => void;
}

const { articleWrapper } = styles;

const Article: React.FC<IArticleProps> = ({ article }) => {
  const sendEmail = () => {};
  return (
    <section className={articleWrapper} data-testid={"article"}>
      <ArticleInformation
        date={article.date}
        image={article.image}
        imageAlt={article.imageAlt}
        paragraphs={article.paragraphs}
        title={article.title}
        author={article.author}
      />
      <ShareStack articleId={article.articleId} sendEmail={sendEmail} />
    </section>
  );
};

export default Article;
