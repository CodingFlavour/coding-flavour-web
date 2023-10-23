import ProjectsTable, {
  IProjectsTableProps,
} from "@src/presentation/layouts/ProjectsTable";
import { DEFAULT_PROJECT_MOCK } from "@src/validations/utils/mocks";
import { render } from "@src/validations/utils/test-utils";

const MOCK_I18N = {
  ourProjects: "ourProjects",
  visit: "visit",
  seeMore: 'seeMore'
};

const DEFAULT_PROPS_MOCK: IProjectsTableProps = {
  projects: [DEFAULT_PROJECT_MOCK, DEFAULT_PROJECT_MOCK, DEFAULT_PROJECT_MOCK],
};

const setup = () => {
  const context = render(
    <ProjectsTable projects={DEFAULT_PROPS_MOCK.projects} dict={MOCK_I18N} />
  );

  return {
    context,
  };
};

describe("Projects Table Test Suite", () => {
  it("should render the component", () => {
    const utils = setup();

    const projectsTable = utils.context.getByTestId("projects-table");
    const projectsTableWrapper = utils.context.getByTestId(
      "projects-table-wrapper"
    );
    const projectsTableHeader = utils.context.getByTestId(
      "projects-table-header"
    );
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
    expect(projectsTableWrapper).toBeInTheDocument();
    expect(projectsTableHeader).toBeInTheDocument();
    expect(projectsTableCounter).toBeInTheDocument();
    expect(projectsTableName).toBeInTheDocument();
    expect(projectsTablePlatform).toBeInTheDocument();
    expect(projectsTableDate).toBeInTheDocument();
    expect(projectsTableLink).toBeInTheDocument();

    expect(projectsTable.children.length).toBe(1);
    expect(projectsTableWrapper.children.length).toBe(
      DEFAULT_PROPS_MOCK.projects.length + 2
    ); //Projects + H3 + Visit
    expect(projectsTableLink.children.length).toBe(1);

    expect(projectsTableHeader).toHaveTextContent(MOCK_I18N.ourProjects);
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
      `${MOCK_I18N.visit} ${DEFAULT_PROPS_MOCK.projects[0].url}`
    );
  });
});
