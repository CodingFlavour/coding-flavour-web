import Image, { StaticImageData } from "next/image";
import React from "react";
import styles from "@/presentation/styles/components/_article-information.module.scss";

const {
  articleInformation__image,
  articleInformation__body,
  articleInformation__body__date,
  articleInformation__body__title,
  articleInformation__body__description,
} = styles;

export interface IArticleInformation {
  image: StaticImageData;
  imageAlt: string;
  date: string;
  title: string;
  paragraphs: string[];
  author: string;
}

const ArticleInformation: React.FC<IArticleInformation> = ({
  image,
  imageAlt,
  date,
  title,
  paragraphs,
  author
}) => {
  return (
    <article data-testid={"article-information"}>
      <Image
        src={image}
        alt={imageAlt}
        className={articleInformation__image}
        data-testid={"article-information-image"}
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
          >
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
};

export default React.memo(ArticleInformation);
