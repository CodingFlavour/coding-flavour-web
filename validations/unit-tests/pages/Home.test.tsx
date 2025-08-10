import Home from "@src/app/[lang]/page";
import { Dict, DictData } from "@src/data/locales/dict/dict";
import { IArticleListProps } from "@src/presentation/layouts/ArticleList";
import { i18n } from "i18n.config";
import { loadDict, render } from "../../utils/test-utils";

const ARTICLES_LENGTH = 2;

const mockArticleList = jest.fn();
const mockTransformDictToArticleCard = jest.fn();

jest.mock("../../../src/hooks/useI18N", () => ({
  __esModule: true,
  default: () => ({
    languageActive: i18n.defaultLocale,
  }),
}));

jest.mock("../../../src/presentation/layouts/ArticleList", () => ({
  __esModule: true,
  default: (props: IArticleListProps) => {
    mockArticleList(props);
    return <div data-testid="mock-article-list">Mocked Article List</div>;
  },
}));

jest.mock("../../../src/services/FindArticle", () => ({
  __esModule: true,
  ...jest.requireActual("../../../src/services/FindArticle"),
  findArticlesPreview: (_dict: Dict) => {
    return Promise.resolve(Array.from({ length: ARTICLES_LENGTH }, (_, i) => i));
  },
  transformDictToArticleCard: (dict: DictData, articleId: string) => {
    mockTransformDictToArticleCard(dict, articleId);
    return 'Mocked Transform Dict to Article';
  },
}));

const setup = async () => {
  const common = await loadDict();

  const jsx = await Home({
    params: Promise.resolve({ lang: i18n.defaultLocale }),
  });

  const context = render(jsx);

  return {
    context,
    common,
  };
};

describe("Projects Test Suite", () => {
  it("should render the component", async () => {
    const { context, common } = await setup();

    const home = context.getByTestId("home");
    const articleList = context.getByTestId("mock-article-list");

    expect(home).toBeInTheDocument();
    expect(articleList).toBeInTheDocument();
    expect(mockArticleList).toHaveBeenCalledTimes(1);
    expect(mockArticleList).toHaveBeenCalledWith({
      articles: Array.from({ length: ARTICLES_LENGTH }, () => 'Mocked Transform Dict to Article'),
      dict: common,
      seeMoreButton: true,
    });
  });
});
