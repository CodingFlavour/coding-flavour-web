import { getDictionary } from "@/data/locales/dict/dict";
import ArticleList from "@/presentation/layouts/ArticleList";
import ContactUsCTA from "@/presentation/layouts/ContactUsCTA";
import styles from "@/presentation/styles/pages/_articles.module.scss";
import { DEFAULT_ARTICLE_CARD_MOCK } from "@/validations/utils/mocks";
import { i18n } from "../../../../../i18n.config";
import Page from "@/data/Models/Page";

const { articles } = styles;

const Articles: Page = async ({ params }: { params: {lang: string} }) => {
  const dict = await getDictionary(params?.lang ?? i18n.defaultLocale);
  return (
    <main className={`main ${articles}`} data-testid={"articles"}>
      <ArticleList articles={[DEFAULT_ARTICLE_CARD_MOCK]} />
      <ContactUsCTA />
    </main>
  );
};

export default Articles;
