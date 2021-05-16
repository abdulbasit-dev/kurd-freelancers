import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Avatar } from '@material-ui/core';

import BurgerMenu from './../components/BurgerMenu'
import { AuthContext } from '../AuthContext';

import logo from '../assets/img/logo.svg';

function Header() {
  const { isLoggedIn, logout, user } = useContext(AuthContext);
  const history = useHistory()
  return (
    <header className='shadow  py-2 z-20  w-full fixed bg-white'>
      <div className='container flex flex-wrap justify-between items-center'>
        <div className='flex items-center '>
          <Link to='/'>
            <img src={logo} alt='logo' className='mr-6' />
          </Link>

          <ul className='font-medium hidden md:flex'>
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
            <>
              <ul className='hidden font-medium items-center md:flex'>
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
              <div>
                <BurgerMenu />
              </div>
            </>
          )}
        </div>
      </div>
    </header >
  );
}

export default Header;
