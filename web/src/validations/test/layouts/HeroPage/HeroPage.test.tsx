import HeroPage from "@src/presentation/layouts/HeroPage/HeroPage";
import { render } from "@src/validations/utils/test-utils";

const MOCK_I18N = {
    creativeTeam: 'creativeTeam',
    scroll: 'scroll'
};

const setup = () => {
  const context = render(<HeroPage dict={MOCK_I18N}/>);

  return {
    context,
  };
};

describe("Hero Page Test Suite", () => {
  it("should render the component", () => {
    const utils = setup();

    const heroPage = utils.context.getByTestId("hero-page");
    const heroPagePresentation = utils.context.getByTestId("hero-page-presentation");
    const heroPagePresentationScroll = utils.context.getByTestId("hero-page-presentation-scroll");
    const heroPageHeader = utils.context.getByTestId("hero-page-header");
    const heroPageSubheader = utils.context.getByTestId("hero-page-subheader");

    expect(heroPage).toBeInTheDocument();
    expect(heroPagePresentation).toBeInTheDocument();
    expect(heroPagePresentationScroll).toBeInTheDocument();
    expect(heroPageHeader).toBeInTheDocument();
    expect(heroPageSubheader).toBeInTheDocument();
    
    expect(heroPage.children.length).toBe(2);
    expect(heroPagePresentation.children.length).toBe(2);

    expect(heroPageHeader).toHaveTextContent('Coding Flavour');
    expect(heroPageSubheader).toHaveTextContent(MOCK_I18N.creativeTeam);

    expect(heroPagePresentationScroll.getAttribute('alt')).toBe(MOCK_I18N.scroll);
  });
});
