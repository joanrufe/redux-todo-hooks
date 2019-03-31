let nextTodoId = 0;
export const addTodo = text => ({
  type: actionsEnum.ADD_TODO,
  id: nextTodoId++,
  text
});

export const setVisibilityFilter = filter => ({
  type: actionsEnum.SET_VISIBILITY_FILTER,
  filter
});

export const toggleTodo = id => ({
  type: actionsEnum.TOGGLE_TODO,
  id
});

export const deleteTodo = id => ({
  type: actionsEnum.DELETE_TODO,
  id
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

export const actionsEnum = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  DELETE_TODO: "DELETE_TODO",
  SET_VISIBILITY_FILTER: "SET_VISIBILITY_FILTER"
};
