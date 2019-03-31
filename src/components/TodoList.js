import React from "react";
import { List } from "semantic-ui-react";
import Todo from "./Todo";
import { useDispatch, useTodos } from "../store";
import { toggleTodo, deleteTodo } from "../actions";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useTodos();

  return (
    <List>
      {todos.map(todo => (
        <List.Item key={todo.id}>
          <Todo
            {...todo}
            onClick={() => {
              dispatch(toggleTodo(todo.id));
            }}
            onDelete={() => {
              dispatch(deleteTodo(todo.id));
            }}
          />
        </List.Item>
      ))}
    </List>
  );
};

export default TodoList;
