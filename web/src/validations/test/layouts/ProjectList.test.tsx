import ProjectList, {
  IProjectListProps,
} from "@/presentation/layouts/ProjectList";
import { DEFAULT_PROJECT_MOCK } from "@/validations/utils/mocks";
import { render } from "@/validations/utils/test-utils";

const DEFAULT_PROPS_MOCK: IProjectListProps = {
  projects: [DEFAULT_PROJECT_MOCK],
  title: "mock-title",
};

const setup = () => {
  const context = render(
    <ProjectList
      projects={DEFAULT_PROPS_MOCK.projects}
      title={DEFAULT_PROPS_MOCK.title}
    />
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
    expect(projectListHeader).toHaveTextContent(DEFAULT_PROPS_MOCK.title);
    expect(projectListProjects.children.length).toBe(
      DEFAULT_PROPS_MOCK.projects.length
    );
  });
});
