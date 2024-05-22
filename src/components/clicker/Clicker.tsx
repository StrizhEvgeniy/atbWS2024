import { Button } from "@mui/base";
import { useCallback, useMemo } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { decrement, increment } from "../../store/slices/counterSlice";

export default function Clicker() {
  const count = useAppSelector(({ counter: { count } }) => count);

  const dispatch = useAppDispatch();

  const handlePlusClick = useCallback(() => dispatch(increment(5)), [dispatch]);
  const handleMinusClick = useCallback(
    () => dispatch(decrement(7)),
    [dispatch]
  );

  const variable: number = useMemo(() => 0, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p style={{ textAlign: "center" }}>{count}</p>
      <Button onClick={() => handlePlusClick()}>+</Button>
      <Button onClick={() => handleMinusClick()}>-</Button>
    </div>
  );
}
