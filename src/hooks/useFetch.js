import { useState } from "react";

export const useFetch = (id) => {
  const [data, setData] = useState({});

  const fetchData = async (url) => {
    try {
      if (data.hasOwnProperty(id)) return;
      const res = await fetch(`${url}&key=${import.meta.env.VITE_API_KEY}`);

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const d = await res.json();
      setData((prev) => ({ ...prev, [id]: d.items }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return [data[id], fetchData];
};
