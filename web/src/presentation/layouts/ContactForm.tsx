"use client";

import React, { useState } from "react";
import styles from "@src/presentation/styles/layouts/_contact-form.module.scss";
import InputText from "../components/InputText";
import CoverButton from "../components/CoverButton";
import { EMAIL_PARAMS, IEmailRequestParams } from "@src/data/Models/Email";
import Component from "@src/data/Models/Component";

const {
  contactForm,
  contactForm__information,
  contactForm__information__header,
  contactForm__information__us,
  contactForm__information__us__location,
  contactForm__form,
  contactForm__form__inputs,
} = styles;

// Product determined that for now we wont show any text
const SHOW_INTRODUCTION_STR = false;

// How to convert to SSR?
const ContactForm: Component = ({ dict }) => {
  const [active, setActive] = useState(false);
  const [finished, setFinished] = useState(false);

  const fullName = dict.fullName as string;
  const email = dict.email as string;
  const message = dict.message as string;
  const send = dict.send as string;
  const sended = dict.sended as string;

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

  // Convert to action in services
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
        e.currentTarget.reset();
      })
      .catch(() => console.log("There has been an error"))
      .finally(() => {
        setActive(false);
      });

    return () => {
      // TODO: Check why isnt aborting fetch after 5 seconds
      setInterval(() => {
        console.log("abort", abort);
        abort.abort();
      }, 5000);
    };
  };

  return (
    <section className={`${contactForm} column_1`} data-testid={"contact-form"}>
      <div className={contactForm__information}>
        <h1
          className={contactForm__information__header}
          data-testid={"contact-form-header"}
        >
          {dict.contact}
        </h1>
        <div className={contactForm__information__us}>
          <p>
            {SHOW_INTRODUCTION_STR && (
              <span data-testid={"contact-form-information-devs"}>
                {dict.hangOutDevs}
              </span>
            )}
            <span
              className={contactForm__information__us__location}
              data-testid={"contact-form-information-devs-location"}
            >
              {dict.hangOutDevsLocation}
            </span>
          </p>
          <p>
            {SHOW_INTRODUCTION_STR && (
              <span data-testid={"contact-form-information-designer"}>
                {dict.hangOutDesigner}
              </span>
            )}
            <span
              className={contactForm__information__us__location}
              data-testid={"contact-form-information-designer-location"}
            >
              {dict.hangOutDesignerLocation}
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
          <InputText id="name" type="text" value={fullName} />
          <InputText id="email" type="text" value={email} />
        </div>
        <InputText id="message" type="textarea" value={message} rows={9} />
        <CoverButton
          isActive={active}
          hasFinished={finished}
          toggleHasFinished={setFinished}
          altTextSended={sended}
          text={send}
        />
      </form>
    </section>
  );
};

export default ContactForm;
