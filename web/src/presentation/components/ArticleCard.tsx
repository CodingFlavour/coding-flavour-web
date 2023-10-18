import { IArticleCard } from "@src/data/Models/Article";
import styles from "@src/presentation/styles/components/_article-card.module.scss";
import Image from "next/image";
import React from "react";
import Visit from "./Visit";

interface IArticleCardProps extends IArticleCard{
  visitText: string;
}

const {
  articleCard,
  articleCard__image,
  articleCard__information,
  articleCard__information__date,
  articleCard__information__title,
  articleCard__information__description,
} = styles;

const ArticleCard: React.FC<IArticleCardProps> = ({
  image,
  imageAlt,
  date,
  title,
  description,
  articleId,
  visitText,
}) => {
  return (
    <article className={articleCard} data-testid={"article-card"}>
      <Image
        className={articleCard__image}
        src={image}
        alt={imageAlt}
        data-testid={"article-card-image"}
        width={2000}
        height={2000}
      />
      <div
        className={articleCard__information}
        data-testid={"article-card-information"}
      >
        <span
          className={articleCard__information__date}
          data-testid={"article-card-information-date"}
        >
          {date}
        </span>
        <h4
          className={articleCard__information__title}
          data-testid={"article-card-information-title"}
        >
          {title}
        </h4>
        <p
          className={articleCard__information__description}
          data-testid={"article-card-information-description"}
        >
          {description}
        </p>
        <Visit text={visitText} href={`/article/${articleId}`} target="_self" />
      </div>
    </article>
  );
};

export default React.memo(ArticleCard);
