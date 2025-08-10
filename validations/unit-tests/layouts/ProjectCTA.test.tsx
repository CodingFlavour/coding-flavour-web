import { getDictionary } from "@src/data/locales/dict/dict";
import ProjectCTA from "@src/presentation/layouts/ProjectCTA";
import { render } from "../../utils/test-utils";
import { i18n } from "i18n.config";

jest.mock('../../../src/presentation/components/Visit.tsx', () => ({
  __esModule: true,
  default: (_props: any) => {
    return <div data-testid="mock-visit">Mocked Visit</div>;
  },
}));

const setup = async () => {
  const defaultDict = await getDictionary(i18n.defaultLocale);
  const common = defaultDict.common;

  const context = render(<ProjectCTA dict={common} />);

  return {
    context,
  };
};

describe("Project CTA Test Suite", () => {
  it("should render the component", async () => {
    const utils = await setup();

    const projectCTA = utils.context.getByTestId("project-cta");
    const projectCTAImages = utils.context.getByTestId("project-cta-images");
    const projectCTAInformation = utils.context.getByTestId("project-cta-information");

    expect(projectCTA).toBeInTheDocument();
    expect(projectCTAImages).toBeInTheDocument();
    expect(projectCTAInformation).toBeInTheDocument();
    expect(projectCTAImages.children.length).toBe(3);
    expect(projectCTAInformation.children.length).toBe(2);
  });
});
