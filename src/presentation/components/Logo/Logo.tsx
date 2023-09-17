import Image from "next/image";
import React from "react";
import IconCodingFlavour from "@/presentation/assets/icons/icon-coding-flavour.svg";
import styles from "@/presentation/styles/components/_logo.module.scss";

const { logo, logo__image, logo__company } = styles;

const Logo = () => {
  return (
    <div className={logo}>
      <Image
        className={logo__image}
        src={IconCodingFlavour}
        alt="Coding Flavour logo"
      />
      <span className={logo__company}>Coding Flavour</span>
    </div>
  );
};

export default Logo;
