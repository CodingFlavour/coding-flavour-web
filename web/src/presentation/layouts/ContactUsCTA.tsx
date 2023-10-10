import React from "react";
import styles from "@src/presentation/styles/layouts/_contact-us-cta.module.scss";
import Visit from "../components/Visit";
import ImagePreviewThree from "@public/images/image-preview-3.jpg";
import ImagePreviewFour from "@public/images/image-preview-4.png";
import Image from "next/image";
import Component from "@src/data/Models/Component";

const {
  contactUs,
  contactUs__wrapper,
  contactUs__text,
  contactUs__text__first,
  contactUs__text__first__image,
  contactUs__text__middle,
  contactUs__text__last,
  contactUs__text__last__image,
} = styles;

const ContactUsCTA: Component = ({ dict }) => {
  const { letsBuild, something, together, contactUs: contactUsLabel } = dict as {
    [x: string]: string;
  };

  return (
    <section className={contactUs} data-testid={"contact-us"}>
      <div className={contactUs__wrapper} data-testid={"contact-us-wrapper"}>
        <div className={contactUs__text}>
          <div className={contactUs__text__first}>
            <span>{letsBuild}</span>
            <Image
              className={contactUs__text__first__image}
              src={ImagePreviewThree}
              alt={""}
              width={324}
              height={353}
            />
          </div>
          <span className={contactUs__text__middle}>{something}</span>
          <div className={contactUs__text__last}>
            <span>{together}</span>
            <Image
              className={contactUs__text__last__image}
              src={ImagePreviewFour}
              alt={""}
              width={231}
              height={275}
            />
          </div>
        </div>
        <Visit text={contactUsLabel} href="/contact" target="_self" />
      </div>
    </section>
  );
};

export default ContactUsCTA;
