import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";

function App() {
  return (
    <Router>
      <div className="">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
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
