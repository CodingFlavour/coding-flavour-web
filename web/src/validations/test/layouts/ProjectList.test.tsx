import ProjectList, {
  IProjectListProps,
} from "@/presentation/layouts/ProjectList";
import { DEFAULT_PROJECT_MOCK } from "@/validations/utils/mocks";
import { render } from "@/validations/utils/test-utils";

// TODO This will change to i18n key
const I18N = {
  PROJECTS: "Projects",
};

const DEFAULT_PROPS_MOCK: IProjectListProps = {
  projects: [DEFAULT_PROJECT_MOCK],
};

const setup = () => {
  const context = render(
    <ProjectList projects={DEFAULT_PROPS_MOCK.projects} />
  );

  return {
    context,
  };
};

describe("Project List Test Suite", () => {
  it("should render the component", () => {
    const utils = setup();

    const projectList = utils.context.getByTestId("project-list");
    const projectListHeader = utils.context.getByTestId("project-list-header");
    const projectListProjects = utils.context.getByTestId(
      "project-list-projects"
    );

    expect(projectList).toBeInTheDocument();
    expect(projectListHeader).toBeInTheDocument();
    expect(projectListProjects).toBeInTheDocument();
    expect(projectListHeader).toHaveTextContent(I18N.PROJECTS);
    expect(projectListProjects.children.length).toBe(
      DEFAULT_PROPS_MOCK.projects.length
    );
  });
});
