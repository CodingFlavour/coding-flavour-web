import { getDictionary } from "@src/data/locales/dict/dict";
import ProjectList, {
  IProjectListProps,
} from "@src/presentation/layouts/ProjectList";
import { DEFAULT_PROJECT_MOCK } from "@src/validations/utils/mocks";
import { render } from "@src/validations/utils/test-utils";
import { i18n } from "../../../../i18n.config";

const DEFAULT_PROPS_MOCK: IProjectListProps = {
  projects: [DEFAULT_PROJECT_MOCK],
  title: "mock-title",
};

const setup = async () => {
  const dict = await getDictionary(i18n.defaultLocale);
  const common = await dict.common;

  const jsx = await ProjectList({
    projects: DEFAULT_PROPS_MOCK.projects,
    title: DEFAULT_PROPS_MOCK.title,
    dict: common,
  });

  const context = render(jsx);

  return {
    context,
  };
};

describe("Project List Test Suite", () => {
  it("should render the component", async () => {
    const { context } = await setup();

    const projectList = context.getByTestId("project-list");
    const projectListHeader = context.getByTestId("project-list-header");
    const projectListProjects = context.getByTestId(
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
