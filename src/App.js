import React, { useState, useEffect } from "react";
import { Header } from "./Header";
import { Input } from "./Input";
import { Results } from "./Results";
import * as EmojiAPI from './data/EmojiAPI';
// alt: import { search } from './data/EmojiAPI';

export const App = () => {
  const [query, setQuery] = useState('😀');
  const [emojis, setEmojis] = useState([]);

  useEffect(() => {
    // update results
    const nextEmojis = EmojiAPI.search(query, 20);
    setEmojis(nextEmojis);
  }, [query])

  return (
    <div>
      <Header />
      <Input />
      <Results emojis={emojis} />
    </div>
  );
};
