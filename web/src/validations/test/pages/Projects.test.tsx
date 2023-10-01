import Projects from "@/app/projects/page";
import { render } from "@/validations/utils/test-utils";

const setup = () => {
  const context = render(<Projects />);

  return {
    context,
  };
};

describe("Projects Test Suite", () => {
  it("should render the component", () => {
    const utils = setup();

    const projects = utils.context.getByTestId("projects");

    expect(projects).toBeInTheDocument();

    expect(projects.children.length).toBe(2);
  });
});
