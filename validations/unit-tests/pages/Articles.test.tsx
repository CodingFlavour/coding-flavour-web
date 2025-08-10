import Articles from "@src/app/[lang]/articles/page";
import { render } from "../../utils/test-utils";
import { i18n } from "i18n.config";

const articlesListMock = jest.fn();

jest.mock("../../../src/hooks/useI18N", () => ({
  __esModule: true,
  default: () => ({
    languageActive: i18n.defaultLocale,
  }),
}));

jest.mock("../../../src/presentation/layouts/ArticleList", () => ({
  __esModule: true,
  default: (props: any) => {
    articlesListMock(props);
    return <div data-testid="mock-article-list">Mocked Article List</div>
  },
}));

const setup = async () => {
  const jsx = await Articles({
    params: Promise.resolve({
      lang: i18n.defaultLocale,
    }),
  });

  const context = render(jsx);

  return {
    context,
  };
};

describe("Articles Test Suite", () => {
  it("should render the component", async () => {
    const { context } = await setup();

    const articles = context.getByTestId("articles");

    expect(articles).toBeInTheDocument();

    expect(articles.children.length).toBe(2);
  });
});
