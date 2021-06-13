import React from "react";
import ReactDOM from "react-dom";
import NavigationBar from "./Components/NavigationBar";
import "./css/App.scss";

const App = () => {
  return <NavigationBar />;
};

ReactDOM.render(<App />, document.querySelector("#root"));
