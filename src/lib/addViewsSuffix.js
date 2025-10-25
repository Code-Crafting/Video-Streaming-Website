export const addViewsSuffix = (str) => {
  return str.length === 4
    ? str.substr(0, 1) + "K"
    : str.length === 5
    ? str.substr(0, 2) + "K"
    : str.length === 6
    ? str.substr(0, 3) + "K"
    : str.length === 7
    ? str.substr(0, 1) + "M"
    : str.length === 8
    ? str.substr(0, 2) + "M"
    : str.length === 9
    ? str.substr(0, 3) + "M"
    : str;
};
