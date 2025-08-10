import { getDictionary } from "@src/data/locales/dict/dict";
import ContactForm from "@src/presentation/layouts/ContactForm";
import { render } from "../../utils/test-utils";
import { i18n } from "i18n.config";

// TODO This will change for real keys
const I18N = {
  CONTACT: "Contact",
  DEVS: "Hang out for a beer with devs in",
  DEVS_LOCATION: "Madrid, Spain",
  DESIGNER: "Drink coffee with designer in",
  DESIGNER_LOCATION: "Kielce, Poland",
};

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: () => [false, jest.fn()],
}))

const setup = async () => {
  const dict = await getDictionary(i18n.defaultLocale);
  const common = dict.common;


  const jsx = await ContactForm({
    dict: common,
  });

  const context = render(jsx);

  return {
    context,
  };
};

describe("Contact Form Test Suite", () => {
  it("should render the component", async () => {
    const { context } = await setup();

    const contactForm = context.getByTestId("contact-form");
    const contactFormHeader = context.getByTestId("contact-form-header");
    const contactFormInformationDevs = context.queryByTestId(
      "contact-form-information-devs"
    );
    const contactFormInformationDevsLocation = context.getByTestId(
      "contact-form-information-devs-location"
    );
    const contactFormInformationDesigner = context.queryByTestId(
      "contact-form-information-designer"
    );
    const contactFormInformationDesignerLocation = context.getByTestId(
      "contact-form-information-designer-location"
    );
    const contactFormForm = context.getByTestId("contact-form-form");
    const contactFormFormInputs = context.getByTestId(
      "contact-form-form-inputs"
    );

    expect(contactForm).toBeInTheDocument();
    expect(contactFormHeader).toBeInTheDocument();
    expect(contactFormInformationDevs).not.toBeInTheDocument();
    expect(contactFormInformationDevsLocation).toBeInTheDocument();
    expect(contactFormForm).toBeInTheDocument();
    expect(contactFormFormInputs).toBeInTheDocument();
    expect(contactFormForm.children.length).toBe(3);
    expect(contactFormFormInputs.children.length).toBe(2);
    expect(contactFormHeader).toHaveTextContent(I18N.CONTACT);
    expect(contactFormInformationDevsLocation).toHaveTextContent(
      I18N.DEVS_LOCATION
    );
    expect(contactFormInformationDesigner).not.toBeInTheDocument();
    expect(contactFormInformationDesignerLocation).toHaveTextContent(
      I18N.DESIGNER_LOCATION
    );
  });
});
