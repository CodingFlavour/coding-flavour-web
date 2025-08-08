import { render } from "@src/validations/utils/test-utils";
import Home from "@src/app/[lang]/page";
import { i18n } from "../../../../../i18n.config";
import { IArticleListProps } from "@src/presentation/layouts/ArticleList";
import { Dict, DictData, getDictionary } from "@src/data/locales/dict/dict";

const ARTICLES_LENGTH = 2;

const mockArticleList = jest.fn();
const mockTransformDictToArticleCard = jest.fn();

jest.mock("../../../presentation/layouts/ArticleList", () => ({
  __esModule: true,
  default: (props: IArticleListProps) => {
    mockArticleList(props);
    return <div data-testid="mock-article-list">Mocked Article List</div>;
  },
}));

jest.mock('../../../services/FindArticle', () => ({
  __esModule: true,
  ...jest.requireActual('../../../services/FindArticle'),
  findArticlesPreview: (dict: Dict) => {
    return Promise.resolve(Array.from({ length: ARTICLES_LENGTH }, (_, i) => i ));
  },
  transformDictToArticleCard: (dict: DictData, articleId: string) => {
    mockTransformDictToArticleCard(dict, articleId);
    return 'Mocked Transform Dict to Article';
  },
}));

const setup = async () => {
  const dict = await getDictionary(i18n.defaultLocale);
  const common = await dict.common;

  const jsx = await Home({
    params: {
      lang: i18n.defaultLocale,
    },
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
