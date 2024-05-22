import { CircularProgress } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Todo from "../todo/Todo";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const sum = (a, b) => a + b;

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  // const list: TodoProps[] = [
  //   {
  //     title: "dsafds",
  //     description: "fdss",
  //     isDone: true,
  //   },
  //   {
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     isDone: false,
  //   },
  //   {
  //     title:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus praesentium quae, perspiciatis expedita aspernatur possimus odio veritatis quos. Voluptatibus, at. Nostrum.",
  //     description:
  //       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis quas voluptates est porro alias.",
  //     isDone: true,
  //   },
  //   {
  //     title: "dsafds",
  //     description: "fdss",
  //     isDone: false,
  //   },
  // ];

  useEffect(() => {
    setIsLoading(true);
    axios("https://jsonplaceholder.typicode.com/todos")
      .then((data) => setTodos(data.data))
      .catch(() => setError(true))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return;
  <CircularProgress />;
  if (error) return "Fatal Error";
  return (
    <>
      {todos.map(({ title, completed }, index) => (
        <Todo key={index} {...{ title }} description={""} isDone={completed} />
      ))}
    </>
  );
}
