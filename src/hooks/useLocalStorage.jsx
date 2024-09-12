import { useState } from "react";

export function useLocalStorage(key, initialData) {
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem(key);
    if (storedData) {
      return JSON.parse(storedData);
    } else {
      localStorage.setItem(key, JSON.stringify(initialData));
      return initialData;
    }
  });

  function storeData(value) {
    localStorage.setItem(key, JSON.stringify(value));
    setData(value);
  }

  return [data, storeData];
}
