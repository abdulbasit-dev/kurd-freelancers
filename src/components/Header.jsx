import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { AuthContext } from '../AuthContext';
import logo from '../assets/img/logo.svg';
import { Avatar } from '@material-ui/core';

function Header() {
  const { isLoggedIn, logout, user } = useContext(AuthContext);
  const history = useHistory()
  return (
    <header className='shadow  py-2 z-20  w-full fixed bg-white'>
      <div className='container flex flex-wrap justify-between  flex-col md:flex-row items-center'>
        <div className='flex items-center '>
          <Link to='/'>
            <img src={logo} alt='logo' className='mr-6' />
          </Link>

          <ul className='flex font-medium'>
            <li>
              <Link to='/' className='mr-5 hover:text-blue-600'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/jobs' className='mr-5 hover:text-blue-600'>
                Find Jobs
              </Link>
            </li>
            <li>
              <Link to='/about' className='mr-5 hover:text-blue-600'>
                About
              </Link>
            </li>
          </ul>
        </div>
        <div>
          {isLoggedIn ? (
            <ul className='flex font-medium items-center'>
              <Link to={`/profile/${user.id}`}>
                <Avatar alt={user.name} src='/static/images/avatar/1.jpg' />
              </Link>

              <li>
                <Link
                  to={`/profile/${user.id}`}
                  className='ml-5 hover:text-blue-600 '
                >
                  {user.name}
                </Link>
              </li>
              <li
                className='ml-5 hover:text-blue-600 cursor-pointor'
                onClick={() => {
                  logout()
                  history.push('/')
                }}
              >
                Logout
              </li>
            </ul>
          ) : (
            <ul className='flex font-medium items-center'>
              <li className='px-3 py-1 mr-5 bg-primary text-white rounded-lg'>
                <Link to='/post-job' className=''>
                  Post a Job
                </Link>
              </li>
              <li>
                <Link to='/register' className='mr-5 hover:text-blue-600'>
                  Register
                </Link>
              </li>
              <li>
                <Link to='/signin' className='mr-5 hover:text-blue-600'>
                  Sign in
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
