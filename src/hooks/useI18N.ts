'use client'

import { i18n } from "i18n.config";
import { usePathname } from "next/navigation";

const useI18N = () => {
  const pathname = usePathname();
  const pathnames = pathname.split("/").filter((path) => path !== "");
  const currentLanguage = i18n.locales.find((lang) => lang === pathnames[0]);
  const defaultLocale = i18n.defaultLocale;
  const languageActive = currentLanguage ?? defaultLocale;

  return {
    pathnames,
    languageActive
  };
}

export default useI18N;