'use client';
import LanguageSelector from "@/presentation/components/LanguageSelector/LanguageSelector";
import Logo from "@/presentation/components/Logo/Logo";
import Navbar from "@/presentation/components/Navbar/Navbar";
import { useState } from "react";

export default function Home() {
  const menuOptions = ["home", "about", "projects", "articles", "contact"];
  const activeId = 0;
  const [isLeftActive, setIsLeftActive] = useState(false);
  const handleNewLanguage = (lang: string) => {
    setIsLeftActive(!isLeftActive);
  };
  return (
    <section>
      <h1>Bienvenidos todos</h1>
      <h2>
        Vamos a empezar a trabajar en componentes y aqui tenemos el muestrario
      </h2>
      <p>El logo no se ve bien asi que lo envuelvo en oscuro jejej</p>
      <div
        style={{
          backgroundColor: "black",
          padding: 16,
        }}
      >
        <Logo />
        <Navbar menuOptions={menuOptions} activeId={activeId} />
        <LanguageSelector
          isLeftActive={isLeftActive}
          handleNewLanguage={handleNewLanguage}
        />
      </div>
    </section>
  );
}
