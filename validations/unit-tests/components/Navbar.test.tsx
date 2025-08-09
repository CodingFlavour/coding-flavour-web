import { render } from "@src/validations/utils/test-utils";
import Navbar from "../../../presentation/components/Navbar";

const HTML_FOR = 'mobile-menu-handler';
const MENU_LIST = [{
  id: 'default-1',
  label: 'Default 1',
  path: '/default-1',
}, {
  id: 'default-2',
  label: 'Default 2',
  path: '/default-2',
}];

const mockUsePathname = jest.fn(() => '/default-1');
const mockUseRouter = jest.fn();

jest.mock("next/navigation", () => ({
  __esModule: true,
  usePathname: () => mockUsePathname(),
  useRouter: () => ({
    push: mockUseRouter,
  }),
}));



const setup = () => {
  const context = render(
    <Navbar
      menuList={MENU_LIST}
      htmlFor={HTML_FOR}
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
      `navbar-list-item-${MENU_LIST[0].id}`
    );
    const navbarListItemDefault = utils.context.getByTestId(
      `navbar-list-item-${MENU_LIST[1].id}`
    );

    expect(navbar).toBeInTheDocument();
    expect(navbarList).toBeInTheDocument();
    expect(navbarList.children.length).toBe(MENU_LIST.length);
    expect(navbarListItemActive).toBeInTheDocument();
    expect(navbarListItemActive).toHaveTextContent(MENU_LIST[0].label);
    expect(navbarListItemActive.classList.length).toBe(2);
    expect(navbarListItemDefault).toBeInTheDocument();
    expect(navbarListItemDefault).toHaveTextContent(MENU_LIST[1].label);
    expect(navbarListItemDefault.classList.length).toBe(1);
  });
});
