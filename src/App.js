import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Page404 from "./pages/Page404/Page404";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <div className="">
        <Switch>
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
          <Route path="/about" exact>
            <Header />
            <About />
          </Route>
          <Route path="/profile/:userId">
            <Header />
            <Profile />
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
