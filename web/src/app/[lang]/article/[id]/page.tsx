import styles from "@/presentation/styles/pages/_article-id.module.scss";
import Page from "@src/data/Models/Page";
import { getDictionary } from "@src/data/locales/dict/dict";
import Article from "@src/presentation/layouts/Article";
import ContactUsCTA from "@src/presentation/layouts/ContactUsCTA";
import {
  findArticleInDict,
  transformDictToArticle,
} from "@src/services/FindArticle";
import { i18n } from "../../../../../../i18n.config";

const { articleId } = styles;

interface IArticleIdSlug {
  id: string;
}

const ArticleId: Page<IArticleIdSlug> = async ({ params: { lang, id } }) => {
  const fullDict = await getDictionary(lang ?? i18n.defaultLocale);
  const articleDict = await findArticleInDict(id, fullDict);

  if (!articleDict) {
    return <>Not found</>;
  }

  const article = transformDictToArticle(articleDict, id);
  const common = await fullDict.common;

  return (
    <main className={`main ${articleId}`} data-testid={"article-id"}>
      <Article article={article} dict={common} />
      <ContactUsCTA dict={common} />
    </main>
  );
};

export default ArticleId;
