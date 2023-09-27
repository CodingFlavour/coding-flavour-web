import ProjectList from "@/presentation/layouts/ProjectList";
import { render } from "@/validations/utils/test-utils";

// TODO This will change to i18n key
const I18N = {
  PROJECTS: "Projects",
};

const setup = () => {
  const context = render(<ProjectList />);

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
    expect(projectListProjects.children.length).toBe(4); // TODO This will change to DEFAULT_PROPS_MOCK.length
  });
});
