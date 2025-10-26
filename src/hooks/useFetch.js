import { useState } from "react";

export const useFetch = () => {
  const [data, setData] = useState(null);

  const fetchData = async (url) => {
    try {
      const res = await fetch(`${url}&key=${import.meta.env.VITE_API_KEY}`);

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      setData(data.items);
    } catch {
      console.error("Error fetching data:", error);
    }
  };

  return [data, fetchData];
};
