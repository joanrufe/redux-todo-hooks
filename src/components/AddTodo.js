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
          />
          <Form.Button appearance="primary" type="submit">
            Add Todo
          </Form.Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default AddTodo;
