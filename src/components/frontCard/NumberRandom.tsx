import {  useEffect, useState } from "react";

export const NumberRandom = () => {
  const [changeNumber, setChangeNumber] = useState(0);
  const [changeColor, setChangeColor] = useState("white");
  useEffect(() => {
    randomBinary();
  }, []);

  const randomBinary = () => {
    setTimeout(() => {
      const value = Math.round(Math.random());
      setChangeNumber(value);
      const color = Math.round(Math.random());
      setChangeColor(color > 0 ? "green" : "white");
      randomBinary();
    }, 1000+Math.random() * 1000);
  };

  return <div style={{ color: changeColor,margin:0,padding:0 }}>{changeNumber}</div>;
};
