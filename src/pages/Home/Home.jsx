import React from 'react';
import {Link} from 'react-router-dom';

import Testimonial from '../../components/Testimonial';

import programming from '../../assets/img/homepage/programming.svg';
import creativity from '../../assets/img/homepage/creativity.svg';
import './Home.css';
function Home() {
  return (
    <div className='mt-20 home'>
      <header className='page-header page-header-light bg-white'>
        <div className='page-header-content py-5 '>
          <div className='container'>
            <div className='grid grid-cols-2 place-content-center'>
              <div className='aos-init aos-animate' data-aos='fade-up'>
                <h1 className='page-header-title font-medium mb-2'>
                  Sign Up For Unlimited Opportunities, Your Future Starts Here!
                  With Us, Toward A Limitless Future!
                </h1>
                <p className='page-header-text mb-5'>
                  Register to access full functionalities of the website, create
                  a profile, demonstrate your Skills, post jobs and become part
                  of the community.
                </p>
                <Link
                  className='btn btn-lg btn-primary  flex font-weight-500 mr-3'
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
                  className=' btn btn-lg btn-primary-soft text-primary font-weight-500'
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
                <img className='img-fluid' src={programming} alt='programing' />
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

      <section className='bg-light py-20 mb-20'>
        <div className='container'>
          <div className='grid grid-cols-3 text-center'>
            <div className='col-lg-4 mb-5 mb-lg-0'>
              <div className='icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4'>
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
                  className='feather feather-layers'
                >
                  <polygon points='12 2 2 7 12 12 22 7 12 2'></polygon>
                  <polyline points='2 17 12 22 22 17'></polyline>
                  <polyline points='2 12 12 17 22 12'></polyline>
                </svg>
              </div>
              <h3>Built For Technology</h3>
              <p className='mb-0 px-10'>
                It is a platform developed for tech people to show their skills.
              </p>
            </div>
            <div className='col-lg-4 mb-5 mb-lg-0'>
              <div className='icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4'>
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
                  className='feather feather-smartphone'
                >
                  <rect x='5' y='2' width='14' height='20' rx='2' ry='2'></rect>
                  <line x1='12' y1='18' x2='12.01' y2='18'></line>
                </svg>
              </div>
              <h3>Safe and Reliable</h3>
              <p className='mb-0 px-10'>
                We have built a safe and reliable environment where people can
                interact confidently.
              </p>
            </div>
            <div className='col-lg-4'>
              <div className='icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4'>
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
                  className='feather feather-code'
                >
                  <polyline points='16 18 22 12 16 6'></polyline>
                  <polyline points='8 6 2 12 8 18'></polyline>
                </svg>
              </div>
              <h3>Connection</h3>
              <p className='mb-0 px-10'>
                We have provided an atmosphere where people with different
                backgrounds can connect.
              </p>
            </div>
          </div>
        </div>
        <div className='svg-border-rounded text-white'>
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

      <section className='my-12 page-header-light bg-white'>
        <div className='page-header-content py-5 '>
          <div className='container '>
            <div className='grid grid-cols-2 place-items-center'>
              <div className='aos-init aos-animate' data-aos='fade-up'>
                <h1 className='text-3xl font-medium mb-4'>
                  With KurdFreelance Your Dream Job Is Only One Click Away!
                </h1>
                <p className='page-header-text mb-5'>
                  Join our website to find the best job opportunities and
                  getting best job offers by demonstrating your experience &
                  Skills.
                </p>

                <Link
                  className='btn btn-lg btn-primary flex font-weight-500 mr-3'
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
                  className=' btn btn-lg btn-primary-soft text-primary font-weight-500'
                  to='/register'
                >
                  Register
                </Link>
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
                  alt='creatifity'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 144.54 17.34'
        preserveAspectRatio='none'
        fill='#212832'
        className='h-16 w-full'
      >
        <path d='M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0'></path>
      </svg>

      {/* FAQ   */}
      <section className='bg-dark py-10 mb-16'>
        <div className='container'>
          {/* header text  */}
          <div className='flex justify-center mb-12 text-center'>
            <div className='w-2/3'>
              <h2 className='text-white  text-3xl mb-4'>
                Most Frequently Asked Questions FAQ
              </h2>
              <p className='text-white-50 text-xl mb-5'>
                We have dedicated this section to the most frequently asked
                questions to provide the most wanted explanations.
              </p>
            </div>
          </div>

          <div className='grid grid-cols-2  mt-10'>
            <div className='mr-12 mb-16'>
              <div className='flex items-start'>
                <div className='icon-stack flex-shrink-0 bg-teal text-white'>
                  <svg
                    className='svg-inline--fa fa-question fa-w-12'
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='question'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 384 512'
                    data-fa-i2svg=''
                  >
                    <path
                      fill='currentColor'
                      d='M202.021 0C122.202 0 70.503 32.703 29.914 91.026c-7.363 10.58-5.093 25.086 5.178 32.874l43.138 32.709c10.373 7.865 25.132 6.026 33.253-4.148 25.049-31.381 43.63-49.449 82.757-49.449 30.764 0 68.816 19.799 68.816 49.631 0 22.552-18.617 34.134-48.993 51.164-35.423 19.86-82.299 44.576-82.299 106.405V320c0 13.255 10.745 24 24 24h72.471c13.255 0 24-10.745 24-24v-5.773c0-42.86 125.268-44.645 125.268-160.627C377.504 66.256 286.902 0 202.021 0zM192 373.459c-38.196 0-69.271 31.075-69.271 69.271 0 38.195 31.075 69.27 69.271 69.27s69.271-31.075 69.271-69.271-31.075-69.27-69.271-69.27z'
                    ></path>
                  </svg>
                </div>
                <div className='ml-4'>
                  <h5 className='text-white text-xl mb-3'>
                    Can I trust the posted jobs?
                  </h5>
                  <p className='text-white-50'>
                    Yes, because all the jobs get reviewed and verified by admin
                    before it gets published.
                  </p>
                </div>
              </div>
            </div>
            <div className='mr-12 mb-16'>
              <div className='flex items-start'>
                <div className='icon-stack flex-shrink-0 bg-teal text-white'>
                  <svg
                    className='svg-inline--fa fa-question fa-w-12'
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='question'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 384 512'
                    data-fa-i2svg=''
                  >
                    <path
                      fill='currentColor'
                      d='M202.021 0C122.202 0 70.503 32.703 29.914 91.026c-7.363 10.58-5.093 25.086 5.178 32.874l43.138 32.709c10.373 7.865 25.132 6.026 33.253-4.148 25.049-31.381 43.63-49.449 82.757-49.449 30.764 0 68.816 19.799 68.816 49.631 0 22.552-18.617 34.134-48.993 51.164-35.423 19.86-82.299 44.576-82.299 106.405V320c0 13.255 10.745 24 24 24h72.471c13.255 0 24-10.745 24-24v-5.773c0-42.86 125.268-44.645 125.268-160.627C377.504 66.256 286.902 0 202.021 0zM192 373.459c-38.196 0-69.271 31.075-69.271 69.271 0 38.195 31.075 69.27 69.271 69.27s69.271-31.075 69.271-69.271-31.075-69.27-69.271-69.27z'
                    ></path>
                  </svg>
                </div>
                <div className='ml-4'>
                  <h5 className='text-white text-xl mb-3'>
                    How can I post a job?
                  </h5>
                  <p className='text-white-50'>
                    To post a job, you must first register to our website and
                    then go to post job section.
                  </p>
                </div>
              </div>
            </div>
            <div className='mr-12 mb-16'>
              <div className='flex items-start'>
                <div className='icon-stack flex-shrink-0 bg-teal text-white'>
                  <svg
                    className='svg-inline--fa fa-question fa-w-12'
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='question'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 384 512'
                    data-fa-i2svg=''
                  >
                    <path
                      fill='currentColor'
                      d='M202.021 0C122.202 0 70.503 32.703 29.914 91.026c-7.363 10.58-5.093 25.086 5.178 32.874l43.138 32.709c10.373 7.865 25.132 6.026 33.253-4.148 25.049-31.381 43.63-49.449 82.757-49.449 30.764 0 68.816 19.799 68.816 49.631 0 22.552-18.617 34.134-48.993 51.164-35.423 19.86-82.299 44.576-82.299 106.405V320c0 13.255 10.745 24 24 24h72.471c13.255 0 24-10.745 24-24v-5.773c0-42.86 125.268-44.645 125.268-160.627C377.504 66.256 286.902 0 202.021 0zM192 373.459c-38.196 0-69.271 31.075-69.271 69.271 0 38.195 31.075 69.27 69.271 69.27s69.271-31.075 69.271-69.271-31.075-69.27-69.271-69.27z'
                    ></path>
                  </svg>
                </div>
                <div className='ml-4'>
                  <h5 className='text-white  text-xl mb-3'>
                    How can I find the specific job types Im interested in?
                  </h5>
                  <p className='text-white-50'>
                    Go to search page, there fill the search parameters
                    according to the job types you are interested in and click
                    on search.
                  </p>
                </div>
              </div>
            </div>
            <div className='mr-12 mb-16'>
              <div className='flex items-start'>
                <div className='icon-stack flex-shrink-0 bg-teal text-white'>
                  <svg
                    className='svg-inline--fa fa-question fa-w-12'
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='question'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 384 512'
                    data-fa-i2svg=''
                  >
                    <path
                      fill='currentColor'
                      d='M202.021 0C122.202 0 70.503 32.703 29.914 91.026c-7.363 10.58-5.093 25.086 5.178 32.874l43.138 32.709c10.373 7.865 25.132 6.026 33.253-4.148 25.049-31.381 43.63-49.449 82.757-49.449 30.764 0 68.816 19.799 68.816 49.631 0 22.552-18.617 34.134-48.993 51.164-35.423 19.86-82.299 44.576-82.299 106.405V320c0 13.255 10.745 24 24 24h72.471c13.255 0 24-10.745 24-24v-5.773c0-42.86 125.268-44.645 125.268-160.627C377.504 66.256 286.902 0 202.021 0zM192 373.459c-38.196 0-69.271 31.075-69.271 69.271 0 38.195 31.075 69.27 69.271 69.27s69.271-31.075 69.271-69.271-31.075-69.27-69.271-69.27z'
                    ></path>
                  </svg>
                </div>
                <div className='ml-4'>
                  <h5 className='text-white  text-xl mb-3'>
                    Why my job post got rejected?
                  </h5>
                  <p className='text-white-50'>
                    The job post was either incomplete or unverifiable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='svg-border-rounded text-white'>
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

      <section className='max-w-8xl mx-auto container bg-white pt-16'>
        <div>
          <div className='flex items-center flex-col px-4'>
            <p className='uppercase text-lg text-center text-gray-600 leading-normal'>
              in few easy steps
            </p>
            <h2 className='text-4xl lg:text-5xl font-extrabold text-center leading-tight text-gray-800 lg:w-7/12 md:w-9/12 pt-4'>
              How to Create a profile and post jobs?
            </h2>
          </div>
          <div className='mt-20 flex flex-wrap justify-between px-4'>
            <div className='flex sm:w-full md:w-5/12 pb-20'>
              <div className='w-20 h-20 relative mr-5'>
                <div className='absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1'></div>
                <div className='absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='32'
                    height='32'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' />
                    <rect x='3' y='4' width='18' height='4' rx='2' />
                    <path d='M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10' />
                    <line x1='10' y1='12' x2='14' y2='12' />
                  </svg>
                </div>
              </div>
              <div className='w-10/12'>
                <h4 className='text-lg font-bold leading-tight text-gray-800'>
                  Step 1
                </h4>
                <p className='text-base text-gray-600 leading-normal pt-2'>
                  register to our website by providing the required information.
                </p>
              </div>
            </div>
            <div className='flex sm:w-full md:w-5/12 pb-20'>
              <div className='w-20 h-20 relative mr-5'>
                <div className='absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1'></div>
                <div className='absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='32'
                    height='32'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' />
                    <circle cx='12' cy='12' r='9' />
                    <path d='M9 12l2 2l4 -4' />
                  </svg>
                </div>
              </div>
              <div className='w-10/12'>
                <h4 className='text-lg font-bold leading-tight text-gray-800'>
                  Step 2
                </h4>
                <p className='text-base text-gray-600 leading-normal pt-2'>
                  Complete your profile information and attach your resume,
                  certificates and project links to have a complete profile.
                </p>
              </div>
            </div>
            <div className='flex sm:w-full md:w-5/12 pb-20'>
              <div className='w-20 h-20 relative mr-5'>
                <div className='absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1'></div>
                <div className='absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='32'
                    height='32'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' />
                    <polyline points='7 8 3 12 7 16' />
                    <polyline points='17 8 21 12 17 16' />
                    <line x1='14' y1='4' x2='10' y2='20' />
                  </svg>
                </div>
              </div>
              <div className='w-10/12'>
                <h4 className='text-lg font-bold leading-tight text-gray-800'>
                  Step 3
                </h4>
                <p className='text-base text-gray-600 leading-normal pt-2'>
                  To post a job, click on post a job button, fill out the
                  required information and then click on post. It will be posted
                  once approved by admin.
                </p>
              </div>
            </div>
            <div className='flex sm:w-full md:w-5/12 pb-20'>
              <div className='w-20 h-20 relative mr-5'>
                <div className='absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1'></div>
                <div className='absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='32'
                    height='32'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' />
                    <rect x='3' y='4' width='18' height='12' rx='1' />
                    <line x1='7' y1='20' x2='17' y2='20' />
                    <line x1='9' y1='16' x2='9' y2='20' />
                    <line x1='15' y1='16' x2='15' y2='20' />
                  </svg>
                </div>
              </div>
              <div className='w-10/12'>
                <h4 className='text-lg font-bold leading-tight text-gray-800'>
                  Step 4
                </h4>
                <p className='text-base text-gray-600 leading-normal pt-2'>
                  You can edit your profile in profile settings Section. You can
                  edit the posted job in edit post section.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonial />
    </div>
  );
}

export default Home;
