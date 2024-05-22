import { Input } from "antd";
import { forwardRef } from "react";

export const TestRef2 = forwardRef((props, ref) => {
  return <Input ref={ref} />;
});
