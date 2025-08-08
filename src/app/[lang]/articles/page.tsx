import Page from "@src/data/Models/Page";
import { getDictionary } from "@src/data/locales/dict/dict";
import ArticleList from "@src/presentation/layouts/ArticleList";
import ContactUsCTA from "@src/presentation/layouts/ContactUsCTA";
import styles from "@src/presentation/styles/pages/_articles.module.scss";
import {
  findArticlesPreview,
  transformDictToArticleCard,
} from "@src/services/FindArticle";
import { i18n } from "../../../../i18n.config";

const { articles } = styles;

const Articles: Page = async ({ params }) => {
  const dict = await getDictionary(params?.lang ?? i18n.defaultLocale);

  const common = await dict.common;

  const articlesDict = await findArticlesPreview(dict);
  const articleList = articlesDict.map((articleDict) =>
    transformDictToArticleCard(articleDict)
  );
  return (
    <main className={`main ${articles}`} data-testid={"articles"}>
      <ArticleList articles={articleList} dict={common} />
      <ContactUsCTA dict={common} />
    </main>
  );
};

export default Articles;
