import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./js/App";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.querySelector("#root")
);
