import Projects from "@/app/projects/page";
import { render } from "@/validations/utils/test-utils";

const setup = () => {
  const context = render(<Projects />);

  return {
    context,
  };
};

describe("Project ID Test Suite", () => {
  it("should render the component", () => {
    const utils = setup();

    const projectId = utils.context.getByTestId("project-id");
    const projectIdProjectInformation = utils.context.getByTestId(
      "project-id-project-information"
    );
    const projectIdProjectList = utils.context.getByTestId(
      "projectId-project-list"
    );
    const projectIdContactUsCTA = utils.context.getByTestId(
      "project-id-contact-us-cta"
    );

    expect(projectId).toBeInTheDocument();
    expect(projectIdProjectInformation).toBeInTheDocument();
    expect(projectIdProjectList).toBeInTheDocument();
    expect(projectIdContactUsCTA).toBeInTheDocument();

    expect(projectIdProjectInformation.children.length).toBe(1);
    expect(projectIdProjectList.children.length).toBe(1);
    expect(projectIdContactUsCTA.children.length).toBe(1);
  });
});
