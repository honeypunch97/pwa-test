import React from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "./atom";

const TodoListItem = ({ todoItem }) => {
  const setTodoList = useSetRecoilState(todoListState);

  const handleCheck = () => {
    setTodoList(prevTodoList =>
      [...prevTodoList].map(todoListItem =>
        todoListItem.id === todoItem.id ? { ...todoItem, isChk: !todoItem.isChk } : todoItem,
      ),
    );
  };

  const handleDelete = () => {
    setTodoList(prevTodoList => [...prevTodoList].filter(todoListItem => todoListItem.id !== todoItem.id));
  };
  return (
    <li>
      <input type="checkbox" checked={todoItem.isChk} onChange={handleCheck} />
      <p>{todoItem.text}</p>
      <button onClick={handleDelete}>DEL</button>
    </li>
  );
};

export default TodoListItem;
