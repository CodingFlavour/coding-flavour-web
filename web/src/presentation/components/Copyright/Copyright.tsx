import React from "react";
import Image from "next/image";
import IconCodingFlavour from "@/presentation/assets/icons/icon-coding-flavour.svg";
import styles from "@/presentation/styles/components/_copyright.module.scss";

const { copyrightContainer, copyrightContainer__image, copyrightContainer__text } = styles;

const Copyright = () => {
	return (
		<div className={copyrightContainer} data-testid={"copyright"}>
			<Image
				className={copyrightContainer__image}
				src={IconCodingFlavour}
				alt='Coding Flavour Logo'
				data-testid={"logo-icon"}
			></Image>
			<span className={copyrightContainer__text} data-testid={"copyright-text"}>
				Coding Flavour © 2023
			</span>
		</div>
	);
};

export default React.memo(Copyright);
