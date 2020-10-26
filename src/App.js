import React, { useState } from "react";
import { Header } from "./Header";
import { Input } from "./Input";
import { Results } from "./Results";

export const App = () => {
  const [emojis, setEmojis] = useState([]);

  return (
    <div>
      <Header />
      <Input />
      <Results emojis={emojis} />
    </div>
  );
};
