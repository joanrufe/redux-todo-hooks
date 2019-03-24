import { combineReducers } from "redux";
import todosReducer from "./todosReducer";
import visibilityFilterReducer from "./visibilityFilterReducer";

export { getVisibleTodos } from "./getVisibleTodos";

export default combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer
});
