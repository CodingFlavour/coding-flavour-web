import ProjectInformation, {
  IProjectInformationProps,
} from "@/presentation/layouts/ProjectInformation";
import { render } from "@/validations/utils/test-utils";
import ImagePreview from "@/presentation/assets/images/image-preview.jpg";

const DEFAULT_IMAGE_ITEM = {
  alt: "mock-image-alt",
  image: ImagePreview,
};

const DEFAULT_STACK_ITEM = {
  icon: ImagePreview,
  alt: "mock-stack-item-alt",
};

const DEFAULT_PROPS_MOCK: IProjectInformationProps = {
  projectName: "mock-project-name",
  date: "mock-date",
  platform: "mock-platform",
  images: Array.from(Array(4)).map((_, index) => ({
    ...DEFAULT_IMAGE_ITEM,
    alt: `${DEFAULT_IMAGE_ITEM.alt}-${index}`,
  })),
  paragraphs: Array.from(Array(10)).map(() => "mock-paragraph"),
  techStack: Array.from(Array(4)).map((_, index) => ({
    ...DEFAULT_STACK_ITEM,
    alt: `${DEFAULT_STACK_ITEM.alt}-${index}`,
  })),
};

const setup = () => {
  const context = render(
    <ProjectInformation
      projectName={DEFAULT_PROPS_MOCK.projectName}
      date={DEFAULT_PROPS_MOCK.date}
      platform={DEFAULT_PROPS_MOCK.platform}
      images={DEFAULT_PROPS_MOCK.images}
      paragraphs={DEFAULT_PROPS_MOCK.paragraphs}
      techStack={DEFAULT_PROPS_MOCK.techStack}
    />
  );

  return {
    context,
  };
};

describe("Project Information Test Suite", () => {
  it("should render the component", () => {
    const utils = setup();

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

    const correctDateString = `${DEFAULT_PROPS_MOCK.platform}, ${DEFAULT_PROPS_MOCK.date}`;

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

    expect(projectInformationTechStack.children.length).toBe(
      DEFAULT_PROPS_MOCK.techStack.length
    );

    expect(projectInformationName).toHaveTextContent(
      DEFAULT_PROPS_MOCK.projectName
    );
    expect(projectInformationDate).toHaveTextContent(correctDateString);
    expect(projectInformationParagraphOne).toHaveTextContent(
      DEFAULT_PROPS_MOCK.paragraphs[0]
    );
    expect(projectInformationParagraphTwo).toHaveTextContent(
      DEFAULT_PROPS_MOCK.paragraphs[1]
    );
    expect(projectInformationParagraphThree).toHaveTextContent(
      DEFAULT_PROPS_MOCK.paragraphs[2]
    );
    expect(projectInformationParagraphFour).toHaveTextContent(
      DEFAULT_PROPS_MOCK.paragraphs[3]
    );
  });
});
