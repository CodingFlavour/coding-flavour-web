import styles from "@src/presentation/styles/components/_value.module.scss";
import Image from "next/image";
import React from "react";

interface IValueData {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface IValueProps {
  value: IValueData;
}

const {
  valueContainer,
  valueContainer__title,
  valueContainer__image,
  valueContainer__description,
} = styles;

const Value: React.FC<IValueProps> = ({ value }) => {
  return (
    <article className={valueContainer}>
      <Image
        className={valueContainer__image}
        src={value.image}
        alt={`${value.title} image`}
        width={100}
        height={100}
      ></Image>
      <div>
        <h3 className={valueContainer__title}>{value.title}</h3>
        <p className={valueContainer__description}>{value.description}</p>
      </div>
    </article>
  );
};

export default React.memo(Value);
