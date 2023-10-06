import React from "react";
import styles from "@/presentation/styles/components/_language-selector.module.scss";

const {
  languageSelector,
  // activeLeft,
  languageSelector__input,
} = styles;

export interface ILanguageSelectorProps {
  isLeftActive: boolean;
  handleNewLanguage: (lang: string) => void;
}

const LanguageSelector: React.FC<ILanguageSelectorProps> = ({
  isLeftActive,
  handleNewLanguage,
}) => {
  // const langClassName = isLeftActive
  //   ? `${languageSelector} ${activeLeft}`
  //   : languageSelector;
  return (
    // <div className={langClassName} data-testid={"language-selector"}>
    <div className={languageSelector} data-testid={"language-selector"}>
      <label
        htmlFor="lang_input"
        className={"text"}
        // onClick={() => handleNewLanguage("es")}
        data-testid={"language-selector-es"}
      >
        ES
      </label>
      <input
        className={languageSelector__input}
        type="checkbox"
        defaultChecked={isLeftActive}
        id="lang_input"
      />
      <span className={"text"}>|</span>
      <label
        htmlFor="lang_input"
        className={"text"}
        // onClick={() => handleNewLanguage("en")}
        data-testid={"language-selector-en"}
      >
        EN
      </label>
    </div>
  );
};

export default React.memo(LanguageSelector);
