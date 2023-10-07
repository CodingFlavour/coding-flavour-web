import menu from "@/data/Statics/menu.json";
import IconClose from "@/presentation/assets/icons/icon-close.svg";
import IconMenu from "@/presentation/assets/icons/icon-menu.svg";
import styles from "@/presentation/styles/layouts/_header.module.scss";
import Image from "next/image";
import React, { useMemo } from "react";
import LanguageSelector from "../components/LanguageSelector";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";

const {
  header,
  header__menu,
  header__menu__icons,
  header__menu__icons__icon,
  header__menu__icons__icon__handler,
} = styles;

const Header = ({ params: { lang } }: { params: { lang: string } }) => {
  console.log("Header");
  console.log("lang", lang);
  const menuList = useMemo(() => menu.menu, [menu]);

  const handleNewLanguage = () => {
    return;
  };

  return (
    <header className={`${header}`} data-testid={"header"}>
      <div className={`${header__menu} `} data-testid={"header-menu"}>
        <Logo />
        <div className={header__menu__icons}>
          <label htmlFor="mobile-menu-handler">
            <Image
              className={`${header__menu__icons__icon}
            `}
              src={IconMenu}
              alt="Open navegation panel"
              data-testid={"header-menu-icon-open"}
            />
          </label>
          <input
            type="checkbox"
            id="mobile-menu-handler"
            className={header__menu__icons__icon__handler}
          />
          <label htmlFor="mobile-menu-handler">
            <Image
              className={`${header__menu__icons__icon} 
            `}
              src={IconClose}
              alt="Close navegation panel"
              data-testid={"header-menu-icon-close"}
            />
          </label>
        </div>
      </div>
      <Navbar menuList={menuList} />
      <LanguageSelector isLeftActive handleNewLanguage={handleNewLanguage} />
    </header>
  );
};

export default React.memo(Header);
