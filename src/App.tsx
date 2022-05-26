import React from "react";
import "./App.css";
import AppBar from "./components/AppBar";
import Keyboard from "./components/Keyboard";
import PassPhrase from "./components/PassPhrase";

function App() {
  const LIST_OF_IMGS = [
    require("./assets/hangman0.png"),
    require("./assets/hangman1.png"),
    require("./assets/hangman2.png"),
    require("./assets/hangman3.png"),
    require("./assets/hangman4.png"),
    require("./assets/hangman5.png"),
    require("./assets/hangman6.png"),
  ];
  return (
    <div>
      <AppBar></AppBar>
      <PassPhrase></PassPhrase>
      <img src={LIST_OF_IMGS[1]} alt="Hangman 0" />
      <Keyboard></Keyboard>
    </div>
  );
}

export default App;
