"use client";

import IconClose from "@/presentation/assets/icons/icon-close.svg";
import IconMenu from "@/presentation/assets/icons/icon-menu.svg";
import styles from "@/presentation/styles/layouts/_header.module.scss";
import Image from "next/image";
import React, { useState } from "react";
import LanguageSelector from "../components/LanguageSelector";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";

const {
  header,
  header__menu,
  header__menu__icons,
  header__menu__icons__icon,
  header__menu__icons__icon__hidden,
  open,
} = styles;

const Header = () => {
  // TODO: Read router and check whats in our path
  const activeId = 0;
  // TODO: JSON constant
  const menuOptions = ["home", "about", "projects", "articles", "contact"];

  // TODO: This can be improved
  const [isLeftActive, setIsLeftActive] = useState(false);
  // TODO: i18n
  const handleNewLanguage = (lang: string) => {
    setIsLeftActive(!isLeftActive);
  };

  const [isMobileMenuOpened, setMobileMenuOpened] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpened((prev) => !prev);
  };

  return (
    <header
      className={`${header} ${isMobileMenuOpened ? open : ""}`}
      data-testid={"header"}
    >
      {/* <div className="column_1"> */}
        <div className={`${header__menu} `} data-testid={"header-menu"}>
          <Logo />
          <div className={header__menu__icons}>
            <Image
              className={`${header__menu__icons__icon} ${
                isMobileMenuOpened ? header__menu__icons__icon__hidden : ""
              }`}
              src={IconMenu}
              alt="Open navegation panel"
              onClick={toggleMobileMenu}
              data-testid={"header-menu-icon-open"}
            />
            <Image
              className={`${header__menu__icons__icon} ${
                !isMobileMenuOpened ? header__menu__icons__icon__hidden : ""
              }`}
              src={IconClose}
              alt="Close navegation panel"
              onClick={toggleMobileMenu}
              data-testid={"header-menu-icon-close"}
            />
          </div>
        </div>
        <Navbar menuOptions={menuOptions} activeId={activeId} />
        <LanguageSelector
          isLeftActive={isLeftActive}
          handleNewLanguage={handleNewLanguage}
        />
      {/* </div> */}
    </header>
  );
};

export default React.memo(Header);
