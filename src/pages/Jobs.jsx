import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import jobs from '../assets/img/jobs.svg';
import Card from '../components/Card';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      // width: '25ch',
    },
  },
}));

function Jobs() {
  const classes = useStyles();
  const [type, setType] = useState('Web Develper');
  const [location, setLocation] = useState('Erbil');
  // const [posts, usePosts] = useState([]);

  const fields = [
    'Front-End Web Developer',
    'Back-End Web Developer',
    'Full-Stack Web Developer',
    'Android Developer',
    'Flutter Developer',
  ];

  const posts = [
    'Front-End Web Developer',
    'Back-End Web Developer',
    'Full-Stack Web Developer',
    'Android Developer',
    'Flutter Developer',
    'Front-End Web Developer',
    'Back-End Web Developer',
    'Full-Stack Web Developer',
    'Android Developer',
  ];

  const locations = ['Erbil', 'Sulemnay', 'Duhok', 'Kerkuk', 'Halabja'];

  const handleChange = event => {
    setType(event.target.value);
  };

  const handleLocation = event => {
    setLocation(event.target.value);
  };

  return (
    <div className='container'>
      <section className='mt-10 grid md:grid-cols-2 fl'>
        <div className='flex flex-col self-center pr-12'>
          <h1 className='mb-6 capitalize text-5xl '>
            Find Jobs that suitable for you
          </h1>
          <p className='capitalize text-xl'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore vel
            voluptatibus perspiciatis aspernatur harum consequuntur distinctio
            ullam alias excepturi explicabo.
          </p>
        </div>
        <div>
          <img src={jobs} alt='' />
        </div>
      </section>

      <section className='mt-24'>
        <div className='grid grid-cols-3 gap-12'>
          <div>
            <TextField
              id='outlined-select-currenc'
              select
              fullWidth={true}
              label='Job Type'
              value={type}
              onChange={handleChange}
              variant='outlined'
            >
              <MenuItem value={1}>choose a place</MenuItem>
              {fields.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <TextField
              id='outlined-select-currency'
              select
              fullWidth={true}
              label='Location'
              value={location}
              onChange={handleLocation}
              variant='outlined'
            >
              <MenuItem value={1}>choose a place</MenuItem>
              {locations.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <button className='px-12 py-3  mr-5 bg-blue-400 text-white text-xl rounded-lg'>
              {' '}
              Search
            </button>
          </div>
        </div>
      </section>

      <section className='my-24'>
        <div>
          <h1 className='text-4xl  text-center text-gray-800 font-semibold pb-4'>
            Jobs
          </h1>
          <div className='h-0.5 bg-gray-400'></div>
        </div>
        <div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12'>
          {posts.map(post => (
            <Card
              name='John Doe'
              tags={['test', 'test', 'test']}
              description=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aperiam ipsam dicta impedit pariatur?'
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Jobs;
