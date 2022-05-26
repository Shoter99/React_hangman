import React, { useState } from "react";
interface Props {
  value: string;
}
const Key = ({ value }: Props) => {
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [btnCorrect, setBtnCorrect] = useState(false);

  const checkInput = (key: string) => {
    if (btnDisabled || btnCorrect) {
      return;
    }
    if (key === "K") return setBtnCorrect(true);
    return setBtnDisabled(true);
  };

  return (
    <div
      className={`key ${btnDisabled ? "key-used" : ""} ${
        btnCorrect ? "key-correct" : ""
      }`}
      onClick={() => checkInput(value)}
    >
      {value}
    </div>
  );
};

export default Key;
