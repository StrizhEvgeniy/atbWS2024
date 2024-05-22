import { Button } from "antd";
import React, { memo, useRef, useState } from "react";

export const TestRefParent = () => {
  const [ticks, setTicks] = useState(0);
  setTimeout(() => setTicks(ticks + 1), 500);

  const tickRef = useRef();

  tickRef.current = ticks;

  const [clicks, setClicks] = useState(0);

  return (
    <>
      <h1>
        Parent Rendered at tick {tickRef.current} at {clicks}
      </h1>
      <Button onClick={() => setClicks(clicks + 1)}>Add Click</Button>
      <TestRefChild tickRef={tickRef} clicks={clicks} />
      <MemoChild tickRef={tickRef} clicks={clicks} />
    </>
  );
};

const TestRefChild = ({ tickRef, clicks }) => (
  <p>
    Child Rendered at tick {tickRef.current} at {clicks}
  </p>
);

const MemoChild = memo(TestRefChild);
