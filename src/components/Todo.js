import React from "react";
import { Checkbox } from "semantic-ui-react";

const Todo = ({ onClick, completed, text }) => {
  return (
    <Checkbox
      defaultChecked={completed}
      onChange={onClick}
      label={text}
      value="Controlled Checkbox"
      name="controlled-checkbox"
    />
  );
};
export default Todo;
