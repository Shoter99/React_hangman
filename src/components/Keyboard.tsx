import React from "react";
import Key from "./Key";

const Keyboard = () => {
  const keys = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  return (
    <div className="keyboard-wrapper">
      <div className="keyboard">
        {keys.map((key) => (
          <Key value={key} key={key}></Key>
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
