import React from "react";
import styles from "@src/presentation/styles/layouts/_footer.module.scss";
import Copyright from "../components/Copyright/Copyright";
import IconXPink from "@public/icons/icon-x-pink.svg";
import IconLinkedinPink from "@public/icons/icon-linkedin-pink.svg";
import Image from "next/image";
import Link from "next/link";

const { footer, footer__socials, footer__wrapper } = styles;

const Footer = () => {
  return (
    <footer className={footer}>
      <div className={`${footer__wrapper} column_1`}>
        <Copyright />
        <div className={footer__socials}>
          <Link href={"https://x.com/CodingFlavour"} target="_blank">
            <Image src={IconXPink} alt="X" />
          </Link>
          <Link href={"https:/linkedin.com/CodingFlavour"} target="_blank">
            <Image src={IconLinkedinPink} alt="Linkedin" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
