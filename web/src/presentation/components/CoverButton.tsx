import Image from "next/image";
import React, { useEffect, useState } from "react";
import IconSend from "@/presentation/assets/icons/icon-send.svg";
import IconTick from "@/presentation/assets/icons/icon-tick.svg";
import styles from "@/presentation/styles/components/_cover-button.module.scss";

interface ICoverButtonProps {
  isActive?: boolean;
  hasFinished?: boolean;
  toggleHasFinished?: React.Dispatch<React.SetStateAction<boolean>>;
}

const {
  coverButton,
  coverButton__button,
  activeCoverButton,
  finishedCoverButton,
  coverButton__defaultIcon,
  coverButton__sendedIcon,
} = styles;

// TODO: Do tests after implementing final logic
const CoverButton: React.FC<ICoverButtonProps> = ({
  isActive,
  hasFinished,
  toggleHasFinished,
}) => {
  useEffect(() => {
    const interval = setInterval(() => {
      if (hasFinished && toggleHasFinished) {
        toggleHasFinished(false);
      }
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, [isActive, hasFinished]);

  const buttonClassName = `${coverButton__button} ${
    isActive ? activeCoverButton : ""
  } ${hasFinished ? finishedCoverButton : ""}`;

  return (
    <div className={coverButton}>
      <button className={buttonClassName} type="submit">
        <span>Send</span>
        <Image src={IconSend} alt="Send" className={coverButton__defaultIcon} />
        <Image
          src={IconTick}
          alt="Sended"
          className={coverButton__sendedIcon}
        />
      </button>
    </div>
  );
};

export default CoverButton;
