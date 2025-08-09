import React from "react";
import styles from "@src/presentation/styles/layouts/_hero-page/_hero-page.module.scss";
import RotateText from "../../components/RotateText";
import Component from "@src/data/Models/Component";
import ScrollGif from "@public/images/scroll.gif";
import Image from "next/image";
import HeroPageInformation from "./HeroPageInformation";

const {
  heroPage,
  heroPage__presentation,
  heroPage__presentation__scroll,
  heroPage__introduction,
  heroPage__introduction__header,
  heroPage__introduction__subheader,
} = styles;

const HeroPage: Component = ({ dict }) => {
  return (
    <section className={`${heroPage}`} data-testid={'hero-page'}>
      <div className={`${heroPage__presentation}`}>
        <div className="column_1" data-testid={'hero-page-presentation'}>
          <div className={heroPage__introduction}>
            <h1 className={heroPage__introduction__header} data-testid={'hero-page-header'}>Coding Flavour</h1>
            <h2 className={heroPage__introduction__subheader} data-testid={'hero-page-subheader'}>
              {dict.creativeTeam}
            </h2>
          </div>
          <RotateText dict={dict} />
        </div>
        <Image
          className={heroPage__presentation__scroll}
          src={ScrollGif}
          alt={dict.scrollAlt as string}
          width={64}
          height={64}
          data-testid={'hero-page-presentation-scroll'}
        />
      </div>
      <HeroPageInformation dict={dict} />
    </section>
  );
};

export default HeroPage;
