import React from "react";
import Image from "next/image";
import IconArrowUpRight from "@/presentation/assets/icons/icon-arrow-up-right.svg";
import styles from "@/presentation/styles/components/_visit.module.scss";

const { visit, visit__icon, visit__text, smallVisit } = styles;

type Size = "small" | "regular";

export interface IVisitProps {
  text: string;
  href: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
  size?: Size;
}

const SIZES = {
  small: 24,
  regular: 40,
};

const Visit: React.FC<IVisitProps> = ({
  text,
  href,
  target = "_blank",
  size = "regular",
}) => {
  const linkClassName = `${visit} ${size === "small" ? smallVisit : ""}`;
  const proportions = size === "small" ? SIZES.small : SIZES.regular;

  return (
    <a
      href={href}
      target={target}
      className={linkClassName}
      data-testid={"visit"}
    >
      <span data-testid={"visit-text"} className={visit__text}>
        {text}
      </span>
      <Image
        className={visit__icon}
        src={IconArrowUpRight}
        alt={text}
        width={proportions}
        height={proportions}
        data-testid={"visit-image"}
      />
    </a>
  );
};

export default React.memo(Visit);
