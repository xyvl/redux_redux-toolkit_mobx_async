import React from "react";
import { ReduxToolkitContent } from "./ReduxToolkitContent";
import { Provider } from "react-redux";
import { store } from "./store/store";

export const ReduxToolkitProvider = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux-Toolkit</h1>
        <ReduxToolkitContent />
      </div>
    </Provider>
  );
};
