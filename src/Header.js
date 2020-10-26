import React from "react";
import "./Header.css";
import { getSrc } from "./util/getSrc";

const EMOJI1_SRC = getSrc("😈");
const EMOJI2_SRC = getSrc("👿");

const spongeBobCase = str => {
  const chars = [];
  for (let ndx = 0; ndx < str.length; ndx++) {
    const char = str[ndx];
    if (ndx % 2 === 0) {
      chars.push(char.toUpperCase());
    } else {
      chars.push(char.toLowerCase());
    }
  }
  return chars.join("");
};

export const Header = () => {
  return (
    <header id="header">
      <h1>
        <img src={EMOJI1_SRC} width={32} height={32} />
        {spongeBobCase("Emoji Search")}
        <img src={EMOJI2_SRC} width={32} height={32} />
      </h1>
    </header>
  );
};
