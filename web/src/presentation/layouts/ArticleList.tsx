import React from "react";
import styles from "@/presentation/styles/layouts/_article-list.module.scss";
import ImagePreview from "@/presentation/assets/images/image-preview.jpg";
import ImagePreviewTwo from "@/presentation/assets/images/image-preview-2.png";
import ImagePreviewThree from "@/presentation/assets/images/image-preview-4.png";
import ArticleCard from "../components/ArticleCard";
import Visit from "../components/Visit";

const { articleList, articleList__header, articleList__articles } = styles;

const ArticleList = () => {
  // TODO: Probably this will come via props, so I dont care right now about the typing
  const articlesList = [
    {
      image: ImagePreview,
      imageAlt: "Article about Sass",
      date: "09/2023",
      title: "Injecting Sass @use via webpack",
      description:
        "In this article, we cover how to improve the legibility of your Sass files by injecting all of the common @use via WebPack and having them available in all your files with their alias",
      articleId: "sass-prepend-via-webpack",
    },
    {
      image: ImagePreviewTwo,
      imageAlt: "Article about NextJS architecture",
      date: "10/2023",
      title: "Constructing NextJS monorepo",
      description:
        "Today, we are constructing our new application with a monorepo, with the intention of keeping scaling and building a TurboRepo in next projects, connecting all the mainframes, utilities and libraries developed by Coding Flavour",
      articleId: "nextjs-monorepo-from-scratch",
    },
    {
      image: ImagePreviewThree,
      imageAlt: "Another article about how cool we are",
      date: "11/2023",
      title: "A really cool team",
      description:
        "The Coding Flavour team is the best team in the world. My mum said that our website looks really beatiful and that we can get really rich, that's why we are the coolest team in the world that has the best company name and logo and teams and coffee",
      articleId: "my-mum-says-we-are-cool",
    },
  ];

  return (
    <section className={articleList} data-testid={'article-list'}>
      <h3 className={articleList__header} data-testid={'article-list-header'}>Articles</h3>
      <div className={articleList__articles} data-testid={'articles-list-articles'}>
        {articlesList.map((article) => (
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
      <Visit href="/articles" text="See more" target="_self" />
    </section>
  );
};

export default ArticleList;
