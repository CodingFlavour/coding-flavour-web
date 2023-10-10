import { getDictionary } from "@src/data/locales/dict/dict";
import ArticleList from "@src/presentation/layouts/ArticleList";
import ContactUsCTA from "@src/presentation/layouts/ContactUsCTA";
import styles from "@src/presentation/styles/pages/_articles.module.scss";
import { DEFAULT_ARTICLE_CARD_MOCK } from "@src/validations/utils/mocks";
import { i18n } from "../../../../../i18n.config";
import Page from "@src/data/Models/Page";

const { articles } = styles;

const Articles: Page = async ({ params }: { params: {lang: string} }) => {
  const dict = await getDictionary(params?.lang ?? i18n.defaultLocale);

  const common = await dict.common;

  return (
    <main className={`main ${articles}`} data-testid={"articles"}>
      <ArticleList articles={[DEFAULT_ARTICLE_CARD_MOCK]} dict={common} />
      <ContactUsCTA dict={common}/>
    </main>
  );
};

export default Articles;
