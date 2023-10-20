import { render } from "../utils/test-utils";
import Logo from "../../presentation/components/Logo";

const setup = () => {
  const context = render(<Logo />);

  return {
    context,
  };
};

describe("Logo Test Suite", () => {
  it("should render the component", () => {
    const utils = setup();

    const logo = utils.context.getByTestId("logo");
    const logoIcon = utils.context.getByTestId("logo-icon");
    const logoCompany = utils.context.getByTestId("logo-company");

    expect(logo).toBeInTheDocument();
    expect(logoIcon).toBeInTheDocument();
    expect(logoCompany).toBeInTheDocument();
  });
});
