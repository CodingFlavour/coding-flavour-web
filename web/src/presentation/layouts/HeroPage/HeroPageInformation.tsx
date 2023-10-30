import React from "react";
import styles from "@src/presentation/styles/layouts/_hero-page/_hero-page-information.module.scss";
import ImagePreviewEight from "@public/images/image-preview-8.png";
import Image from "next/image";
import Component from "@src/data/Models/Component";

const { information, information__wrapper, information__text } = styles;

const HeroPageInformation: Component = ({ dict }) => {
  return (
    <div className={information} data-testid={"information"}>
      <div className={`${information__wrapper} column_1`}>
        <div className={information__text}>
          <p data-testid={"information-paragraph-one"}>{dict.heroPageOne}</p>
          <p data-testid={"information-paragraph-two"}>{dict.heroPageTwo}</p>
          <p data-testid={"information-paragraph-three"}>
            {dict.heroPageThree}
          </p>
        </div>
        <Image
          src={ImagePreviewEight}
          alt=""
          data-testid={"information-image"}
        />
      </div>
    </div>
  );
};

export default HeroPageInformation;
