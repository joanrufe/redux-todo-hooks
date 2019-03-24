import React from "react";
import Todo from "./Todo";
import { useDispatch, useTodos } from "../store";
import { toggleTodo } from "../actions";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useTodos();

  return (
    <ul>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => {
            dispatch(toggleTodo(todo.id));
          }}
        />
      ))}
    </ul>
  );
};

export default TodoList;
