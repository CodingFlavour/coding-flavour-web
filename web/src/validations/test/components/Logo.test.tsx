import { getDictionary } from "@src/data/locales/dict/dict";
import { render } from "@src/validations/utils/test-utils";
import { i18n } from "../../../../../i18n.config";
import Logo from "../../../presentation/components/Logo";

const setup = async () => {
  const dict = await getDictionary(i18n.defaultLocale);
  const common = await dict.common;

  const jsx = await Logo({
    dict: common
  });

  const context = render(jsx);

  return {
    context,
  };
};


describe("Logo Test Suite", () => {
  it("should render the component", async () => {
    const { context } = await setup();

    const logo = context.getByTestId("logo");
    const logoIcon = context.getByTestId("logo-icon");
    const logoCompany = context.getByTestId("logo-company");

    expect(logo).toBeInTheDocument();
    expect(logoIcon).toBeInTheDocument();
    expect(logoCompany).toBeInTheDocument();
  });
});
