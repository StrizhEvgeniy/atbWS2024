import { FC, useState } from "react";
import TextField from "@mui/material/TextField";

const Input: FC = () => {
  const [text, setText] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value.toUpperCase());

  return (
    <>
      <TextField
        label="Insert text"
        variant="outlined"
        value={text}
        onChange={handleChange}
      />
    </>
  );
};

export default Input;
