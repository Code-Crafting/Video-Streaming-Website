import { useEffect, useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [localData, setLocalData] = useState(initialValue);

  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem(key));
    if (existingData) {
      setLocalData(existingData);
    } else {
      localStorage.setItem(key, JSON.stringify(initialValue));
    }
  }, []);

  const updateLocalStorage = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setLocalData(newValue);
  };

  return [localData, updateLocalStorage];
};
