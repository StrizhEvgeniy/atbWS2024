import { Button } from "@mui/base";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { increment } from "../../store/slices/counterSlice";

export default function Clicker() {
  const count = useAppSelector(({ counter: { count } }) => count);

  const dispatch = useAppDispatch();

  const handleClick = () => dispatch(increment());

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p style={{ textAlign: "center" }}>{count}</p>
      <Button onClick={() => handleClick()}>+</Button>
    </div>
  );
}
