'use client';

import IconArrowUpRight from "@public/icons/icon-arrow-up-right.svg";
import useI18N from "@src/hooks/useI18N";
import styles from "@src/presentation/styles/components/_visit.module.scss";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const { visit, visit__link, visit__icon, visit__text, smallVisit } = styles;

type Size = "small" | "regular";

export interface IVisitProps {
  text: string;
  href: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
  size?: Size;
  isExternal?: boolean;
}

const Visit: React.FC<IVisitProps> = ({
  text,
  href,
  target = "_blank",
  size = "regular",
  isExternal
}) => {
  const { languageActive } = useI18N();

  const linkClassName = `${visit} ${size === "small" ? smallVisit : ""}`;
  const finalHref = isExternal ? href : `/${languageActive}${href}`;

  return (
    <div className={linkClassName} data-testid={"visit"}>
      <Link className={visit__link} href={finalHref} target={target} data-testid={`visit-link`}>
        <span data-testid={"visit-text"} className={visit__text}>
          {text}
        </span>
        <Image
          className={visit__icon}
          src={IconArrowUpRight}
          alt={text}
          width={50}
          height={50}
          data-testid={"visit-image"}
        />
      </Link>
    </div>
  );
};

export default Visit
