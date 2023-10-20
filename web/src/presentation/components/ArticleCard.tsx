import styles from "@/presentation/styles/components/_article-card.module.scss";
import Image, { StaticImageData } from "next/image";
import React from "react";
import Visit from "./Visit";

const {
  articleCard,
  articleCard__image,
  articleCard__information,
  articleCard__information__date,
  articleCard__information__title,
  articleCard__information__description,
} = styles;

interface IArticleCard {
  image: StaticImageData;
  imageAlt: string;
  date: string;
  title: string;
  description: string;
  articleId: string;
}

const ArticleCard: React.FC<IArticleCard> = ({
  image,
  imageAlt,
  date,
  title,
  description,
  articleId,
}) => {
  return (
    <article className={articleCard} data-testid={"article-card"}>
      <Image
        className={articleCard__image}
        src={image}
        alt={imageAlt}
        data-testid={"article-card-image"}
      />
      <div className={articleCard__information} data-testid={"article-card-information"}>
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
        <Visit text={"Read more"} href={`/article/${articleId}`} />
      </div>
    </article>
  );
};

export default React.memo(ArticleCard);
