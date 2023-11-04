import Component from "@src/data/Models/Component";
import styles from "@src/presentation/styles/layouts/about/_about-introduction.module.scss";
import React from "react";

const { about, about__header, about__description, about__description__text } =
  styles;

const AboutIntroduction: Component = ({ dict }) => {
  return (
    <div className={`${about} column_1`}>
      <h1 className={about__header}>{dict.aboutTheTeamHeading}</h1>
      <div className={about__description}>
        <p className={about__description__text}>
          {dict.aboutTheTeamDescriptionOne}
        </p>
        <p className={about__description__text}>
          {dict.aboutTheTeamDescriptionTwo}
        </p>
      </div>
    </div>
  );
};

export default React.memo(AboutIntroduction);
