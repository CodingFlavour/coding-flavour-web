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

    expect(contactUs).toBeInTheDocument();
    expect(contactUs.children.length).toBe(2);
  });
});
