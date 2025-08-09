import ProjectInformation from "@src/presentation/layouts/ProjectInformation";
import { DEFAULT_PROJECT_MOCK } from "@src/validations/utils/mocks";
import { render } from "@src/validations/utils/test-utils";

const setup = () => {
  const context = render(
    <ProjectInformation
      projectName={DEFAULT_PROJECT_MOCK.projectName}
      date={DEFAULT_PROJECT_MOCK.date}
      platform={DEFAULT_PROJECT_MOCK.platform}
      images={DEFAULT_PROJECT_MOCK.images}
      paragraphs={DEFAULT_PROJECT_MOCK.paragraphs}
      techStack={DEFAULT_PROJECT_MOCK.techStack}
      url={DEFAULT_PROJECT_MOCK.url}
      projectId={DEFAULT_PROJECT_MOCK.projectId}
      visitText={DEFAULT_PROJECT_MOCK.visitText}
    />
  );

  return {
    context,
  };
};

describe("Project Information Test Suite", () => {
  it("should render the component", () => {
    const utils = setup();

    const project = utils.context.getByTestId("project");
    const projectInformation = utils.context.getByTestId("project-information");
    const projectInformationName = utils.context.getByTestId(
      "project-information-name"
    );
    const projectInformationDate = utils.context.getByTestId(
      "project-information-date"
    );
    const projectInformationImageOne = utils.context.getByTestId(
      "project-information-image-1"
    );
    const projectInformationImageTwo = utils.context.getByTestId(
      "project-information-image-2"
    );
    const projectInformationImageThree = utils.context.getByTestId(
      "project-information-image-3"
    );
    const projectInformationImageFour = utils.context.getByTestId(
      "project-information-image-4"
    );
    const projectInformationParagraphOne = utils.context.getByTestId(
      "project-information-paragraph-1"
    );
    const projectInformationParagraphTwo = utils.context.getByTestId(
      "project-information-paragraph-2"
    );
    const projectInformationParagraphThree = utils.context.getByTestId(
      "project-information-paragraph-3"
    );
    const projectInformationParagraphFour = utils.context.getByTestId(
      "project-information-paragraph-4"
    );
    const projectInformationTechStack = utils.context.getByTestId(
      "project-information-tech-stack"
    );

    const correctDateString = `${DEFAULT_PROJECT_MOCK.platform}, ${DEFAULT_PROJECT_MOCK.date}`;

    expect(project).toBeInTheDocument();
    expect(projectInformation).toBeInTheDocument();
    expect(projectInformationName).toBeInTheDocument();
    expect(projectInformationDate).toBeInTheDocument();
    expect(projectInformationImageOne).toBeInTheDocument();
    expect(projectInformationImageTwo).toBeInTheDocument();
    expect(projectInformationImageThree).toBeInTheDocument();
    expect(projectInformationImageFour).toBeInTheDocument();
    expect(projectInformationParagraphOne).toBeInTheDocument();
    expect(projectInformationParagraphTwo).toBeInTheDocument();
    expect(projectInformationParagraphThree).toBeInTheDocument();
    expect(projectInformationParagraphFour).toBeInTheDocument();
    expect(projectInformationTechStack).toBeInTheDocument();

    expect(project.children.length).toBe(2);
    expect(projectInformationTechStack.children.length).toBe(
      DEFAULT_PROJECT_MOCK.techStack.length
    );

    expect(projectInformationName).toHaveTextContent(
      DEFAULT_PROJECT_MOCK.projectName
    );
    expect(projectInformationDate).toHaveTextContent(correctDateString);
    expect(projectInformationParagraphOne).toHaveTextContent(
      DEFAULT_PROJECT_MOCK.paragraphs[0]
    );
    expect(projectInformationParagraphTwo).toHaveTextContent(
      DEFAULT_PROJECT_MOCK.paragraphs[1]
    );
    expect(projectInformationParagraphThree).toHaveTextContent(
      DEFAULT_PROJECT_MOCK.paragraphs[2]
    );
    expect(projectInformationParagraphFour).toHaveTextContent(
      DEFAULT_PROJECT_MOCK.paragraphs[3]
    );
  });
});
