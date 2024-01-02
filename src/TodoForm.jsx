import React, { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "./atom";
import { v4 as uuidv4 } from "uuid";

const TodoForm = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const handleChangeInput = e => {
    setInputValue(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (!inputValue) {
      alert("값을 입력하세요.");
      return;
    }
    setTodoList(prevTodoList => [
      ...prevTodoList,
      {
        id: uuidv4(),
        text: inputValue,
        isChk: false,
      },
    ]);
    setInputValue("");
    inputRef.current.focus();
  };
  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input type="text" value={inputValue} onChange={handleChangeInput} ref={inputRef} />
      <button>ADD</button>
    </form>
  );
};

export default TodoForm;
