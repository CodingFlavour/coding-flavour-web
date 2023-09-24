import React from "react";
import Image from "next/image";
import IconCodingFlavour from "@/presentation/assets/icons/icon-coding-flavour.svg";
import styles from "@/presentation/styles/components/_logo.module.scss";

const { logo, logo__image, logo__company } = styles;

const Logo = () => {
  return (
    <div className={logo} data-testid={"logo"}>
      <Image
        className={logo__image}
        src={IconCodingFlavour}
        alt="Coding Flavour logo"
        data-testid={"logo-icon"}
      />
      <span className={logo__company} data-testid={"logo-company"}>Coding Flavour</span>
    </div>
  );
};

export default React.memo(Logo);
