import { useEffect, useState } from "react";

export const useDebounce = (timeout = 500) => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const intervalId = setTimeout(() => {
      setDebouncedQuery(query);
    }, timeout);

    return () => clearTimeout(intervalId);
  }, [query]);

  return [query, debouncedQuery, setQuery];
};
