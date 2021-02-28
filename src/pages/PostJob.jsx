import React, {useEffect, useState} from 'react';
import {
  TextField,
  MenuItem,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  FormControl,
  Button,
} from '@material-ui/core';

//images
import bag from '../assets/img/PostJob/bag.svg';
import paper from '../assets/img/PostJob/paper.svg';
import upload from '../assets/img/PostJob/upload.svg';
import info from '../assets/img/PostJob/info.svg';
import remove from '../assets/img/PostJob/remove.svg';
import cog from '../assets/img/PostJob/cog.svg';

function JobPost() {
  const [tech, setTech] = useState('Flutter Developer');
  const [priceType, setPriceType] = useState('fix');

  const fields = [
    'Front-End Web Developer',
    'Back-End Web Developer',
    'Full-Stack Web Developer',
    'Android Developer',
    'Flutter Developer',
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleJobType = event => {
    setTech(event.target.value);
  };

  const handleRemove = () => {
    alert('removed');
  };

  const handlePriceType = e => {
    setPriceType(e.target.value);
  };

  return (
    <div className='container mt-10 mb-32'>
      <h1 className='text-3xl'>Post Your Job on KurdFreelancer</h1>
      <div className='bg-gray-300 h-0.1 mt-4 w-2/5'></div>
      <div className='grid grid-cols-1 lg:grid-cols-2 mt-12 mb-8'>
        <div className='pr-12  border-r-2 border-gray-400'>
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
        <div className='pl-12'>
          <div className='mb-10'>
            <div className='flex mb-4'>
              <img src={bag} alt='bag' />
              <h3 className='capitalize ml-2 text-xl'>
                What Work You need to be done
              </h3>
            </div>
            <TextField
              id='outlined-select-currency'
              select
              fullWidth={true}
              label='Job Type'
              value={tech}
              onChange={handleJobType}
              variant='outlined'
            >
              {fields.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <div className='flex items-center mt-2'>
              {['backend', 'Mobile app'].map(item => (
                <div key={item} className='flex mr-4'>
                  <small className='mr-1 text-base'>{item}</small>
                  <img
                    src={remove}
                    alt='remove tech'
                    className='cursor-pointer'
                    onClick={handleRemove}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className='mb-12'>
            <div className='flex mb-1'>
              <img src={cog} alt='paper' />
              <h3 className='capitalize ml-2 text-xl'>
                Price, Project Time and Location:
              </h3>
            </div>
            <div className='pl-12 mt-2'>
              <FormControl component='fieldset'>
                <div className='flex items-center'>
                  <FormLabel component='legend'>Currency:</FormLabel>
                  <RadioGroup
                    row
                    aria-label='gender'
                    name='gender1'
                    // value={value}
                    // onChange={handleChange}
                  >
                    <FormControlLabel
                      labelPlacement='start'
                      value='us'
                      control={<Radio color='primary' />}
                      label='US'
                    />
                    <FormControlLabel
                      labelPlacement='start'
                      value='iq'
                      control={<Radio color='primary' />}
                      label='IQ'
                    />
                  </RadioGroup>
                </div>
              </FormControl>

              {/* PRICE SECTION  */}
              <div className='mt-8 '>
                <FormControl component='fieldset'>
                  <div className='flex flex-col'>
                    <FormLabel component='legend'>Choose Price Type:</FormLabel>
                    <RadioGroup
                      row
                      aria-label='gender'
                      name='gender1'
                      value={priceType}
                      onChange={handlePriceType}
                    >
                      <FormControlLabel
                        labelPlacement='start'
                        value='fix'
                        control={<Radio color='primary' />}
                        label='Fixed Price'
                      />
                      <FormControlLabel
                        labelPlacement='start'
                        value='range'
                        control={<Radio color='primary' />}
                        label='Range Price'
                      />
                    </RadioGroup>
                  </div>
                </FormControl>
                {priceType === 'fix' ? (
                  <div className='mt-2 ml-4'>
                    <p className='mb-2'>Fixed Price:</p>
                    <TextField
                      size='small'
                      type='number'
                      id='standard-basic'
                      label='Enter Price'
                      variant='outlined'
                      fullWidth={false}
                    />
                  </div>
                ) : (
                  <div className='mt-2 ml-4'>
                    <p className='mb-2'>Range Price:</p>
                    <div className='flex '>
                      <div className='mr-4'>
                        <TextField
                          size='small'
                          type='number'
                          id='standard-basic'
                          label='min range'
                          variant='outlined'
                          fullWidth={false}
                        />
                      </div>
                      <TextField
                        size='small'
                        type='number'
                        id='standard-basic'
                        label='max rang'
                        variant='outlined'
                        fullWidth={false}
                      />
                    </div>
                  </div>
                )}
              </div>
              {/* TIME AND DATE  SECTION  */}
              <div className='mt-8'>
                <h3 className='text-xl text-gray-400'>
                  Time to deliver the project:
                </h3>
                <div className='mt-4 flex'>
                  <div className='flex-1'>
                    <TextField
                      id='outlined-set-currency'
                      select
                      fullWidth={true}
                      size='small'
                      label='Time Type'
                      variant='outlined'
                    >
                      {['day', 'week', 'month'].map(option => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                  <div className='px-8'>
                    <TextField
                      id='outlined-select-curre'
                      fullWidth={true}
                      size='small'
                      label='Amount Of Time'
                      variant='outlined'
                    />
                  </div>
                </div>
              </div>
              {/* LOCATION  */}
              <div className='mt-8'>
                <h3 className='text-xl text-gray-400 mb-4'>Location:</h3>

                <TextField
                  id='outlined-set-currency'
                  select
                  fullWidth={true}
                  size='small'
                  label='Choose a Loaction'
                  variant='outlined'
                >
                  {['Erbil', 'Duhok', 'Kurkuk', 'Sulemany'].map(option => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button variant='contained' color='primary'>
        Post
      </Button>
    </div>
  );
}

export default JobPost;
