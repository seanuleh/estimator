import React,{ useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const Form1 = () => {
  const [tax, setTax] = useLocalStorage("tax");


  
  return (
    <div>
        <div><pre>{JSON.stringify(tax, null, 2)}</pre></div>
    </div>
  );
};

export default Form1;
