"use client";

import Article from "@/presentation/layouts/Article";
import ContactUsCTA from "@/presentation/layouts/ContactUsCTA";
import styles from "@/presentation/styles/pages/_article-id.module.scss";
import { DEFAULT_ARTICLE_MOCK } from "@/validations/utils/mocks";

const { articleId } = styles;

const ArticleId = () => {
  // TODO: Parse URL and search ID in JSON
  const sendEmail = () => {};

  return (
    <main className={`main ${articleId}`} data-testid={"article-id"}>
      <Article article={DEFAULT_ARTICLE_MOCK} sendEmail={sendEmail} />
      <ContactUsCTA />
    </main>
  );
};

export default ArticleId;
