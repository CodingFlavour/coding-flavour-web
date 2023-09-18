import Image, { StaticImageData } from "next/image";
import styles from "@/presentation/styles/components/_value.module.scss";
import React from "react";

interface IValueData {
	id: string;
	title: string;
	description: string;
	image: StaticImageData;
}

interface IValueProps {
	value: IValueData;
}

const { valueContainer, valueContainer__title, valueContainer__image, valueContainer__description } = styles;

const Value = ({ value }: IValueProps) => {
	return (
		<article className={valueContainer}>
			<Image className={valueContainer__image} src={value.image} alt={`${value.title} image`}></Image>
			<div>
				<h3 className={valueContainer__title}>{value.title}</h3>
				<p className={valueContainer__description}>{value.description}</p>
			</div>
		</article>
	);
};

export default React.memo(Value);
