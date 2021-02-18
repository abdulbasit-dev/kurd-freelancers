import React from "react";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Page404 from "./pages/Page404/Page404";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn"
import ProfileSetting from "./pages/ProfileSetting";
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
              <Footer />
            </Route>
            <Route path="/profilesetting" exact>
              <Header />
              <ProfileSetting />
          </Route>
          <Route path="/signin">
            <Header />
              <SignIn />  
            <Footer />  
          </Route>
          <Route path="/register">
            <Header />
            <Singnup/>
          </Route>
          <Route path="/profile/:userId">
            <Header />
              <Profile />
              <Footer />
          </Route>
          <Route>
              <Page404 />
              <Footer />
          </Route>
          </Switch>
          
        </div>
        
      </div>
    </Router>
  );
}

export default App;
