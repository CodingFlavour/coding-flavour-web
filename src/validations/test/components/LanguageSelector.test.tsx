import { render } from "@src/validations/utils/test-utils";
import { act, fireEvent } from "@testing-library/react";
import LanguageSelector from "../../../presentation/components/LanguageSelector";

const handleNewLanguageSpy = jest.fn();
const mockDoFetch = jest.fn();

jest.mock('../../../utils/fetch', () => ({
  __esModule: true,
  default: () => mockDoFetch(),
}));

jest.mock("next/navigation", () => ({
  usePathname: () =>"/es",
  useRouter: () => ({
    push: (path: string) => {
      handleNewLanguageSpy(path);
    },
  }),
}));

const setup = () => {
  const context = render(
    <LanguageSelector />
  );

  return {
    context
  };
};

describe("LanguageSelector Test Suite", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
  });

  it("should render the component", () => {
    const utils = setup();

    const languageSelector = utils.context.getByTestId("language-selector");
    const languageSelectorES = utils.context.getByTestId(
      "language-selector-es"
    );
    const languageSelectorEN = utils.context.getByTestId(
      "language-selector-en"
    );

    expect(languageSelector).toBeInTheDocument();
    expect(languageSelector).toHaveClass("languageSelector")
    expect(languageSelectorES).toBeInTheDocument();
    expect(languageSelectorES).toHaveTextContent("ES");
    expect(languageSelectorEN).toBeInTheDocument();
    expect(languageSelectorEN).toHaveTextContent("EN");
  });
  it("should fire function when clicking ES label", () => {
    const { context } = setup();

    const languageSelectorES = context.getByTestId("language-selector-es");

    act(() => {
      fireEvent.click(languageSelectorES);
    });

    expect(mockDoFetch).toHaveBeenCalledTimes(1);
    expect(handleNewLanguageSpy).toHaveBeenCalledTimes(1);
    expect(handleNewLanguageSpy).toHaveBeenCalledWith("/es/");
  });
  it("should fire function when clicking EN label", () => {
    const { context } = setup();

    const languageSelectorEN = context.getByTestId("language-selector-en");

    act(() => {
      fireEvent.click(languageSelectorEN);
    });

    expect(mockDoFetch).toHaveBeenCalledTimes(1);
    expect(handleNewLanguageSpy).toHaveBeenCalledTimes(1);
    expect(handleNewLanguageSpy).toHaveBeenCalledWith("/en/");
  });
});
