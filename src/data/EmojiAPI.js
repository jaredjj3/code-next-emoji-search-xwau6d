import ALL_EMOJIS from "./ALL_EMOJIS.json";

// what happens if query = '😀' ?
export const search = (query, limit) => {
  const q = query.toLowerCase();
  return ALL_EMOJIS.filter(emoji => {
    const isSymbol = q === emoji.symbol;
    const hasTitle = emoji.title.toLowerCase().includes(q);
    const hasKeywords = emoji.keywords.toLowerCase().includes(q);
    return isSymbol || hasTitle || hasKeywords;
  }).slice(0, limit);
};
