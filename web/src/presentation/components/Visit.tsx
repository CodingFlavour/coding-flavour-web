import IconArrowUpRight from "@public/icons/icon-arrow-up-right.svg";
import styles from "@src/presentation/styles/components/_visit.module.scss";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
    <div className={linkClassName} data-testid={"visit"}>
      <Link href={href} target={target}>
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
      </Link>
    </div>
  );
};

export default React.memo(Visit);
