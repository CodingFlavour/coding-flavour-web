import { getDictionary } from "@src/data/locales/dict/dict";
import ContactUs from "@src/presentation/layouts/ContactUsCTA";
import { render } from "@src/validations/utils/test-utils";
import { i18n } from "../../../../../i18n.config";

const setup = async () => {
  const dict = await getDictionary(i18n.defaultLocale);
  const common = await dict.common;

  const jsx = await ContactUs( {
    dict: common,
  });

  const context = render(jsx);

  return {
    context,
  };
};

describe("Contact Us Test Suite", () => {
  it("should render the component", async () => {
    const { context } = await setup();

    const contactUs = context.getByTestId("contact-us");
    const contactUsWrapper = context.getByTestId("contact-us-wrapper");

    expect(contactUs).toBeInTheDocument();
    expect(contactUsWrapper).toBeInTheDocument();

    expect(contactUsWrapper.children.length).toBe(2);
  });
});
