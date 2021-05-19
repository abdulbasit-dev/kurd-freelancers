import React, {useState, useEffect} from 'react';
import {Button, CircularProgress, MenuItem, TextField} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {toast} from 'react-toastify';

import axios from '../axios';
import Card from '../components/Card';

import female from '../assets/img/user_1.svg';
import male from '../assets/img/user_2.svg';
import jobs from '../assets/img/profile.svg';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(0),
      height: '20px',
    },
  },
}));

function Jobs() {
  const [tag, setTag] = useState('');
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [locations, setLocations] = useState([]);
  const [tags, setTags] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    const getData = async () => {
      const posts = await axios.get('api/user_profiles');
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

  const handleFilter = async e => {
    e.preventDefault();

    if (tag === '' && location === '') {
      toast.warn('Please at least provide one filter ', {
        position: 'top-right',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    const resp = await axios.get(
      `/api/user_profiles?location=${location}&tag=${tag}`
    );
    setPosts(resp.data.data);

    setTag('');
    setLocation('');
  };

  return (
    <div className='container mt-20'>
      <section className='mt-10 grid md:grid-cols-2 fl'>
        <div className='flex flex-col self-center pr-12'>
          <h1 className='mb-6 capitalize text-4xl font-semibold'>
            “Great vision without great
            <br />
            people is irrelevant.”{' '}
            <span className='font-normal text-gray-500 text-base'>
              -Jim Collins
            </span>
          </h1>
          <p className='capitalize text-xl'>
            We are here to ensure your next great hire!
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
            <form className={classes.root} onSubmit={handleFilter}>
              <div className='grid grid-cols-3 gap-12'>
                <div>
                  <TextField
                    id='tag'
                    select
                    fullWidth={true}
                    label='Job Type'
                    value={tag}
                    onChange={e => setTag(e.target.value)}
                    variant='outlined'
                  >
                    <MenuItem value={''}>Choose a Tag</MenuItem>
                    {tags.map(option => (
                      <MenuItem key={option.id} value={option.name}>
                        {option.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <div>
                  <TextField
                    id='location'
                    select
                    fullWidth={true}
                    label='Location'
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    variant='outlined'
                  >
                    <MenuItem value={''}>Choose a Loaction</MenuItem>
                    {locations.map(option => (
                      <MenuItem key={option.name} value={option.name}>
                        {option.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>

                <div>
                  <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                    size='large'
                  >
                    Filter
                  </Button>
                </div>
              </div>
            </form>
          </section>

          <section className='my-24'>
            <div>
              <h1 className='text-4xl  text-center text-gray-800 font-semibold pb-2'>
                Freelancers
              </h1>
              {posts && (
                <h3 className='text-3xl text-center text-gray-600 pb-3'>
                  Total Freelancer Results: {posts.length}
                </h3>
              )}
              <div className='h-0.5 bg-gray-400'></div>
            </div>

            <div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12'>
              {posts &&
                !loading &&
                posts.map((post, index) => {
                  return (
                    <Card
                      key={index}
                      image={`${
                        post.profile_picture
                          ? process.env.REACT_APP_BACKEND_API +
                            '/' +
                            post.profile_picture
                          : post.gender_id === 2
                          ? female
                          : male
                      }`}
                      path={`profile/${parseInt(post.user_id)}`}
                      name={post.user.username}
                      tags={post.skills.split(',')}
                      description={post.about_me
                        .substring(0, 100)
                        .concat('...')}
                    />
                  );
                })}
            </div>
          </section>
        </React.Fragment>
      )}
    </div>
  );
}

export default Jobs;
