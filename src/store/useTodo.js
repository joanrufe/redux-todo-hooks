import { useMappedState, useDispatch } from "redux-react-hook";
import { useCallback } from "react";

// @TODO: refactor implementation to useTodo

export function useTodo(index) {
  const todo = useMappedState(
    useCallback(state => state.todos[index], [index])
  );

  const dispatch = useDispatch();
  const deleteTodo = useCallback(
    () => dispatch({ type: "delete todo", index }),
    [index]
  );
  return { todo, deleteTodo };
}
