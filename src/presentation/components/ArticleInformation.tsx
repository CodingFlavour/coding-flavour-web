import { IArticle } from "@src/data/Models/Article";
import styles from "@src/presentation/styles/components/_article-information.module.scss";
import Image from "next/image";
import React from "react";

const {
  articleInformation__image,
  articleInformation__body,
  articleInformation__body__date,
  articleInformation__body__title,
  articleInformation__body__description,
} = styles;

const ArticleInformation: React.FC<IArticle> = ({
  image,
  imageAlt,
  date,
  title,
  paragraphs,
  author,
}) => {
  return (
    <article data-testid={"article-information"}>
      <Image
        src={image}
        alt={imageAlt}
        className={articleInformation__image}
        data-testid={"article-information-image"}
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className={articleInformation__body}>
        <span
          className={articleInformation__body__date}
          data-testid={"article-information-body-date"}
        >
          {author}, {date}
        </span>
        <h1
          className={articleInformation__body__title}
          data-testid={"article-information-body-title"}
        >
          {title}
        </h1>
        {paragraphs.map((paragraph, index) => (
          <p
            className={articleInformation__body__description}
            key={`${paragraph}`}
            data-testid={`article-information-body-description-${index}`}
            dangerouslySetInnerHTML={{ __html: paragraph }}
          ></p>
        ))}
      </div>
    </article>
  );
};

export default React.memo(ArticleInformation);
