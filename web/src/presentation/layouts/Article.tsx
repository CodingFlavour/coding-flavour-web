import { IArticle } from "@src/data/Models/Article";
import styles from "@/presentation/styles/layouts/_article.module.scss";
import React from "react";
import ArticleInformation from "../components/ArticleInformation";
import ShareStack from "../components/ShareStack";
import Component from "@src/data/Models/Component";

const { articleWrapper } = styles;

interface IArticleProps {
  article: IArticle;
}

const Article: Component<IArticleProps> = ({ article, dict }) => {
  return (
    <section className={articleWrapper} data-testid={"article"}>
      <ArticleInformation
        articleId={article.articleId}
        date={article.date}
        image={article.image}
        imageAlt={article.imageAlt}
        paragraphs={article.paragraphs}
        title={article.title}
        author={article.author}
      />
      <ShareStack articleId={article.articleId} dict={dict} />
    </section>
  );
};

export default Article;
