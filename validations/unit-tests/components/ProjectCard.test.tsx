import ProjectCard, {
  IProjectCardProps,
} from "@src/presentation/components/ProjectCard";
import { render } from "../../utils/test-utils";
import { i18n } from "i18n.config";

interface ISetup {
  props: IProjectCardProps;
}

jest.mock("../../../src/hooks/useI18N", () => ({
  __esModule: true,
  default: () => ({
    languageActive: i18n.defaultLocale,
  }),
}));

const DEFAULT_PROPS_MOCK: IProjectCardProps = {
  projectName: "mock-project-name",
  date: "mock-date",
  platform: "mock-platform",
  projectId: "",
  visitText: "Visit",
};

const setup = ({ props }: ISetup) => {
  const context = render(
    <ProjectCard {...DEFAULT_PROPS_MOCK} {...props} />
  );

  return {
    context,
  };
};

describe("Project Card Test Suite", () => {
  it("should render the component", () => {
    const utils = setup({
      props: DEFAULT_PROPS_MOCK,
    });

    const projectCard = utils.context.getByTestId("project-card");
    const projectCardName = utils.context.getByTestId("project-card-name");
    const projectCardPlatformDate = utils.context.getByTestId("project-card-platform-date");

    expect(projectCard).toBeInTheDocument();
    expect(projectCardName).toBeInTheDocument();
    expect(projectCardPlatformDate).toBeInTheDocument();
    expect(projectCard.children.length).toBe(4);
    expect(projectCardName).toHaveTextContent(DEFAULT_PROPS_MOCK.projectName);
    expect(projectCardPlatformDate).toHaveTextContent(`${DEFAULT_PROPS_MOCK.platform}, ${DEFAULT_PROPS_MOCK.date}`);
  });
});
