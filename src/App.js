import React, {useContext} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';

import {AuthContext} from './AuthContext';
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
import JobInfo from './pages/JobInfo';
import Setup from './pages/Setup';

function App() {
  const [state, dispatch] = useContext(AuthContext);

  console.log(state.user);

  console.log(!!state.user.name);

  let routes;
  if (!!state.user.name) {
    routes = (
      <Switch>
        <Route path='/' exact>
          <Header />
          <Home />
          <Footer />
        </Route>
        <Route path='/post-job' exact>
          <Header />
          <PostJob />
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
        <Route path='/setup' exact>
          <Header />
          <Setup />
          <Footer />
        </Route>
        <Route path='/profile-setting' exact>
          <Header />
          <ProfileSetting />
        </Route>
        <Route path='/profile/:userId'>
          <Header />
          <Profile />
          <Footer />
        </Route>
        <Redirect to='/' />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
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
        <Route path='/profile/:userId'>
          <Header />
          <Profile />
          <Footer />
        </Route>
        <Redirect to='/' />
      </Switch>
    );
  }

  return (
    <Router>
      <div className=' flex flex-col h-screen'>
        <ToastContainer />
        <div className='flex-1'>{routes}</div>
      </div>
    </Router>
  );
}

export default App;
