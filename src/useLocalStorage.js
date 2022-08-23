import { useState, useEffect } from "react";

const defaultValue = {
  years: [
    {
      financialYear: 2023, 
      months: [
        {
          month: "July",
          AUD: 10000,
          paymentDate: Date.now()
        }
      ]
    }
  ]
}
  

function getStorageValue(key) {
  const saved = localStorage.getItem(key);
  const initial = JSON.parse(saved);
  return initial || defaultValue;
}

export const useLocalStorage = (key) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key);
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};