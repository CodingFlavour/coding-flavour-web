import Component from "@src/data/Models/Component";
import menu from "@src/data/Statics/menu.json";
import styles from "@src/presentation/styles/layouts/_header.module.scss";
import React, { useMemo } from "react";
import LanguageSelector from "../components/LanguageSelector";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import Image from "next/image";
import IconMenu from "@public/icons/icon-menu.svg";
import IconClose from "@public/icons/icon-close.svg";

const {
  header,
  header__wrapper,
  header__menu,
  header__menu__icons,
  header__menu__icons__icon,
  header__menu__icons__icon__handler,
} = styles;

const HTML_FOR = "mobile-menu-handler";

const Header: Component = ({ dict }) => {
  const menuList = useMemo(
    () =>
      menu.menu.map((menuItem) => ({
        ...menuItem,
        label: dict[menuItem.id] as string,
      })),
    [menu]
  );

  return (
    <header className={header} data-testid={"header"}>
      <div className={`${header__wrapper} column_1`} data-testid={'header-wrapper'}>
        <div className={`${header__menu} `} data-testid={"header-menu"}>
          <Logo dict={dict} />
          <div className={header__menu__icons}>
            <label htmlFor={HTML_FOR}>
              <Image
                className={`${header__menu__icons__icon}
              `}
                src={IconMenu}
                alt={dict.iconMenuAlt as string}
                data-testid={"header-menu-icon-open"}
              />
            </label>
            <input
              type="checkbox"
              id={HTML_FOR}
              className={header__menu__icons__icon__handler}
            />
            <label htmlFor={HTML_FOR}>
              <Image
                className={`${header__menu__icons__icon} 
              `}
                src={IconClose}
                alt={dict.iconCloseAlt as string}
                data-testid={"header-menu-icon-close"}
              />
            </label>
          </div>
        </div>
        <Navbar menuList={menuList} htmlFor={HTML_FOR} />
        <LanguageSelector isLeftActive />
      </div>
    </header>
  );
};

export default React.memo(Header);
