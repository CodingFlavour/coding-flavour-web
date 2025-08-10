import Projects from "@src/app/[lang]/projects/page";
import { i18n } from "i18n.config";
import { render } from "../../utils/test-utils";

jest.mock("../../../src/presentation/layouts/ProjectList", () => ({
  __esModule: true,
  default: () => <div data-testid="mock-project-list" />,
}));

jest.mock("../../../src/presentation/layouts/ContactUsCTA", () => ({
  __esModule: true,
  default: () => <div data-testid="mock-contact-us-cta" />,
}));

const setup = async () => {
  const jsx = await Projects({
    params: Promise.resolve({
      lang: i18n.defaultLocale
    }),
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
