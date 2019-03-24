import * as actions from "./index";

describe("todo actions", () => {
  it("addTodo should create ADD_TODO action", () => {
    const todo = actions.addTodo("Use Redux");
    expect(todo.type).toBe("ADD_TODO");
    expect(todo.text).toBe("Use Redux");
  });

  it("setVisibilityFilter should create SET_VISIBILITY_FILTER action", () => {
    expect(actions.setVisibilityFilter("active")).toEqual({
      type: "SET_VISIBILITY_FILTER",
      filter: "active"
    });
  });

  it("toggleTodo should create TOGGLE_TODO action", () => {
    expect(actions.toggleTodo(1)).toEqual({
      type: "TOGGLE_TODO",
      id: 1
    });
  });
});
