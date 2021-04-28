import React, {useState, useEffect} from 'react';
import {CircularProgress, MenuItem, TextField} from '@material-ui/core';

import jobs from '../assets/img/jobs.svg';
import Card from '../components/Card';
import axios from '../axios';

function Jobs() {
  const [tag, setTag] = useState('Web Develper');
  const [location, setLocation] = useState('Erbil');
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [locations, setLocations] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const posts = await axios.get('api/posts');
      const locations = await axios.get('api/cities');
      const tags = await axios.get('api/tags');

      setPosts(posts.data.data);
      setLocations(locations.data.data);
      setTags(tags.data.data);
      setLoading(false);
    };
    getData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = event => {
    setTag(event.target.value);
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

      {loading ? (
        <div className='flex justify-center my-48'>
          <CircularProgress size={100} color='secondary' thickness={2} />
        </div>
      ) : (
        <React.Fragment>
          <section className='mt-24'>
            <div className='grid grid-cols-3 gap-12'>
              <div>
                <TextField
                  id='utlined-select-courrenc'
                  select
                  fullWidth={true}
                  label='Job Type'
                  value={tag}
                  onChange={handleChange}
                  variant='outlined'
                >
                  {tags.map(option => (
                    <MenuItem key={option.id} value={option.name}>
                      {option.name}
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
                  {locations.map(option => (
                    <MenuItem key={option.name} value={option.name}>
                      {option.name}
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
              {posts &&
                !loading &&
                posts.map((post, index) => (
                  <Card
                    key={index}
                    path={`jobs/${post.id}`}
                    name='John Doe'
                    tags={['test', 'test', 'test']}
                    description=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aperiam ipsam dicta impedit pariatur?'
                  />
                ))}
            </div>
          </section>
        </React.Fragment>
      )}
    </div>
  );
}

export default Jobs;
