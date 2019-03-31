import React from "react";
import Footer from "./Footer";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const App = () => {
  return (
    <div style={{ margin: 20 }}>
      <AddTodo />
      <TodoList />
      <Footer />
    </div>
  );
};

export default App;
