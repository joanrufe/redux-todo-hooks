import React, { useState } from "react";
import { useDispatch } from "../store";
import { addTodo } from "../actions";

const AddTodo = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!inputValue.trim()) {
            return;
          }
          dispatch(addTodo(inputValue.trim()));
          setInputValue("");
        }}
      >
        <input
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};
export default AddTodo;
