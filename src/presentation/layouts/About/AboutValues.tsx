import Component from "@src/data/Models/Component";
import Values from "@src/data/Statics/values.json";
import Value from "@src/presentation/components/Value";
import styles from "@src/presentation/styles/layouts/about/_about-values.module.scss";
import React from "react";

const { values, values__header, values__display } = styles;

const AboutValues: Component = ({ dict }) => {
  const valuesData = Values.values.map((value) => ({
    ...value,
    title: dict[value.id] as string,
    description: dict[value.description] as string,
  }));

  return (
    <div className={`${values} column_1`}>
      <h2 className={values__header}>{dict.ourValues}</h2>
      <div className={values__display}>
        {valuesData.map((value) => (
          <Value value={value} key={value.id} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(AboutValues);
