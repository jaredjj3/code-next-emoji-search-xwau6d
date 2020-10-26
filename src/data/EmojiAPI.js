import ALL_EMOJIS from "./ALL_EMOJIS.json";

// what happens if query = '😀' ?
export const search = (query, limit) => {
  return ALL_EMOJIS.filter(emoji => {
    const isSymbol = query === emoji.symbol;
    const hasTitle = emoji.title.includes(query);
    const hasKeywords = emoji.keywords.includes(query);
    return isSymbol || hasTitle || hasKeywords;
  });
};
