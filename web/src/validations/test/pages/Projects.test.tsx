import Projects from "@src/app/[lang]/projects/page";
import { render } from "@src/validations/utils/test-utils";
import { i18n } from "../../../../../i18n.config";

const setup = async () => {
  const jsx = await Projects({
    params: {
      lang: i18n.defaultLocale
    },
  });

  const context = render(jsx);

  return {
    context,
  };
};

describe("Projects Test Suite", () => {
  it("should render the component", async () => {
    const { context } = await setup();

    const projects = context.getByTestId("projects");

    expect(projects).toBeInTheDocument();

    expect(projects.children.length).toBe(2);
  });
});
