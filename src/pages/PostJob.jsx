import React, {useEffect} from 'react';
import {TextField, TextareaAutosize} from '@material-ui/core';

//images
import bag from '../assets/img/PostJob/bag.svg';
import paper from '../assets/img/PostJob/paper.svg';
import upload from '../assets/img/PostJob/upload.svg';
import info from '../assets/img/PostJob/info.svg';

function JobPost() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='container mt-10'>
      <h1 className='text-3xl'>Post Your Job on KurdFreelancer</h1>
      <div className='bg-gray-300 h-0.1 mt-4 w-2/5'></div>
      <div className='grid grid-cols-1 lg:grid-cols-2 mt-12 mb-72'>
        <div>
          <div className='mb-12'>
            <div className='flex mb-4'>
              <img src={bag} alt='bag' />
              <h3 className='capitalize ml-2 text-xl'>Give your job a title</h3>
            </div>
            <TextField
              id='standard-basic'
              label='Develop Android app for e-commerce site.'
              variant='outlined'
              fullWidth={true}
            />
          </div>
          <div className='mb-12'>
            <div className='mb-4'>
              <div className='flex mb-1'>
                <img src={paper} alt='paper' />
                <h3 className='capitalize ml-2 text-xl'>
                  Describe the job in detail
                </h3>
              </div>
              <p className='capitalize'>
                Include expected deliverables, requirements and time frame for
                delivery.
              </p>
            </div>
            <TextField
              fullWidth={true}
              id='outlined-textarea'
              label='Job Description'
              multiline
              rows={10}
              variant='outlined'
            />
            <div>
              <div className='h-20 border border-gray-400 rounded mt-0.5  px-4 py-4 '>
                <div className='flex justify-between items-center pt-2'>
                  <div className='flex'>
                    <img src={upload} alt='upload' />
                    <p className='ml-2'>
                      Or Upload a file that containe all details
                    </p>
                  </div>
                  <button
                    className='px-2 py-1  rounded border border-primary text-primary 
                hover:text-white hover:bg-primary transition duration-400 ease-in-out focus:outline-none'
                  >
                    Upload File
                  </button>
                </div>
              </div>
              <div>
                <div className='flex justify-between mt-2'>
                  <div className='flex items-center'>
                    <small className='text-gray-400 mr-1'>
                      Supported file types
                    </small>
                    <img src={info} alt='info' />
                  </div>

                  <small className='text-gray-400 mr-1'>Using 0/10 MB</small>
                </div>
                <p className='text-gray-500 mt-2'>srs wallet app detail.pdf</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobPost;
