import React from "react";
import AboutIntroduction from "./AboutIntroduction";
import Component from "@src/data/Models/Component";
import AboutValues from "./AboutValues";

const AboutInfoValues: Component = ({ dict }) => {
  return (
    <section>
      <AboutIntroduction dict={dict} />
      <AboutValues dict={dict} />
    </section>
  );
};

export default React.memo(AboutInfoValues);
