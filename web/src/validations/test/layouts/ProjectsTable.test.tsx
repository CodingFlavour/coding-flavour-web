import ProjectsTable, {
  IProjectsTableProps,
} from "@/presentation/layouts/ProjectsTable";
import { DEFAULT_PROJECT_MOCK } from "@/validations/utils/mocks";
import { render } from "@/validations/utils/test-utils";

const DEFAULT_PROPS_MOCK: IProjectsTableProps = {
  projects: [DEFAULT_PROJECT_MOCK],
};

const setup = () => {
  const context = render(
    <ProjectsTable projects={DEFAULT_PROPS_MOCK.projects} />
  );

  return {
    context,
  };
};

describe("Projects Table Test Suite", () => {
  it("should render the component", () => {
    const utils = setup();

    const projectsTable = utils.context.getByTestId("projects-table");
    const projectsTableCounter = utils.context.getByTestId(
      `projects-table-0-counter`
    );
    const projectsTableName = utils.context.getByTestId(
      `projects-table-0-name`
    );
    const projectsTablePlatform = utils.context.getByTestId(
      `projects-table-0-platform`
    );
    const projectsTableDate = utils.context.getByTestId(
      `projects-table-0-date`
    );
    const projectsTableLink = utils.context.getByTestId(
      `projects-table-0-link`
    );

    expect(projectsTable).toBeInTheDocument();
    expect(projectsTableCounter).toBeInTheDocument();
    expect(projectsTableName).toBeInTheDocument();
    expect(projectsTablePlatform).toBeInTheDocument();
    expect(projectsTableDate).toBeInTheDocument();
    expect(projectsTableLink).toBeInTheDocument();

    expect(projectsTable.children.length).toBe(
      DEFAULT_PROPS_MOCK.projects.length
    );
    expect(projectsTableLink.children.length).toBe(1);

    expect(projectsTableCounter).toHaveTextContent("001");
    expect(projectsTableName).toHaveTextContent(
      DEFAULT_PROPS_MOCK.projects[0].projectName
    );
    expect(projectsTablePlatform).toHaveTextContent(
      DEFAULT_PROPS_MOCK.projects[0].platform
    );
    expect(projectsTableDate).toHaveTextContent(
      DEFAULT_PROPS_MOCK.projects[0].date
    );

    expect(projectsTableLink.getAttribute("href")).toBe(
      DEFAULT_PROPS_MOCK.projects[0].url
    );
    expect(projectsTableLink.children[0].getAttribute("alt")).toBe(
      `Visit ${DEFAULT_PROPS_MOCK.projects[0].url}`
    );
  });
});
