import { Button } from "@mui/base";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { decrement, increment } from "../../store/slices/counterSlice";

export default function Clicker() {
  const count = useAppSelector(({ counter: { count } }) => count);

  const dispatch = useAppDispatch();

  const handlePlusClick = () => dispatch(increment(5));
  const handleMinusClick = () => dispatch(decrement(7));

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p style={{ textAlign: "center" }}>{count}</p>
      <Button onClick={() => handlePlusClick()}>+</Button>
      <Button onClick={() => handleMinusClick()}>-</Button>
    </div>
  );
}
