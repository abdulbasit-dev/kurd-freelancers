import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import Page404 from './pages/Page404/Page404';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import ProfileSetting from './pages/ProfileSetting';
import Singnup from './pages/Singnup';
import PostJob from './pages/PostJob';
import Jobs from './pages/Jobs';

function App() {
  return (
    <Router>
      <div className=' flex flex-col h-screen'>
        <div className='flex-1'>
          <Switch>
            <Route path='/' exact>
              <Header />
              <Home />
            </Route>
            <Route path='/post-job' exact>
              <Header />
              <PostJob />
            </Route>
            <Route path='/jobs' exact>
              <Header />
              <Jobs />
            </Route>
            <Route path='/about' exact>
              <Header />
              <About />
              <Footer />
            </Route>
            <Route path='/profilesetting' exact>
              <Header />
              <ProfileSetting />
            </Route>
            <Route path='/signin'>
              <Header />
              <SignIn />
              <Footer />
            </Route>
            <Route path='/signup'>
              <Header />
              <Singnup />
            </Route>
            <Route path='/profile/:userId'>
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
