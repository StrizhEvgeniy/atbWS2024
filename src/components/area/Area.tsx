import { useState } from "react";
export const Area = () => {
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [offsetX, setOffsetX] = useState<number>(0);
  const [offsetY, setOffsetY] = useState<number>(0);
  const [backgroundColor, setBackgroundColor] = useState<string>("#000");
  const handleMouse = () =>
    setBackgroundColor(`#${Math.floor(Math.random() * 1000).toString()}`);
  return (
    <>
      <div
        style={{
          width: 500,
          height: 500,
          backgroundColor,
        }}
        onMouseEnter={() => handleMouse()}
        onMouseLeave={() => handleMouse()}
        onMouseMove={(e) => {
          setOffsetX(e.target.getBoundingClientRect().x);
          setOffsetY(e.target.getBoundingClientRect().y);
          setX(e.clientX);
          setY(e.clientY);
        }}
      />
      <div>
        x: {x - offsetX} y: {Math.floor(y - offsetY)}
      </div>
    </>
  );
};
