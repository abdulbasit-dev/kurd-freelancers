import React, {useState, useEffect} from 'react';
import {CircularProgress} from '@material-ui/core';

import axios from '../axios';
import {useParams} from 'react-router-dom';

function JobInfo() {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const {jobId} = useParams();

  useEffect(() => {
    const getData = async () => {
      const post = await axios.get(`api/posts/${jobId}`);
      setPost(post.data);
      setLoading(false);
    };
    getData();
  }, []);

  console.log(post);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='container mt-12 mb-24'>
      {loading ? (
        <div className='flex justify-center my-48'>
          <CircularProgress size={100} color='secondary' thickness={2} />
        </div>
      ) : (
        <React.Fragment>
          <section className='flex justify-between items-center'>
            <div>
              <div className='mb-3'>
                <h1 className='text-4xl mb-2'>{post.title}</h1>
                <p>Price Type | Price</p>
              </div>
              <div>
                <p>
                  Posted by{' '}
                  <span className='text-blue-500'>{post.user.name}</span>
                </p>
                <p>
                  Post Date{' '}
                  <span className='text-blue-500'>1{post.created_at}</span>
                </p>
              </div>
            </div>
            <div>
              <button className='bg-primary text-white px-8 py-2 rounded-lg'>
                Apply
              </button>
            </div>
          </section>
          <div className='bg-gray-200 h-0.5 my-4'></div>
          <section className='my-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <div>
                <h2 className='text-3xl'>Job Type</h2>
                <div className='mt-2 mb-12'>
                  {[1, 2, 3].map(item => (
                    <button
                      key={item}
                      className='border-2 mr-4 border-primary rounded-full px-2 py-1 text-primary font-semibold'
                    >
                      Required skills
                    </button>
                  ))}
                </div>
                <p className='w-98'>{post.description}</p>
              </div>
              <div className='pl-32 mt-4 '>
                <div className='border border-gray-800 p-4 '>
                  <h3 className='text-2xl px-2 pb-3 border-b border-gray-700'>
                    Similer Jobs
                  </h3>
                  <div className='px-4'>
                    {[1, 2, 3].map(item => (
                      <div
                        className='my-4 pb-4  border-b border-gray-700'
                        key={item}
                      >
                        <div className='flex justify-between items-center'>
                          <h4 className='text-xl capitalize text-blue-500'>
                            Job Title
                          </h4>
                          <p className='text-gray-400 text-sm'>12/12/2021</p>
                        </div>
                        <p className='text-gray-500 mt-1'>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Eos ex corporis quaerat dolorum adipisci enim
                          nihil quam autem praesentium excepturi?
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
      )}
    </div>
  );
}

export default JobInfo;
