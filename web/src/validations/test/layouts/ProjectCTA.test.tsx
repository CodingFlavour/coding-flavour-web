import ProjectCTA from "@/presentation/layouts/ProjectCTA";
import { render } from "@/validations/utils/test-utils";

const setup = () => {
  const context = render(<ProjectCTA />);

  return {
    context,
  };
};

describe("Project CTA Test Suite", () => {
  it("should render the component", () => {
    const utils = setup();

    const projectCTA = utils.context.getByTestId("project-cta");
    const projectCTAImages = utils.context.getByTestId("project-cta-images");
    const projectCTAInformation = utils.context.getByTestId("project-cta-information");

    expect(projectCTA).toBeInTheDocument();
    expect(projectCTAImages).toBeInTheDocument();
    expect(projectCTAInformation).toBeInTheDocument();
    expect(projectCTAImages.children.length).toBe(3);
    expect(projectCTAInformation.children.length).toBe(2);
  });
});
