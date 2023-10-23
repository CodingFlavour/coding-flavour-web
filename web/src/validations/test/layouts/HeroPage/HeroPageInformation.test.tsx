import HeroPageInformation from "@src/presentation/layouts/HeroPage/HeroPageInformation";
import { render } from "@src/validations/utils/test-utils";

const setup = () => {
  const context = render(<HeroPageInformation />);

  return {
    context,
  };
};

describe("Hero Page Information Test Suite", () => {
  it("should render the component", () => {
    const utils = setup();

    const information = utils.context.getByTestId("information");
    const informationParagraph = utils.context.getByTestId(
      "information-paragraph"
    );
    const informationImage = utils.context.getByTestId("information-image");

    expect(information).toBeInTheDocument();
    expect(informationParagraph).toBeInTheDocument();
    expect(informationImage).toBeInTheDocument();

    // expect(informationParagraph).toHaveTextContent("Coding Flavour"); TODO When text is setted on translations
  });
});
