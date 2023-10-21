import ContactForm from "@/presentation/layouts/ContactForm";
import { render } from "@/validations/utils/test-utils";

// TODO This will change for real keys
const I18N = {
  CONTACT: "Contact",
  DEVS: "Hang out for a beer with devs in",
  DEVS_LOCATION: "Madrid, Spain",
  DESIGNER: "Drink coffee with designer in",
  DESIGNER_LOCATION: "Kielce, Poland",
};

const setup = () => {
  const context = render(<ContactForm />);

  return {
    context,
  };
};

describe("Contact Form Test Suite", () => {
  it("should render the component", () => {
    const utils = setup();

    const contactForm = utils.context.getByTestId("contact-form");
    const contactFormHeader = utils.context.getByTestId("contact-form-header");
    const contactFormInformationDevs = utils.context.getByTestId(
      "contact-form-information-devs"
    );
    const contactFormInformationDevsLocation = utils.context.getByTestId(
      "contact-form-information-devs-location"
    );
    const contactFormInformationDesigner = utils.context.getByTestId(
      "contact-form-information-designer"
    );
    const contactFormInformationDesignerLocation = utils.context.getByTestId(
      "contact-form-information-designer-location"
    );
    const contactFormForm = utils.context.getByTestId("contact-form-form");
    const contactFormFormInputs = utils.context.getByTestId(
      "contact-form-form-inputs"
    );

    expect(contactForm).toBeInTheDocument();
    expect(contactFormHeader).toBeInTheDocument();
    expect(contactFormInformationDevs).toBeInTheDocument();
    expect(contactFormInformationDevsLocation).toBeInTheDocument();
    expect(contactFormForm).toBeInTheDocument();
    expect(contactFormFormInputs).toBeInTheDocument();
    expect(contactFormForm.children.length).toBe(3);
    expect(contactFormFormInputs.children.length).toBe(2);
    expect(contactFormHeader).toHaveTextContent(I18N.CONTACT);
    expect(contactFormInformationDevs).toHaveTextContent(I18N.DEVS);
    expect(contactFormInformationDevsLocation).toHaveTextContent(
      I18N.DEVS_LOCATION
    );
    expect(contactFormInformationDesigner).toHaveTextContent(I18N.DESIGNER);
    expect(contactFormInformationDesignerLocation).toHaveTextContent(
      I18N.DESIGNER_LOCATION
    );
  });
});
