import React from "react";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./login";
import Home from "./home";
import { HOME_PATH } from "./const/Path.const";

// aaa
const App = () => {
  return (
    <BrowserRouter>
      <Route path={HOME_PATH} component={Home} />
      {/* <Route path="/login" component={Login} /> */}
    </BrowserRouter>
  );
};

export default App;
