import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Navbar, { INavbar } from "./Navbar";

const DEFAULT_NAVBAR_MOCK: INavbar = {
  menuOptions: ["Default 1", "Default 2", "Default 3"],
  activeId: 0,
};
const setup = () => {
  const context = render(
    <Navbar
      menuOptions={DEFAULT_NAVBAR_MOCK.menuOptions}
      activeId={DEFAULT_NAVBAR_MOCK.activeId}
    />
  );

  return {
    context,
  };
};

describe("Navbar Test Suite", () => {
  it("should render the component", () => {
    const utils = setup();

    const navbar = utils.context.getByTestId("navbar");
    const navbarList = utils.context.getByTestId("navbar-list");
    const navbarListItemActive = utils.context.getByTestId(
      `navbar-list-item-${DEFAULT_NAVBAR_MOCK.menuOptions[0]}`
    );
    const navbarListItemDefault = utils.context.getByTestId(
      `navbar-list-item-${DEFAULT_NAVBAR_MOCK.menuOptions[1]}`
    );

    expect(navbar).toBeInTheDocument();
    expect(navbarList).toBeInTheDocument();
    expect(navbarList.children.length).toBe(
      DEFAULT_NAVBAR_MOCK.menuOptions.length
    );
    expect(navbarListItemActive).toBeInTheDocument();
    expect(navbarListItemActive).toHaveTextContent(
      DEFAULT_NAVBAR_MOCK.menuOptions[0]
    );
    expect(navbarListItemActive.classList.length).toBe(2);
    expect(navbarListItemDefault).toBeInTheDocument();
    expect(navbarListItemDefault).toHaveTextContent(
      DEFAULT_NAVBAR_MOCK.menuOptions[1]
    );
    expect(navbarListItemDefault.classList.length).toBe(1);
  });
});