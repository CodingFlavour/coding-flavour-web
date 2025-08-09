'use client';

import IconCodingFlavour from "@public/icons/icon-coding-flavour.svg";
import Component from "@src/data/Models/Component";
import useI18N from "@src/hooks/useI18N";
import styles from "@src/presentation/styles/components/_logo.module.scss";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const { logo, logo__image, logo__company } = styles;

const Logo: Component = ({
  dict
}) => {
  const { languageActive } = useI18N();

  return (
    <Link href={`/${languageActive}`} className={logo} data-testid={"logo"}>
      <Image
        className={logo__image}
        src={IconCodingFlavour}
        alt={dict.iconLogoAlt as string}
        data-testid={"logo-icon"}
      />
      <span className={logo__company} data-testid={"logo-company"}>
        Coding Flavour
      </span>
    </Link>
  );
};

export default Logo;
