import { createContext } from "react";
import { useDebounce } from "../hooks/useDebounce";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [query, debouncedQuery, setQuery] = useDebounce();

  return (
    <SearchContext.Provider value={[debouncedQuery, setQuery, query]}>
      {children}
    </SearchContext.Provider>
  );
};
