import React from "react";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./login";
import Home from "./home";

import { combineReducers, createStore } from "redux";
const reducer = combineReducers({ visibilityFilter, todos });
const store = createStore(reducer);

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
    </BrowserRouter>
  );
};

export default App;
