import React from "react";
import { Checkbox, Button } from "semantic-ui-react";

const Todo = ({ onClick, completed, text, onDelete }) => {
  return (
    <>
      <Checkbox
        defaultChecked={completed}
        onChange={onClick}
        label={text}
        value="Controlled Checkbox"
        name="controlled-checkbox"
      />
      <Button
        style={{ padding: 7, marginLeft: 20 }}
        size="mini"
        onClick={onDelete}
      >
        X
      </Button>
    </>
  );
};
export default Todo;
