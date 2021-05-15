import React from 'react';
import {Link} from 'react-router-dom';
import FacebookLogo from './../assets/img/facebook.svg';
import GmailLogo from './../assets/img/gmail.svg';
import LinkedinLogo from './../assets/img/linkedin.svg';

function Footer() {
  return (
    <div className='flex flex-col w-full bg-gray-800 fix bottom-0'>
      <div className='flex my-4 mx-20 flex-wrap'>
        <div className='flex w-full sm:w-1/2 lg:w-1/4 md:w-2/6 xl:w-1/5 mt-3'>
          <ul className='text-white'>
            <h2 className='text-xl font-bold'>Naigation</h2>
            <li className='mt-2 hover:underline'>
              <Link to='/'>Home</Link>
            </li>
            <li className='mt-2 hover:underline'>
              <Link to='postjob'>Post a Job</Link>
            </li>
            <li className='mt-2 hover:underline'>
              <Link to='findfreelancer'>Find a Freelancer</Link>
            </li>
            <li className='mt-2 hover:underline'>
              <Link to='findjob'>Find a Job</Link>
            </li>
          </ul>
        </div>
        <div className='flex w-full sm:w-1/2 lg:w-1/4 md:w-2/6 xl:w-1/5 mt-3'>
          <ul className='text-white'>
            <h2 className='text-xl font-bold'>Company Info</h2>
            <li className='mt-2 hover:underline'>
              <Link to='about'>About KurdFreelancer</Link>
            </li>
            <li className='mt-2 hover:underline'>
              <Link to='/'>How KurdFreelancer Works</Link>
            </li>
            <li className='mt-2 hover:underline'>
              <Link to='/'>Why KurdFreelancer</Link>
            </li>
          </ul>
        </div>
        <div className='flex w-full sm:w-1/2 lg:w-1/4 md:w-2/6 xl:w-1/5 mt-3'>
          <ul className='text-white flex flex-col'>
            <h2 className='text-xl font-bold'>Resources</h2>
            <li className='mt-2 hover:underline'>
              <Link to='contactus'>Help & Support</Link>
            </li>
            <li className='mt-2 hover:underline'>
              <Link to='contactus'>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className='flex w-full sm:w-1/2 lg:w-1/4 md:w-2/6 xl:w-1/5  mt-3'>
          <ul className='text-white flex flex-col'>
            <h2 className='text-xl font-bold'>Policies</h2>
            <li className='mt-2 hover:underline'>
              <Link to='ippolicy'>IP Policy</Link>
            </li>
            <li className='mt-2 hover:underline'>
              <Link to='privacypolicy'>Privacy Policy </Link>
            </li>
            <li className='mt-2 hover:underline'>
              <Link to='termsofservice'>Terms of service</Link>
            </li>
          </ul>
        </div>
        <div className='flex w-full sm:w-1/2 lg:w-1/4 md:w-2/6 xl:w-1/5 mt-3'>
          <ul className='text-white flex flex-col'>
            <h2 className='text-xl font-bold'>Connect With Us</h2>
            <div className='flex justify-between'>
              <Link className='w-12 h-12' to='/'>
                <img src={FacebookLogo} alt='facebook logo ' />
              </Link>
              <Link className='w-12 h-12' to='/'>
                <img src={GmailLogo} alt='facebook logo' />
              </Link>
              <Link className='w-12 h-12' to='/'>
                <img src={LinkedinLogo} alt='facebook logo' />
              </Link>
            </div>
          </ul>
        </div>
      </div>
      <div className='flex my-3 justify-around text-white'>
        <Link className='hover:underline' to='/'>
          Kurd Freelancer
        </Link>
        <h3>Copyright &copy; {new Date().getFullYear()}</h3>
      </div>
    </div>
  );
}

export default Footer;
