import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import { useDispatch } from "../store";
import { addTodo } from "../actions";

const AddTodo = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <Form
        onSubmit={e => {
          e.preventDefault();
          if (!inputValue.trim()) {
            return;
          }
          dispatch(addTodo(inputValue.trim()));
          setInputValue("");
        }}
      >
        <Form.Group>
          <Form.Input
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            placeholder="Add todo"
            action="Add"
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default AddTodo;
