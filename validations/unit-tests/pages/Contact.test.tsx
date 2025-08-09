import Contact from "@src/app/[lang]/contact/page";
import { render } from "@src/validations/utils/test-utils";
import { i18n } from "../../../../i18n.config";

const setup = async () => {
  const jsx = await Contact({
    params: {
      lang: i18n.defaultLocale,
    },
  });

  const context = render(jsx);

  return {
    context,
  };
};

describe("Contact Test Suite", () => {
  it("should render the component", async () => {
    const { context } = await setup();

    const contact = context.getByTestId("contact");

    expect(contact).toBeInTheDocument();

    expect(contact.children.length).toBe(1);
  });
});
