import React from "react";
import styles from "@/presentation/styles/layouts/_contact-us-cta.module.scss";
import Visit from "../components/Visit";
import ImagePreviewThree from "@/presentation/assets/images/image-preview-3.jpg";
import ImagePreviewFour from "@/presentation/assets/images/image-preview-4.png";
import Image from "next/image";

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

const ContactUsCTA = () => {
  return (
    <section className={contactUs} data-testid={"contact-us"}>
      <div className={contactUs__wrapper}>
        <div className={contactUs__text}>
          <div className={contactUs__text__first}>
            <span>Let's build</span>
            <Image
              className={contactUs__text__first__image}
              src={ImagePreviewThree}
              alt={""}
              width={324}
              height={353}
            />
          </div>
          <span className={contactUs__text__middle}>something</span>
          <div className={contactUs__text__last}>
            <span>together</span>
            <Image
              className={contactUs__text__last__image}
              src={ImagePreviewFour}
              alt={""}
              width={231}
              height={275}
            />
          </div>
        </div>
        <Visit text="Contact us" href="/contact-us" target="_self" />
      </div>
    </section>
  );
};

export default ContactUsCTA;
