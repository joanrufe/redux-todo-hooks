import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import mainReducer from "./reducers";
import { makeStore, StoreContext } from "./store";
import ErrorBoundary from "react-error-boundary";

const store = makeStore(mainReducer);

function ErrorView({ error, componentStack }) {
  console.log(arguments);
  return (
    <div>
      <h1>{error.toString()}</h1>
      <pre>{componentStack.toString()}</pre>
    </div>
  );
}
render(
  <StoreContext.Provider value={store}>
    <ErrorBoundary FallbackComponent={ErrorView}>
      <App />
    </ErrorBoundary>
  </StoreContext.Provider>,
  document.getElementById("root")
);
