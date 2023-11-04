import Header from "@src/presentation/layouts/Header";
import { render } from "@src/validations/utils/test-utils";
import React, { useState } from "react";

interface ISetup {
  state: boolean;
}

const MOCK_I18N = {
  iconLogoAlt: "iconLogoAlt"
}

const REGEX_CLASSNAMES = {
  HEADER_BASE: /header/g,
  HEADER_OPEN: /header.*open/g,
  ICON_BASE: /icon/g,
  ICON_HIDDEN: /icon.*icon__hidden/g,
};

jest.mock("react", () => {
  const originalModule = jest.requireActual("react");
  return {
    ...originalModule,
    useState: jest.fn(),
  };
});
const useStateMock = useState as jest.MockedFunction<typeof useState>;

const setup = ({ state }: ISetup) => {
  useStateMock.mockImplementation(() => [state, jest.fn()]);

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


    // expect(headerMenuIconOpen.className).toMatch(REGEX_CLASSNAMES.ICON_BASE);
    // expect(headerMenuIconOpen.className).not.toMatch(
    //   REGEX_CLASSNAMES.ICON_HIDDEN
    // );
    // expect(headerMenuIconClose.className).toMatch(REGEX_CLASSNAMES.ICON_BASE);
    // expect(headerMenuIconClose.className).toMatch(REGEX_CLASSNAMES.ICON_HIDDEN);
  });
  it("should display header with class name for open", () => {
    const utils = setup({
      state: true,
    });

    const header = utils.context.getByTestId("header");

    expect(header.className).toMatch(REGEX_CLASSNAMES.HEADER_BASE);
    expect(header.className).toMatch(REGEX_CLASSNAMES.HEADER_OPEN);
  });
  it("should display icons with classnames swapped", () => {
    const utils = setup({
      state: true,
    });

    const headerMenuIconOpen = utils.context.getByTestId(
      "header-menu-icon-open"
    );
    const headerMenuIconClose = utils.context.getByTestId(
      "header-menu-icon-close"
    );

    expect(headerMenuIconOpen.className).toMatch(REGEX_CLASSNAMES.ICON_BASE);
    expect(headerMenuIconOpen.className).toMatch(REGEX_CLASSNAMES.ICON_HIDDEN);
    expect(headerMenuIconClose.className).toMatch(REGEX_CLASSNAMES.ICON_BASE);
    expect(headerMenuIconClose.className).not.toMatch(
      REGEX_CLASSNAMES.ICON_HIDDEN
    );
  });
});
