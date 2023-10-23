import ArticleId from "@src/app/[lang]/article/[id]/page";
import { render } from "@src/validations/utils/test-utils";
import { i18n } from "../../../../../i18n.config";

// TODO: Check how to test async elements
const setup = async () => {
  const context =  render(
    <ArticleId params={{ id: "id", lang: i18n.defaultLocale }} />
  );

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
