import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const Theme = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useLocalStorage("isDark", false);

  return (
    <Theme.Provider value={[isDark, setIsDark]}>{children}</Theme.Provider>
  );
};
