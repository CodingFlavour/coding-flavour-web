import ContactUs from "@/presentation/layouts/ContactUsCTA";
import { render } from "@/validations/utils/test-utils";

const setup = () => {
  const context = render(<ContactUs />);

  return {
    context,
  };
};

describe("Contact Us Test Suite", () => {
  it("should render the component", () => {
    const utils = setup();

    const contactUs = utils.context.getByTestId("contact-us");
    const contactUsWrapper = utils.context.getByTestId("contact-us-wrapper");

    expect(contactUs).toBeInTheDocument();
    expect(contactUsWrapper).toBeInTheDocument();

    expect(contactUsWrapper.children.length).toBe(2);
  });
});
