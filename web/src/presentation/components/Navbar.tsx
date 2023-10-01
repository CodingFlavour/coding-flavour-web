import React from "react";
import styles from "@/presentation/styles/components/_navbar.module.scss";

const { navbar, navbar__list, navbar__list__item, active } = styles;

export interface INavbarProps {
  menuOptions: string[];
  activeId: number;
}

const Navbar: React.FC<INavbarProps> = ({ menuOptions, activeId }) => {
  return (
    <nav className={navbar} data-testid={"navbar"}>
      <ul className={navbar__list} data-testid={"navbar-list"}>
        {menuOptions.map((menuOption, index) => {
          const isActive = index === activeId;
          const className = `${navbar__list__item} ${isActive ? active : ""}`;
          const optionText = isActive ? `<${menuOption}>` : menuOption;
          return (
            <li
              className={className}
              key={`menu_option_${menuOption}`}
              data-testid={`navbar-list-item-${menuOption}`}
            >
              <a href={`/${menuOption}`}>{optionText}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default React.memo(Navbar);
