import Articles from "@/app/[lng]/articles/page";
import { render } from "@/validations/utils/test-utils";

const setup = () => {
  const context = render(<Articles />);

  return {
    context,
  };
};

describe("Articles Test Suite", () => {
  it("should render the component", () => {
    const { context } = setup();

    const articles = context.getByTestId("articles");

    expect(articles).toBeInTheDocument();

    expect(articles.children.length).toBe(2);
  });
});
