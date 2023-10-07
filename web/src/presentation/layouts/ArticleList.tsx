import { IArticleCard } from "@/data/Models/Article";
import styles from "@/presentation/styles/layouts/_article-list.module.scss";
import React from "react";
import ArticleCard from "../components/ArticleCard";
import Visit from "../components/Visit";
import { getDictionary } from "@/data/locales/dict/dict";
import { i18n } from "../../../../i18n.config";
import Component from "@/data/Models/Component";

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
  return (
    <section className={articleList} data-testid={"article-list"}>
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
          />
        ))}
      </div>
      {seeMoreButton && (
        <Visit href="/articles" text="See more" target="_self" />
      )}
    </section>
  );
};

export default ArticleList;
