import ProjectCard, {
  IProjectCardProps,
} from "@/presentation/components/ProjectCard";
import { render } from "../utils/test-utils";

interface ISetup {
  props: IProjectCardProps;
}

const DEFAULT_PROPS_MOCK: IProjectCardProps = {
  projectName: "mock-project-name",
  date: "mock-date",
  platform: "mock-platform",
  projectId: "",
};

const setup = ({ props }: ISetup) => {
  const context = render(
    <ProjectCard
      date={props.date}
      platform={props.platform}
      projectId={props.projectId}
      projectName={props.projectName}
    />
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
