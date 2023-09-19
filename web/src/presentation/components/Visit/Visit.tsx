'use client'
import React from "react";
import Image from "next/image";
import IconArrowUpRight from "@/presentation/assets/icons/icon-arrow-up-right.svg";
import styles from "@/presentation/styles/components/_visit.module.scss";

const { visit, visit__icon } = styles;

export interface IVisitProps {
  text: string;
  href: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
}

const Visit: React.FC<IVisitProps> = ({ text, href, target = "_blank" }) => {
  return (
    <a href={href} target={target} className={visit} data-testid={"visit"}>
      <span data-testid={"visit-text"}>{text}</span>
      <Image
        className={visit__icon}
        src={IconArrowUpRight}
        alt="Visit"
        width={40}
        height={40}
        data-testid={"visit-image"}
      />
    </a>
  );
};

export default React.memo(Visit);
