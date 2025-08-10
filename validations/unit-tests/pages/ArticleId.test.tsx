import ArticleId from "@src/app/[lang]/article/[id]/page";
import { articles } from "@src/data/locales/dict/dict";
import { render } from "../../utils/test-utils";
import { i18n } from "i18n.config";

jest.mock("../../../src/hooks/useI18N", () => ({
  __esModule: true,
  default: () => ({
    languageActive: i18n.defaultLocale,
  }),
}));

const setup = async () => {
  const jsx = await ArticleId({
    params: Promise.resolve({
      lang: i18n.defaultLocale,
      id: articles.names[0]
    }),
  });

  const context = render(jsx);

  return {
    context,
  };
};

describe("Article ID Test Suite", () => {
  it("should render the component", async () => {
    const utils = await setup();

    const articleId = utils.context.getByTestId("article-id");

    expect(articleId).toBeInTheDocument();

    expect(articleId.children.length).toBe(2);
  });
});
