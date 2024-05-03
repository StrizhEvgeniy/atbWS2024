import { CSSProperties, FC } from "react";
import clsx from "clsx";
import Card from "@mui/material/Card";

import styles from "./Todo.module.css";

export type TodoProps = {
  title: string;
  description: string;
  isDone: boolean;
};

const cardStyle: CSSProperties = {
  width: 450,
  display: "flex",
  flexDirection: "column",
};

const Todo: FC<TodoProps> = ({ title, description, isDone }) => (
  <Card style={cardStyle}>
    <h1 className={clsx(styles.root, isDone && styles.done)}>{title}</h1>
    <h3 className={clsx(styles.root, isDone && styles.done)}>{description}</h3>
  </Card>
);

export default Todo;
