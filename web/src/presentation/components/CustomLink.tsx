"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { i18n } from "../../../../i18n.config";
import { DictData } from "@src/data/locales/dict/dict";
import { cookies } from "next/headers";

interface ICustomLinkProps {
  children: React.ReactNode;
  href: string;
  currentDic: DictData;
  target?: "_self" | "_blank" | "_parent" | "_top";
}

const CustomLink: React.FC<ICustomLinkProps> = ({ children, href, target }) => {
  const pathname = usePathname();

  const pathnameHasLocale = i18n.locales.find((locale) =>
    RegExp(`/\/${locale}\//`).exec(pathname)
  );
  const currentLang = cookies().get('locale') ?? i18n.defaultLocale;

  const newHref = pathnameHasLocale ? href : `/${currentLang}/${href}`
  return (
    <a href={href} target={target} data-testid={"visit"}>
      {children}
    </a>
  );
};

export default React.memo(CustomLink);
