import ContactUs from "@src/presentation/layouts/ContactUsCTA";
import { i18n } from "i18n.config";
import { loadDict, render } from "../../utils/test-utils";

jest.mock("../../../src/hooks/useI18N", () => ({
  __esModule: true,
  default: () => ({
    languageActive: i18n.defaultLocale,
  }),
}));

const setup = async () => {
  const common = await loadDict();

  const context = render(<ContactUs dict={common} />);

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
