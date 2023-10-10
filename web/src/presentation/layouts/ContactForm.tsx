'use client'

import React, { useState } from "react";
import styles from "@src/presentation/styles/layouts/_contact-form.module.scss";
import InputText from "../components/InputText";
import CoverButton from "../components/CoverButton";
import { EMAIL_PARAMS, IEmailRequestParams } from "@src/data/Models/Email";

const {
  contactForm,
  contactForm__information,
  contactForm__information__header,
  contactForm__information__us,
  contactForm__information__us__location,
  contactForm__form,
  contactForm__form__inputs,
} = styles;

// TODO: How to convert to SSR?
const ContactForm = () => {
  const [active, setActive] = useState(false);
  const [finished, setFinished] = useState(false);

  const findObject = (target: EventTarget, param: string) => {
    return Object.values(target).find((field) => field.id === param)
      .value as string;
  };

  const parseEvent = (target: EventTarget) => {
    const from = findObject(target, EMAIL_PARAMS.EMAIL);
    const message = findObject(target, EMAIL_PARAMS.MESSAGE);
    const name = findObject(target, EMAIL_PARAMS.NAME);

    return { from, message, name };
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setActive(true);
    const { from, message, name } = parseEvent(e.target);

    const emailData: IEmailRequestParams = {
      from,
      message,
      name,
      to: "dsanchez",
    };

    const abort = new AbortController();
    fetch("https://codingflavoursmtp.onrender.com/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
      signal: abort.signal,
    })
      .then(() => {
        setFinished(true);
      })
      .catch(() => console.log("There has been an error"))
      .finally(() => setActive(false));

    return () => {
      setInterval(() => {
        abort.abort();
      }, 5000);
    };
  };

  return (
    <section className={contactForm} data-testid={"contact-form"}>
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
        <CoverButton
          isActive={active}
          hasFinished={finished}
          toggleHasFinished={setFinished}
        />
      </form>
    </section>
  );
};

export default ContactForm;
