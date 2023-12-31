"use client";

import styles from "@src/presentation/styles/components/_navbar.module.scss";
import { usePathname, useRouter } from "next/navigation";
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
  htmlFor: string; // Using label to trigger checkbox for SSR
}

const Navbar: React.FC<INavbarProps> = ({ menuList, htmlFor }) => {
  const pathname = usePathname();
  const router = useRouter();
  const parseURLPath = (menuList: IMenuOption[]) => {
    const activeMenu = menuList.find((item) => {
      const regex = new RegExp(item.id);
      return regex.exec(pathname);
    });
    return activeMenu?.id ?? menuList[0].id;
  };

  const activeId = useMemo(() => parseURLPath(menuList), [pathname]);

  const navigate = (url: string) => {
    router.push(url);
  };

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
                onClick={() => navigate(menuOption.path)}
              >
                <label htmlFor={htmlFor}>{optionText}</label>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
};

export default React.memo(Navbar);
