import ArticleList from "@/presentation/layouts/ArticleList";
import ContactUsCTA from "@/presentation/layouts/ContactUsCTA";
import styles from "@/presentation/styles/pages/_articles.module.scss";
import { DEFAULT_ARTICLE_CARD_MOCK } from "@/validations/utils/mocks";

const { articles } = styles;

const Articles = () => {
  return (
    <main className={`main ${articles}`} data-testid={"articles"}>
      <ArticleList articles={[DEFAULT_ARTICLE_CARD_MOCK]} />
      <ContactUsCTA />
    </main>
  );
};

export default Articles;
