import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./style.scss";
import "./media.scss";

const Todo = () => {
  return (
    <div className="wrapper">
      <h2 className="title">PWA-TEST(Todo)</h2>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default Todo;
