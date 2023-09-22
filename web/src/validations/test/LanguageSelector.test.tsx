import { render } from "../utils/test-utils";
import { act, fireEvent } from "@testing-library/react";
import LanguageSelector from "../../presentation/components/LanguageSelector/LanguageSelector";

const setup = (isLeftActive: boolean) => {
  const handleNewLanguageSpy = jest.fn();
  const context = render(
    <LanguageSelector
      handleNewLanguage={handleNewLanguageSpy}
      isLeftActive={isLeftActive}
    />
  );

  return {
    context,
    handleNewLanguageSpy,
  };
};

describe("LanguageSelector Test Suite", () => {
  it("should render the component", () => {
    const utils = setup(false);

    const languageSelector = utils.context.getByTestId("language-selector");
    const languageSelectorES = utils.context.getByTestId(
      "language-selector-es"
    );
    const languageSelectorEN = utils.context.getByTestId(
      "language-selector-en"
    );

    expect(languageSelector).toBeInTheDocument();
    expect(languageSelector.classList.length).toBe(1);
    expect(languageSelectorES).toBeInTheDocument();
    expect(languageSelectorES).toHaveTextContent("ES");
    expect(languageSelectorEN).toBeInTheDocument();
    expect(languageSelectorEN).toHaveTextContent("EN");
  });
  it("should have another className if left is active", () => {
    const utils = setup(true);

    const languageSelector = utils.context.getByTestId("language-selector");

    expect(languageSelector.classList.length).toBe(2);
  });
  it("should fire function when clicking ES label", () => {
    const { context, handleNewLanguageSpy } = setup(false);

    const languageSelectorES = context.getByTestId("language-selector-es");

    act(() => {
      fireEvent.click(languageSelectorES);
    });

    expect(handleNewLanguageSpy).toBeCalled();
  });
  it("should fire function when clicking EN label", () => {
    const { context, handleNewLanguageSpy } = setup(false);

    const languageSelectorEN = context.getByTestId("language-selector-en");

    act(() => {
      fireEvent.click(languageSelectorEN);
    });

    expect(handleNewLanguageSpy).toBeCalled();
  });
});
