import Todo, { TodoProps } from "../todo/Todo";

export default function TodoList() {
  const list: TodoProps[] = [
    {
      title: "dsafds",
      description: "fdss",
      isDone: true,
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      isDone: false,
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus praesentium quae, perspiciatis expedita aspernatur possimus odio veritatis quos. Voluptatibus, at. Nostrum.",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis quas voluptates est porro alias.",
      isDone: true,
    },
    {
      title: "dsafds",
      description: "fdss",
      isDone: false,
    },
  ];
  return (
    <>
      {list.map(({ title, description, isDone }, index) => (
        <Todo
          key={index}
          title={title}
          description={description}
          isDone={isDone}
        />
      ))}
    </>
  );
}
