import React from "react";
import ReactDOM from "react-dom";
import NavigationBar from "./js/Components/NavigationBar.jsx";
import HomePage from "./js/Pages/HomePage.jsx";
import "./css/main.scss";

const App = () => {
  return <HomePage />;
};

ReactDOM.render(<App />, document.querySelector("#root"));
