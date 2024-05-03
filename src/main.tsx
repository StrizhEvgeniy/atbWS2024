import React from "react";
import ReactDOM from "react-dom/client";
import TodoList from "./components/todoList/TodoList";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>
);