import Component from "@src/data/Models/Component";
import React from "react";
import styles from "@src/presentation/styles/components/_rotate-text.module.scss";

const { rotateText, rotateText__title, rotateText__dynamic, dynamic } = styles;

const RotateText: Component = ({ dict }) => {
  return (
    <div className={rotateText}>
      <h3 className={rotateText__title}>{dict.weMake}</h3>
      <div className={rotateText__dynamic}>
        <ul className={dynamic}>
          <li>{dict.development}</li>
          <li>{dict.frontEnd}</li>
          <li>{dict.backEnd}</li>
          <li>{dict.design}</li>
          <li>{dict.development}</li>
        </ul>
      </div>
    </div>
  );
};

export default React.memo(RotateText);
