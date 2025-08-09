import IconCodingFlavour from "@public/icons/icon-coding-flavour.svg";
import Component from "@src/data/Models/Component";
import styles from "@src/presentation/styles/components/_logo.module.scss";
import Image from "next/image";
import Link from "next/link";

const { logo, logo__image, logo__company } = styles;

const Logo: Component = async ({
  dict
}) => {
  return (
    <Link href="/" className={logo} data-testid={"logo"}>
      <Image
        className={logo__image}
        src={IconCodingFlavour}
        alt={dict.iconLogoAlt as string}
        data-testid={"logo-icon"}
      />
      <span className={logo__company} data-testid={"logo-company"}>
        Coding Flavour
      </span>
    </Link>
  );
};

export default Logo;
