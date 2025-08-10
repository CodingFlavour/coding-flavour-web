import Header from "../../../src/presentation/layouts/Header";
import { render } from "../../utils/test-utils";

interface ISetup {
  state: boolean;
}

const MOCK_I18N = {
  iconLogoAlt: "iconLogoAlt"
}

const mockLanguageSelector = jest.fn();
const mockNavbar = jest.fn();
const mockUseState = jest.fn(() => [false, jest.fn()]);

jest.mock("react", () => {
  const originalModule = jest.requireActual("react");
  return {
    ...originalModule,
    useState: () => mockUseState(),
  };
});

jest.mock("../../../src/presentation/components/Navbar", () => ({
  __esModule: true,
  default: (props: any) => {
    mockNavbar(props);
    return <div data-testid="mock-navbar">Mocked Navbar</div>;
  },
}));

jest.mock("../../../src/presentation/components/LanguageSelector", () => ({
  __esModule: true,
  default: (props: any) => {
    mockLanguageSelector(props);
    return <div data-testid="mock-language-selector">Mocked Language Selector</div>;
  },
}));

jest.mock("../../../src/presentation/components/Logo", () => ({
  __esModule: true,
  default: (props: any) => {
    return <div data-testid="mock-logo">Mocked Logo</div>;
  },
}));

const setup = ({ state }: ISetup) => {
  mockUseState.mockImplementationOnce(() => [state, jest.fn()]);

  const context = render(<Header dict={MOCK_I18N} />);

  return {
    context,
  };
};

describe("Header Test Suite", () => {
  it("should render the component", () => {
    const utils = setup({
      state: false,
    });

    const header = utils.context.getByTestId("header");
    const headerWrapper = utils.context.getByTestId("header-wrapper");
    const headerMenu = utils.context.getByTestId("header-menu");
    const headerMenuIconOpen = utils.context.getByTestId(
      "header-menu-icon-open"
    );
    const headerMenuIconClose = utils.context.getByTestId(
      "header-menu-icon-close"
    );

    expect(header).toBeInTheDocument();
    expect(headerWrapper).toBeInTheDocument();
    expect(headerMenu).toBeInTheDocument();
    expect(headerMenuIconOpen).toBeInTheDocument();
    expect(headerMenuIconClose).toBeInTheDocument();

    expect(headerWrapper.children.length).toBe(3);
    expect(headerMenu.children.length).toBe(2);
  });
});
