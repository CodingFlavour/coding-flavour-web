import ProjectId from "@src/app/[lang]/project/[id]/page";
import { projects } from "@src/data/locales/dict/dict";
import { i18n } from "i18n.config";
import { render } from "../../utils/test-utils";

jest.mock("../../../src/hooks/useI18N", () => ({
  __esModule: true,
  default: () => ({
    languageActive: i18n.defaultLocale,
  }),
}));

const setup = async () => {
  const jsx = await ProjectId({
    params: Promise.resolve({
      lang: i18n.defaultLocale,
      id: projects.names[0]
    }),
  });

  const context = render(jsx);

  return {
    context,
  };
};


describe("Project ID Test Suite", () => {
  it("should render the component", async () => {
    const { context } = await setup();

    const projectId = context.getByTestId("project-id");

    expect(projectId).toBeInTheDocument();

    expect(projectId.children.length).toBe(3);
  });
});
