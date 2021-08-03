import React from "react";
import ReactDOM from "react-dom";
import HomePage from "../js/Pages/HomePage.jsx";
import AboutPage from "../js/Pages/AboutPage";
import NavigationBar from "../js/Components/NavigationBar.jsx";
import Footer from "../js/Components/Footer";
import { Route, Switch } from "react-router-dom";
import { Redirect } from 'react-router'


import "../css/main.scss";

export default function App() {
  return (
    <div>
      <NavigationBar/>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route component={HomePage}  path="/home"/>
        <Route component={AboutPage} path="/about"/>
      </Switch>
      <Footer/>
    </div>
  );
};