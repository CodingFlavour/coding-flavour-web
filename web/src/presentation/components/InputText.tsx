import styles from "@src/presentation/styles/components/_input-text.module.scss";
import React from "react";
import IconError from "@src/presentation/assets/icons/icon-error.svg";
import IconSuccess from "@src/presentation/assets/icons/icon-success.svg";
import Image from "next/image";

type INPUT_TYPES = "text" | "textarea";

export interface IInputTextProps {
  id: string;
  value: string;
  type: INPUT_TYPES;
  rows?: number;
  isError?: boolean;
  isSuccess?: boolean;
}

const { inputText__value, inputText__wrapper, inputText__input, inputText__icon } = styles;

const InputText: React.FC<IInputTextProps> = ({
  id,
  value,
  type,
  rows,
  isError,
  isSuccess,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className={inputText__value}
        data-testid={"input-text-value"}
      >
        {value}
      </label>
      {type === "text" && (
        <div className={inputText__wrapper}>
          <input
            id={id}
            className={inputText__input}
            type="text"
            name={id}
            data-testid={"input-text-input"}
            required
          />
          {isError && (
            <Image
              className={inputText__icon}
              src={IconError}
              alt="Wrong data"
            />
          )}
          {isSuccess && (
            <Image
              className={inputText__icon}
              src={IconSuccess}
              alt="Success"
            />
          )}
        </div>
      )}
      {type === "textarea" && (
        <textarea
          id={id}
          className={inputText__input}
          name={id}
          rows={rows}
          required
          data-testid={"input-text-area"}
        ></textarea>
      )}
    </div>
  );
};

export default React.memo(InputText);
