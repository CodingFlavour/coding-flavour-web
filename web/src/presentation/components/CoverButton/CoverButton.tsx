import Image from "next/image";
import React, { useEffect, useState } from "react";
import IconSend from "@/presentation/assets/icons/icon-send.svg";
import IconTick from "@/presentation/assets/icons/icon-tick.svg";
import styles from "@/presentation/styles/components/_cover-button.module.scss";

const {
  coverButton,
  activeCoverButton,
  finishedCoverButton,
  coverButton__defaultIcon,
  coverButton__sendedIcon,
} = styles;

// Do tests after implementing final logic
const CoverButton = () => {
  //   Mocked logic for animation. TODO real logic of sending an email
  const [active, setActive] = useState(false);
  const [finished, setFinished] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  useEffect(() => {
    let i: NodeJS.Timeout;
    let i2: NodeJS.Timeout;
    if (active && !finished) {
      i = setInterval(() => {
        setFinished(true);
      }, 3000);
    }
    if (active && finished) {
      i2 = setInterval(() => {
        setActive(false);
        setFinished(false);
      }, 3000);
    }
    return () => {
      clearInterval(i);
      clearInterval(i2);
    };
  }, [active, finished]);

  const buttonClassName = `${coverButton} ${active ? activeCoverButton : ""} ${
    finished ? finishedCoverButton : ""
  }`;

  return (
    <button className={buttonClassName} onClick={handleClick}>
      <span>Send</span>
      <Image src={IconSend} alt="Send" className={coverButton__defaultIcon} />
      <Image src={IconTick} alt="Sended" className={coverButton__sendedIcon} />
    </button>
  );
};

export default CoverButton;
