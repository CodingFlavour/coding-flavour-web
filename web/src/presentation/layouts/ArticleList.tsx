import { IArticleCard } from "@src/data/Models/Article";
import styles from "@src/presentation/styles/layouts/_article-list.module.scss";
import React from "react";
import ArticleCard from "../components/ArticleCard";
import Visit from "../components/Visit";
import Component from "@src/data/Models/Component";

export interface IArticleListProps {
  articles: IArticleCard[];
  seeMoreButton?: boolean;
}
const { articleList, articleList__header, articleList__articles } = styles;

const ArticleList: Component<IArticleListProps> = async ({
  articles,
  seeMoreButton,
  dict,
}) => {
  const seeMore = dict.seeMore as string;
  return (
    <section className={`${articleList} column_1`} data-testid={"article-list"}>
      <h3 className={articleList__header} data-testid={"article-list-header"}>
        {dict.articles}
      </h3>
      <div
        className={articleList__articles}
        data-testid={"articles-list-articles"}
      >
        {articles.map((article) => (
          <ArticleCard
            image={article.image}
            imageAlt={article.imageAlt}
            date={article.date}
            title={article.title}
            description={article.description}
            articleId={article.articleId}
            key={article.articleId}
            visitText={dict.readMore as string}
          />
        ))}
      </div>
      {seeMoreButton && (
        <Visit href="/articles" text={seeMore} target="_self" />
      )}
    </section>
  );
};

export default ArticleList;
