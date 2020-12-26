import React from "react";
import AppNavigator from "./Navigation/AppNavigator";
import { Provider } from "react-redux";
import store from "./store/index";

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
