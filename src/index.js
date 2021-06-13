import React from "react";
import ReactDOM from "react-dom";
import NavigationBar from "./Components/NavigationBar";
import "./css/App.css";

const App = () => {
  return <NavigationBar />;
};

ReactDOM.render(<App />, document.querySelector("#root"));
