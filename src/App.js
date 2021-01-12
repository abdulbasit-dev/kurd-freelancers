import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";

function App() {
  return (
    <Router>
      <div className=" flex flex-col h-screen">
        <div className="flex-1">
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
