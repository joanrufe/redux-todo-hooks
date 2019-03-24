import { createStore, applyMiddleware, compose } from "redux";
import { create } from "redux-react-hook";
import { VisibilityFilters } from "../actions";
import reducer from "../reducers";
import useTodos from "./useTodos";

export { useTodos };
export const INITIAL_STATE = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
};

const thunk = store => next => action =>
  typeof action === "function"
    ? action(store.dispatch, store.getState)
    : next(action);

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(...middleware));

export function makeStore() {
  return createStore(reducer, INITIAL_STATE, enhancer);
}

export const { StoreContext, useDispatch, useMappedState } = create();
