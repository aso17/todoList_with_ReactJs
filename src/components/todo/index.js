import { useState } from "react";
import "../todo/Todo.css";
import TodoList from "../Todo-list/index";
import FormCreate from "../Form-creat/index";
const Todo = () => {
  const [gettodo, settodo] = useState([
    // {
    //   id: 1,
    //   title: "indah",
    // },
    // {
    //   id: 2,
    //   title: "Diah",
    // },
  ]);
  const EventCreateTodo = (todo) => {
    settodo(gettodo.concat(todo));
  };

  return (
    <div className="Todo">
      <h3>Todo List</h3>
      <FormCreate ondataTodo={EventCreateTodo} />
      <TodoList data={gettodo} />
    </div>
  );
};
export default Todo;
