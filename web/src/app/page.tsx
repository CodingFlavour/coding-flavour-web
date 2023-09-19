"use client";
import LanguageSelector from "@/presentation/components/LanguageSelector/LanguageSelector";
import Logo from "@/presentation/components/Logo/Logo";
import Navbar from "@/presentation/components/Navbar/Navbar";
import Value from "@/presentation/components/Value/Value";
import growthIcon from "@/presentation/assets/icons/growth.png";
import communityIcon from "@/presentation/assets/icons/community.png";
import boldnessIcon from "@/presentation/assets/icons/boldness.png";
import creativityIcon from "@/presentation/assets/icons/creativity.png";
import responsibilityIcon from "@/presentation/assets/icons/responsibility.png";
import { useState } from "react";
import Visit from "@/presentation/components/Visit/Visit";

export default function Home() {
  const menuOptions = ["home", "about", "projects", "articles", "contact"];
  const activeId = 0;
  const [isLeftActive, setIsLeftActive] = useState(false);
  const handleNewLanguage = (lang: string) => {
    setIsLeftActive(!isLeftActive);
  };
  const values = [
    {
      id: "Growth",
      title: "Growth",
      description:
        "Commitment to continuous learning, development, and advancement for both our team and our solutions.",
      image: growthIcon,
    },
    {
      id: "Creativity",
      title: "Creativity",
      description:
        "We thrive on thinking beyond the conventional, embracing fresh perspectives and imaginative solutions.",
      image: creativityIcon,
    },
    {
      id: "Boldness",
      title: "Boldness",
      description:
        "Drives us to pioneer innovative solutions and overcome challenges with unwavering determination.",
      image: boldnessIcon,
    },
    {
      id: "Responsibility",
      title: "Responsibility",
      description:
        "We understand the impact of our work on the world. We prioritize well-being of individuals and environment.",
      image: responsibilityIcon,
    },
    {
      id: "Community",
      title: "Community",
      description:
        "Fostered through collaboration, knowledge-sharing, and mutual support, creating an ecosystem to drive collective growth.",
      image: communityIcon,
    },
  ];

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

        {values.map((value) => (
          <Value value={value} />
        ))}

        <LanguageSelector
          isLeftActive={isLeftActive}
          handleNewLanguage={handleNewLanguage}
        />

        <Visit text="See more" href="/" />
      </div>
    </section>
  );
}
