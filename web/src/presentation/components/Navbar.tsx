"use client";

import styles from "@src/presentation/styles/components/_navbar.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";

const { navbar, navbar__list, navbar__list__item, active } = styles;

export interface IMenuOption {
  id: string;
  label: string;
  path: string;
  covers?: string;
  hide?: boolean;
}

interface INavbarProps {
  menuList: IMenuOption[];
}

const Navbar: React.FC<INavbarProps> = ({ menuList }) => {
  const pathname = usePathname();

  const parseURLPath = (menuList: IMenuOption[]) => {
    const activeMenu = menuList.find((item) => {
      const regex = new RegExp(item.id);
      return regex.exec(pathname);
    });
    return activeMenu?.id ?? menuList[0].id;
  };

  const activeId = useMemo(() => parseURLPath(menuList), [pathname]);

  return (
    <nav className={navbar} data-testid={"navbar"}>
      <ul className={navbar__list} data-testid={"navbar-list"}>
        {menuList.map((menuOption) => {
          const isActive =
            menuOption.id === activeId ||
            (menuOption.covers && menuOption.covers === activeId);
          const className = `${navbar__list__item} ${isActive ? active : ""}`;
          const optionText = isActive
            ? `<${menuOption.label}>`
            : menuOption.label;
          const shouldShow = !menuOption.hide;
          if (shouldShow) {
            return (
              <li
                className={className}
                key={`menu_option_${menuOption.id}`}
                data-testid={`navbar-list-item-${menuOption.id}`}
              >
                <Link href={menuOption.path}>{optionText}</Link>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
