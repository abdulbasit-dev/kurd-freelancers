import React from 'react';
import {Link} from 'react-router-dom';

import programming from '../../assets/img/homepage/programming.svg';
import creativity from '../../assets/img/homepage/creativity.svg';
import './Home.css';
function Home() {
  return (
    <div className='mt-20 home'>
      <header className='page-header page-header-light bg-white'>
        <div className='page-header-content py-5 '>
          <div className='container'>
            <div className='grid grid-cols-2'>
              <div className='aos-init aos-animate' data-aos='fade-up'>
                <h1 className='page-header-title'>
                  Build your next project faster with SB UI Kit Pro
                </h1>
                <p className='page-header-text mb-5'>
                  Welcome to SB UI Kit Pro, a toolkit for building beautiful web
                  interfaces, created by the development team at Start Bootstrap
                </p>
                <Link
                  className='btn btn-lg btn-primary border-2 flex font-weight-500 mr-3'
                  to='/jobs'
                >
                  Explore Jobs
                  <div className='w-4 h-auto'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='100%'
                      height='100%'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      className='feather feather-arrow-right ml-2'
                    >
                      <line x1='5' y1='12' x2='19' y2='12'></line>
                      <polyline points='12 5 19 12 12 19'></polyline>
                    </svg>
                  </div>
                </Link>
                <Link
                  className='border-2 border-red-500 btn btn-lg btn-primary-soft text-primary font-weight-500'
                  to='/register'
                >
                  Register
                </Link>
              </div>
              <div
                className='col-lg-6 d-none d-lg-block aos-init aos-animate'
                data-aos='fade-up'
                data-aos-delay='100'
              >
                <img className='img-fluid' src={programming} />
              </div>
            </div>
          </div>
        </div>
        <div className='svg-border-rounded text-light'>
          {/*  <!-- Rounded SVG Border--> */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 144.54 17.34'
            preserveAspectRatio='none'
            fill='currentColor'
          >
            <path d='M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0'></path>
          </svg>
        </div>
      </header>

      <section class='bg-light py-20 mb-20'>
        <div class='container'>
          <div class='grid grid-cols-3 text-center'>
            <div class='col-lg-4 mb-5 mb-lg-0'>
              <div class='icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  class='feather feather-layers'
                >
                  <polygon points='12 2 2 7 12 12 22 7 12 2'></polygon>
                  <polyline points='2 17 12 22 22 17'></polyline>
                  <polyline points='2 12 12 17 22 12'></polyline>
                </svg>
              </div>
              <h3>Built for developers</h3>
              <p class='mb-0'>
                Our modular, block-based build system makes building your next
                project fast and easy!
              </p>
            </div>
            <div class='col-lg-4 mb-5 mb-lg-0'>
              <div class='icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  class='feather feather-smartphone'
                >
                  <rect x='5' y='2' width='14' height='20' rx='2' ry='2'></rect>
                  <line x1='12' y1='18' x2='12.01' y2='18'></line>
                </svg>
              </div>
              <h3>Modern responsive design</h3>
              <p class='mb-0'>
                This UI Kit is build mobile-first, meaning it is will function
                beautifully on any device!
              </p>
            </div>
            <div class='col-lg-4'>
              <div class='icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  class='feather feather-code'
                >
                  <polyline points='16 18 22 12 16 6'></polyline>
                  <polyline points='8 6 2 12 8 18'></polyline>
                </svg>
              </div>
              <h3>Complete documentation</h3>
              <p class='mb-0'>
                All of the layouts, page sections, components, and utilities are
                fully covered in this products docs.
              </p>
            </div>
          </div>
        </div>
        <div class='svg-border-rounded text-white'>
          {/* <!-- Rounded SVG Border--> */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 144.54 17.34'
            preserveAspectRatio='none'
            fill='currentColor'
          >
            <path d='M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0'></path>
          </svg>
        </div>
      </section>

      <section className='page-header page-header-light bg-white'>
        <div className='page-header-content py-5 '>
          <div className='container '>
            <div className='grid grid-cols-2 place-items-center'>
              <div className='aos-init aos-animate' data-aos='fade-up'>
                <h1 className='page-header-title'>
                  Build your next project faster with SB UI Kit Pro
                </h1>
                <p className='page-header-text mb-5'>
                  Welcome to SB UI Kit Pro, a toolkit for building beautiful web
                  interfaces, created by the development team at Start Bootstrap
                </p>
                <a
                  className='btn btn-lg btn-primary font-weight-500 mr-3'
                  href='landing-multipurpose.html'
                >
                  View Demo
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    className='feather feather-arrow-right ml-2'
                  >
                    <line x1='5' y1='12' x2='19' y2='12'></line>
                    <polyline points='12 5 19 12 12 19'></polyline>
                  </svg>
                </a>
                <a
                  className='btn btn-lg btn-primary-soft text-primary font-weight-500'
                  href='https://docs.startbootstrap.com/sb-ui-kit-pro/quickstart'
                >
                  Documentation
                </a>
              </div>
              <div
                className='aos-init aos-animate place-self-end '
                data-aos='fade-up'
                data-aos-delay='100'
              >
                <img
                  className=''
                  style={{width: '400px', height: '500px'}}
                  src={creativity}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
