import React from "react";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Page404 from "./pages/Page404/Page404";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn"
import Singnup from "./pages/Singnup";

function App() {
  return (
    <Router>
      <div className=" flex flex-col h-screen">
        <div className="flex-1">
        <Switch>
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
          <Route path="/about" exact>
            <Header />
            <About />
          </Route>
          <Route path="/signin">
            <Header />
            <SignIn />     
          </Route>
          <Route path="/signup">
            <Header />
            <Singnup/>
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
