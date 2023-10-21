import Component from "@src/data/Models/Component";
import styles from "@src/presentation/styles/layouts/about/_about-introduction.module.scss";
import React from "react";

const { about, about__header, about__description } = styles;

const AboutIntroduction: Component = ({ dict }) => {
  return (
    <div className={`${about} column_1`}>
      <h1 className={about__header}>{dict.aboutTheTeamHeading}</h1>
      <p className={about__description}>{dict.aboutTheTeamDescription}</p>
    </div>
  );
};

export default React.memo(AboutIntroduction);
