import HeroPageInformation from "@src/presentation/layouts/HeroPage/HeroPageInformation";
import { loadDict, render } from "validations/utils/test-utils";

const setup = async () => {
  const common = await loadDict();

  const context = render(<HeroPageInformation dict={common} />);

  return {
    context,
    common,
  };
};

describe("Hero Page Information Test Suite", () => {
  it("should render the component", async () => {
    const { context, common } = await setup();

    const information = context.getByTestId("hero-page-information");
    const informationParagraphOne = context.getByTestId(
      "hero-page-information-paragraph-one"
    );
    const informationParagraphTwo = context.getByTestId(
      "hero-page-information-paragraph-two"
    );
    const informationParagraphThree = context.getByTestId(
      "hero-page-information-paragraph-three"
    );
    const informationImage = context.getByTestId("hero-page-information-image");

    expect(information).toBeInTheDocument();
    expect(informationParagraphOne).toBeInTheDocument();
    expect(informationParagraphOne.textContent).toBe(common.heroPageOne);
    expect(informationParagraphTwo).toBeInTheDocument();
    expect(informationParagraphTwo.textContent).toBe(common.heroPageTwo);
    expect(informationParagraphThree).toBeInTheDocument();
    expect(informationParagraphThree.textContent).toBe(common.heroPageThree);
    expect(informationImage).toBeInTheDocument();
  });
});
