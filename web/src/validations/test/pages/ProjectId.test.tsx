import ProjectId from "@/app/project/[id]/page";
import { render } from "@/validations/utils/test-utils";

const setup = () => {
  const context = render(<ProjectId />);

  return {
    context,
  };
};

describe("Project ID Test Suite", () => {
  it("should render the component", () => {
    const utils = setup();

    const projectId = utils.context.getByTestId("project-id");

    expect(projectId).toBeInTheDocument();

    expect(projectId.children.length).toBe(3);
  });
});
