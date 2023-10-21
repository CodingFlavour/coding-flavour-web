import React from "react";
import styles from "@/presentation/styles/layouts/_contact-form.module.scss";
import InputText from "../components/InputText";
import CoverButton from "../components/CoverButton";

const {
  contactForm,
  contactForm__information,
  contactForm__information__header,
  contactForm__information__us,
  contactForm__information__us__location,
  contactForm__form,
  contactForm__form__inputs,
} = styles;

const ContactForm = () => {
  // TODO: Probably this will come via props, so I dont care right now about the typing
  const handleOnSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className={contactForm} data-testid={"contact-form"}>
      <div className={contactForm__information}>
        <h1
          className={contactForm__information__header}
          data-testid={"contact-form-header"}
        >
          Contact
        </h1>
        <div className={contactForm__information__us}>
          <p>
            <span data-testid={"contact-form-information-devs"}>
              Hang out for a beer with devs in
            </span>
            <span
              className={contactForm__information__us__location}
              data-testid={"contact-form-information-devs-location"}
            >
              Madrid, Spain
            </span>
          </p>
          <p>
            <span data-testid={"contact-form-information-designer"}>
              Drink coffee with designer in
            </span>
            <span
              className={contactForm__information__us__location}
              data-testid={"contact-form-information-designer-location"}
            >
              Kielce, Poland
            </span>
          </p>
        </div>
      </div>
      <form
        className={contactForm__form}
        onSubmit={handleOnSubmit}
        data-testid={"contact-form-form"}
      >
        <div
          className={contactForm__form__inputs}
          data-testid={"contact-form-form-inputs"}
        >
          <InputText id="name" type="text" value="Full Name" />
          <InputText id="email" type="text" value="E-mail" />
        </div>
        <InputText id="message" type="textarea" value="Message" rows={9} />
        <CoverButton />
      </form>
    </div>
  );
};

export default ContactForm;
