import ImagePreviewEight from "@public/images/image-preview-8.png";
import Component from "@src/data/Models/Component";
import styles from "@src/presentation/styles/layouts/_hero-page/_hero-page-information.module.scss";
import Image from "next/image";

const { information, information__wrapper, information__text } = styles;

const HeroPageInformation: Component = ({ dict }) => {
  return (
    <div className={information} data-testid={"hero-page-information"}>
      <div className={`${information__wrapper} column_1`}>
        <div className={information__text}>
          <p data-testid={"hero-page-information-paragraph-one"}>{dict.heroPageOne}</p>
          <p data-testid={"hero-page-information-paragraph-two"}>{dict.heroPageTwo}</p>
          <p data-testid={"hero-page-information-paragraph-three"}>
            {dict.heroPageThree}
          </p>
        </div>
        <Image
          src={ImagePreviewEight}
          alt="Work in progress"
          data-testid={"hero-page-information-image"}
        />
      </div>
    </div>
  );
};

export default HeroPageInformation;
