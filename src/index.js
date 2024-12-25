import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStateProvider } from "./context/GlobalStateContext";
import "./styles/app.css";

ReactDOM.render(
  <GlobalStateProvider>
    <App />
  </GlobalStateProvider>,
  document.getElementById("root")
);
