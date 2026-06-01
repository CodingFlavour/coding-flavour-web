"use client";

import Component from "@src/data/Models/Component";
import { EMAIL_PARAMS, IEmailRequestParams } from "@src/data/Models/Email";
import useFetch from "@src/hooks/useFetch";
import styles from "@src/presentation/styles/layouts/_contact-form.module.scss";
import React, { useState } from "react";
import CoverButton from "../components/CoverButton";
import InputText from "../components/InputText";

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

const ContactForm: Component = ({ dict }) => {
  const [active, setActive] = useState(false);
  const [finished, setFinished] = useState(false);
  const [finishedMsg, setFinishedMsg] = useState("");
  const doFetch = useFetch();

  const fullName = dict.fullName as string;
  const email = dict.email as string;
  const message = dict.message as string;
  const send = dict.send as string;
  const sended = dict.sended as string;
  const contactFormErrorMessage = dict.contactFormErrorMessage as string;
  const contactFormSuccessMessage = dict.contactFormSuccessMessage as string;

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
    setFinished(false);
    setFinishedMsg("");
    const { from, message, name } = parseEvent(e.target);

    const emailData: IEmailRequestParams = {
      from,
      message,
      name,
      to: "dsanchez",
    };

    doFetch("send-email", "POST", JSON.stringify(emailData), false).then(({ ok, ko }) => {
      if (ko) {
        setFinishedMsg(contactFormErrorMessage);
        setActive(false);
        return;
      }
      if (ok) {
        setFinished(true);
        setFinishedMsg(contactFormSuccessMessage);
      }
      setActive(false);
    });
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
        <p data-testid={"contact-form-finished-message"}>
          {finishedMsg}
        </p>
      </form>
    </section>
  );
};

export default ContactForm;
