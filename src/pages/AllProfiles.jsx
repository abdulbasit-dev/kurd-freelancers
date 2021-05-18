import React, { useState, useEffect } from 'react';
import { Button, CircularProgress, MenuItem, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { toast } from 'react-toastify';

import jobs from '../assets/img/jobs.svg';
import Card from '../components/Card';
import axios from '../axios';

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
    console.log(posts);
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
        const resp = await axios.get(`/api/posts?location=${location}&tag=${tag}`);
        setPosts(resp.data.data);

        setTag('');
        setLocation('');
    };

    return (
        <div className='container mt-10'>
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
                                Jobs
              </h1>
                            {posts && (
                                <h3 className='text-3xl text-center text-gray-600 pb-3'>
                                    Total Job Result: {posts.length}
                                </h3>
                            )}
                            <div className='h-0.5 bg-gray-400'></div>
                        </div>

                        <div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12'>
                            {posts &&
                                !loading &&
                                posts.map((post, index) => {
                                    console.log(post);

                                    return (<Card
                                        key={index}
                                        path={`profile/${post.id}`}
                                        name={post.username}
                                        tags={['test']}
                                        description={post.profile.about_me.substring(0, 100).concat('...')}
                                    />)
                                })}
                        </div>
                    </section>
                </React.Fragment>
            )}
        </div>
    );
}

export default Jobs;
