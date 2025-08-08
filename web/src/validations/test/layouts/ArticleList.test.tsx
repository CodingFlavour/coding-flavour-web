import { getDictionary } from "@src/data/locales/dict/dict";
import ArticleList, {
  IArticleListProps,
} from "@src/presentation/layouts/ArticleList";
import { DEFAULT_ARTICLE_CARD_MOCK } from "@src/validations/utils/mocks";
import { render } from "@src/validations/utils/test-utils";
import { i18n } from "../../../../../i18n.config";

interface ISetup {
  props: IArticleListProps;
}

const I18N = {
  ARTICLES: "Articles",
};

const DEFAULT_PROPS_MOCK: ISetup["props"] = {
  articles: [DEFAULT_ARTICLE_CARD_MOCK],
  seeMoreButton: false,
};

const setup = async ({ props }: ISetup) => {
  const dict = await getDictionary(i18n.defaultLocale);
  const common = await dict.common;

  const jsx = await ArticleList({
    dict: common,
    ...props,
  });

  const context = render(jsx);

  return {
    context,  
  };
};

describe("Article List Test Suite", () => {
  it("should render the component", async () => {
    const { context } = await setup({
      props: DEFAULT_PROPS_MOCK,
    });

    const articleList = context.getByTestId("article-list");
    const articleListHeader = context.getByTestId("article-list-header");
    const articleListArticles = context.getByTestId(
      "articles-list-articles"
    );

    expect(articleList).toBeInTheDocument();
    expect(articleListHeader).toBeInTheDocument();
    expect(articleListArticles).toBeInTheDocument();
    expect(articleList.children.length).toBe(2);
    expect(articleListArticles.children.length).toBe(
      DEFAULT_PROPS_MOCK.articles.length
    );
    expect(articleListHeader).toHaveTextContent(I18N.ARTICLES);
  });
  it("should render the component with button", async () => {
    const { context } = await setup({
      props: {
        ...DEFAULT_PROPS_MOCK,
        seeMoreButton: true,
      },
    });

    const articleList = context.getByTestId("article-list");

    expect(articleList.children.length).toBe(3);
  });
});
