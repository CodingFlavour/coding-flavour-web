import ArticleList from "@/presentation/layouts/ArticleList";
import { render } from "@/validations/utils/test-utils";

const I18N = {
  ARTICLES: "Articles",
};

const setup = () => {
  const context = render(<ArticleList />);

  return {
    context,
  };
};

describe("Article List Test Suite", () => {
  it("should render the component", () => {
    const utils = setup();

    const articleList = utils.context.getByTestId("article-list");
    const articleListHeader = utils.context.getByTestId("article-list-header");
    const articleListArticles = utils.context.getByTestId(
      "articles-list-articles"
    );

    expect(articleList).toBeInTheDocument();
    expect(articleListHeader).toBeInTheDocument();
    expect(articleListArticles).toBeInTheDocument();
    expect(articleList.children.length).toBe(3);
    expect(articleListArticles.children.length).toBe(3); // TODO: This will change for DEFAULT_PROPS_MOCK.length
    expect(articleListHeader).toHaveTextContent(I18N.ARTICLES);
  });
});
