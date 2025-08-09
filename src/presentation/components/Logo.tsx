import React from "react";
import Image from "next/image";
import IconCodingFlavour from "@public/icons/icon-coding-flavour.svg";
import styles from "@src/presentation/styles/components/_logo.module.scss";
import Component from "@src/data/Models/Component";

const { logo, logo__image, logo__company } = styles;

const Logo: Component = async ({
  dict
}) => {
  return (
    <a href="/" className={logo} data-testid={"logo"}>
      <Image
        className={logo__image}
        src={IconCodingFlavour}
        alt={dict.iconLogoAlt as string}
        data-testid={"logo-icon"}
      />
      <span className={logo__company} data-testid={"logo-company"}>
        Coding Flavour
      </span>
    </a>
  );
};

export default Logo;
