export const countryCacheKeyGenerator = {
  generateListKey: () => {
    return ["COUNTRY", "LIST"] as const;
  },
};
