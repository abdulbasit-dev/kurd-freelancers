import React, {useState} from 'react';
import {Button, TextField} from '@material-ui/core';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from '../axios';

//images
import FacebookLogo from './../assets/img/facebook.svg';
import GoogleLogo from './../assets/img/google.svg';
import LinkedInLogo from './../assets/img/linkedin.svg';
import GithubLogo from './../assets/img/github.svg';

const SignIn = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  // const [error, setError] = useState('');

  const login = async e => {
    e.preventDefault();
    console.log('Sd');
    const obj = {
      email,
      password,
    };
    const resp = await axios.post('/api/login', obj);
    //if respose has error show error
    if (resp.data.error) {
      toast.error(resp.data.message, {
        position: 'top-right',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    console.log(resp.data);
  };

  return (
    <div className='flex  justify-center items-center mt-28 overflow-x-hidden '>
      <div className='relative min-h-100 flex rounded w-full md:w-2/3  flex-col tablet:flex-row  tablet:px-0 mb-14 min-w-full tablet:min-w-0  justify-center items-center py-10 md:px-20'>
        <div className='flex tablet:absolute left-0  tablet:shadow-2xl bg-lightblue w-full rounded-l min-h-full tablet:w-5/12 flex-col pt-5 px-12 text-white'>
          <h1 className='text-3xl text-center'>What are you</h1>
          <h1 className='text-3xl text-center '>waiting for?</h1>
          <p className='text-center mt-12'>
            Register now to get your dream job or best freelancing to make what
            you want!
          </p>
          <div className='flex justify-center mt-20 mb-10'>
            <Button variant='contained' color='primary'>
              Sign up
            </Button>
          </div>
        </div>
        <div className='flex flex-col tablet:absolute items-center w-full tablet:w-7/12  rounded-r right-0 text-lightblue min-h-full shadow-2xl '>
          <h1 className='text-4xl mt-2'>Log in</h1>
          <div className='border w-96 max-w-full m-4 '></div>
          <div className='flex flex-col tablet:flex-row justify-around items-center w-96 flex-wrap'>
            <div className='flex w-1/2 justify-around mt-5 tablet:mt-0'>
              <img
                src={FacebookLogo}
                alt='Facebook logo'
                className=' w-14 h-14 cursor-pointer'
              />
              <img
                src={GoogleLogo}
                alt='Google logo'
                className=' w-14 h-14 cursor-pointer'
              />
            </div>
            <div className='flex w-1/2 justify-around mt-5 tablet:mt-0'>
              <img
                src={LinkedInLogo}
                alt='Linkedin logo'
                className=' w-14 h-14 cursor-pointer'
              />
              <img
                src={GithubLogo}
                alt='Github logo'
                className=' w-14 h-14 cursor-pointer'
              />
            </div>
          </div>
          <div className='flex w-96 mb-4 tablet:justify-between justify-center mt-6'>
            <div className='border w-44 hidden sm:block my-4'></div>
            <h1 className='mx-3 tablet:block justify-self-center self-center '>
              Or
            </h1>
            <div className='border w-44 my-4 hidden sm:block'></div>
          </div>
          <form
            action=''
            onSubmit={login}
            className='flex flex-col items-center w-96 max-w-full  px-10'
          >
            <div className='w-full md:w-64 tablet:w-96'>
              <TextField
                variant='outlined'
                value={email}
                onChange={e => setEmail(e.target.value)}
                margin='normal'
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                autoFocus
                color='primary'
              />
            </div>
            <div className='w-full md:w-64 tablet:w-96'>
              <TextField
                variant='outlined'
                value={password}
                onChange={e => setPassword(e.target.value)}
                margin='normal'
                fullWidth
                id='password'
                label='Password'
                name='password'
                autoComplete='password'
                type='password'
              />
            </div>

            <div className='flex items-center self-start tablet:-mx-10'>
              <input
                type='checkbox'
                name='keep-me-loged-in'
                className='mr-3 w-4 h-4'
              />
              <label htmlFor='keep-me-loged-in'>Keep me loged in</label>
            </div>
            <div className='flex mt-8 self-start tablet:-mx-10 mb-10'>
              <Button variant='outlined' type='submit' color='primary'>
                Log in
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
