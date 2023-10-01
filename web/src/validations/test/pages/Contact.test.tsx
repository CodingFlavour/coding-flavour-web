import Contact from "@/app/contact/page";
import { render } from "@/validations/utils/test-utils";

const setup = () => {
  const context = render(<Contact />);

  return {
    context,
  };
};

describe("Contact Test Suite", () => {
  it("should render the component", () => {
    const utils = setup();

    const contact = utils.context.getByTestId("contact");

    expect(contact).toBeInTheDocument();

    expect(contact.children.length).toBe(1);
  });
});
