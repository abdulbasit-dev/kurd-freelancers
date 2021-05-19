import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { AuthContext } from './AuthContext';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home/Home';
import Page404 from './pages/Page404/Page404';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import ProfileSetting from './pages/ProfileSetting';
import Singnup from './pages/Singnup';
import PostJob from './pages/PostJob';
import Jobs from './pages/Jobs';
import JobInfo from './pages/JobInfo';
import Setup from './pages/Setup';
import AllProfiles from './pages/AllProfiles'

let logoutTimer;
function App() {
  const { isLoggedIn, token, user, login, tokenExpirationDate, logout } =
    useContext(AuthContext);
  // console.log(
  //   '\n=========================',
  //   'is Logged in=>>> ' + isLoggedIn,
  //   '\nuser =>>> ',
  //   user,
  //   '\ntoken=>>> ' + token,
  //   '\n========================='
  // );

  useEffect(() => {
    const storedData = JSON.parse(window.localStorage.getItem('user'));
    // console.log('useEffect render');

    if (storedData) {
      login(storedData.user, storedData.token, new Date(storedData.expiration));
    }
  }, [login]);

  // console.log('app render');

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime =
        tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDate]);

  let routes;
  if (token) {

    routes = (
      <>
        <Route path='/post-job' exact>
          <Header />
          <PostJob />
          <Footer />
        </Route>
        <Route path='/setup/:id' exact>
          <Header />
          <Setup />
          <Footer />
        </Route>
        <Route path='/profile-setting' exact>
          <Header />
          <ProfileSetting />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </>
    );
  } else {
    routes = (
      <>
        <Route path='/signin'>
          <Header />
          <SignIn />
          <Footer className='xl:absolute' />
        </Route>
        <Route path='/register'>
          <Header />
          <Singnup />
          <Footer className='xl:absolute' />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </>
    );
  }

  return (
    <Router>
      <Switch>
        <div className='flex flex-col h-screen'>
          <ToastContainer />
          <Route path='/' exact>
            <Header />
            <Home />
            <Footer />
          </Route>
          <Route path='/jobs' exact>
            <Header />
            <Jobs />
            <Footer />
          </Route>
          <Route path='/jobs/:jobId' exact>
            <Header />
            <JobInfo />
            <Footer />
          </Route>

          <Route path='/about' exact>
            <Header />
            <About />
            <Footer />
          </Route>
          <Route path='/profile' exact>
            <Header />
            <AllProfiles />
            <Footer />
          </Route>
          <Route path='/profile/:userId'>
            <Header />
            <Profile />
            <Footer />
          </Route>
          {routes}
        </div>
      </Switch>
    </Router>
  );
}

export default App;
