import React from "react";
import styles from "@src/presentation/styles/layouts/_hero-page/_hero-page-information.module.scss";
import ImagePreviewEight from "@public/images/image-preview-8.png";
import Image from "next/image";

const { information, information__wrapper } = styles;

const HeroPageInformation = () => {
  return (
    <div className={information} data-testid={"information"}>
      <div className={`${information__wrapper} column_1`}>
        <p data-testid={"information-paragraph"}>
          Lorem ipsum dolor sit amet consectetur. Aliquam risus ipsum lobortis
          adipiscing sodales. Felis leo tellus integer facilisis non consectetur
          facilisis purus eget. Urna nec mattis enim massa interdum et eu mi.
          Egestas justo a nisl vitae cursus. Orci pretium nunc tellus elementum.
          Consequat cursus cras mi scelerisque massa.
        </p>
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
