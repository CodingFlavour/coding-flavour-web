import ArticleList, {
  IArticleListProps,
} from "@/presentation/layouts/ArticleList";
import { DEFAULT_ARTICLE_CARD_MOCK } from "@/validations/utils/mocks";
import { render } from "@/validations/utils/test-utils";

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

const setup = ({ props }: ISetup) => {
  const context = render(
    <ArticleList
      articles={props.articles}
      seeMoreButton={props.seeMoreButton}
    />
  );

  return {
    context,
  };
};

describe("Article List Test Suite", () => {
  it("should render the component", () => {
    const utils = setup({
      props: DEFAULT_PROPS_MOCK,
    });

    const articleList = utils.context.getByTestId("article-list");
    const articleListHeader = utils.context.getByTestId("article-list-header");
    const articleListArticles = utils.context.getByTestId(
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
  it("should render the component with button", () => {
    const utils = setup({
      props: {
        ...DEFAULT_PROPS_MOCK,
        seeMoreButton: true,
      },
    });

    const articleList = utils.context.getByTestId("article-list");

    expect(articleList.children.length).toBe(3);
  });
});
