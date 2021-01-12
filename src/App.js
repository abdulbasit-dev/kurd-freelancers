import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Card from "./components/Card";

import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Page404 from "./pages/Page404/Page404";

function App() {
  return (
    <Router>
      <div className="">
        <Card />
        <Switch>
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
          <Route path="/about" exact>
            <Header />
            <About />
          </Route>
          <Route>
            <Page404 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
