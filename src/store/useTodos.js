import { useMappedState } from ".";
import { useCallback } from "react";
import { getVisibleTodos } from "../reducers";

export default function() {
  const { todos } = useMappedState(
    useCallback(
      state => ({
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
      }),
      []
    )
  );
  return todos;
}
