import { IArticle, ParagraphType } from "@src/data/Models/Article";
import styles from "@src/presentation/styles/components/_article-information.module.scss";
import simpleHash from "@src/utils/simple-hasher";
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
  const getDataTestId = (base: string, content: string) => `${base}-${simpleHash(content)}`;

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
          <div
            key={index}
            className={articleInformation__body__description}
            data-testid={getDataTestId(`article-information-body-description`, `${paragraph.type}-${paragraph.content}`)}
          >
            {paragraph.type === ParagraphType.Title && <h2>{paragraph.content}</h2>}
            {paragraph.type === ParagraphType.Text && <p>{paragraph.content}</p>}
            {paragraph.type === ParagraphType.Code && <pre>{paragraph.content}</pre>}
          </div>
        ))}
      </div>
    </article>
  );
};

export default React.memo(ArticleInformation);
