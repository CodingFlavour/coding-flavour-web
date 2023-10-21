import ArticleId from "@/app/article/[id]/page";
import { render } from "@/validations/utils/test-utils";

const setup = () => {
  const context = render(<ArticleId />);

  return {
    context,
  };
};

describe("Article ID Test Suite", () => {
  it("should render the component", () => {
    const utils = setup();

    const articleId = utils.context.getByTestId("article-id");

    expect(articleId).toBeInTheDocument();

    expect(articleId.children.length).toBe(2);
  });
});
