import { getDictionary } from "@src/data/locales/dict/dict";
import HeroPage from "@src/presentation/layouts/HeroPage/HeroPage";
import { render } from "@src/validations/utils/test-utils";
import { i18n } from "i18n.config";

const setup = async () => {
  const dict = await getDictionary(i18n.defaultLocale);
  const common = dict.common;
  const context = render(<HeroPage dict={common}/>);

  return {
    context,
    common
  };
};

describe("Hero Page Test Suite", () => {
  it("should render the component", async () => {
    const { context, common } = await setup();

    const heroPage = context.getByTestId("hero-page");
    const heroPagePresentation = context.getByTestId("hero-page-presentation");
    const heroPagePresentationScroll = context.getByTestId("hero-page-presentation-scroll");
    const heroPageHeader = context.getByTestId("hero-page-header");
    const heroPageSubheader = context.getByTestId("hero-page-subheader");

    expect(heroPage).toBeInTheDocument();
    expect(heroPagePresentation).toBeInTheDocument();
    expect(heroPagePresentationScroll).toBeInTheDocument();
    expect(heroPageHeader).toBeInTheDocument();
    expect(heroPageSubheader).toBeInTheDocument();
    
    expect(heroPage.children.length).toBe(2);
    expect(heroPagePresentation.children.length).toBe(2);

    expect(heroPageHeader).toHaveTextContent('Coding Flavour');
    expect(heroPageSubheader).toHaveTextContent(common.creativeTeam as string);

    expect(heroPagePresentationScroll.getAttribute('alt')).toBe(common.scrollAlt);
  });
});
