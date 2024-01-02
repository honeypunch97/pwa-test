import React from "react";
import { todoListState } from "./atom";
import { useRecoilValue } from "recoil";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);
  return (
    <ul className="todo-list">
      {todoList.map(todoItem => (
        <TodoListItem key={todoItem.id} todoItem={todoItem} />
      ))}
    </ul>
  );
};

export default TodoList;
