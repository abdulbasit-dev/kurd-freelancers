import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import axios from '../axios.js';

//images
import starFull from '../assets/img/star-full.svg';
import halfStar from '../assets/img/star-half.svg';
import emptyStar from '../assets/img/star-empty.svg';
import facebook from '../assets/img/facebook.svg';
import github from '../assets/img/github.svg';
import linkedin from '../assets/img/linkedin.svg';

function Profile() {
  const { userId } = useParams();
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  console.log(userId);

  useEffect(() => {
    const getData = async () => {
      const resp = await axios.get(`api/user_profiles/${userId}`);
      console.log(resp.data);
      setUserData(resp.data);
      setLoading(false);
    };
    getData();
  }, []);

  const projects = [
    {
      name: 'Project Name',
      des: ' Lorem ipsum dolor sit amet consectetu adipisicing elit. Nisi, error, repellendus tenetur rem sequi illo atque ea corrupti numquam',
    },
    {
      name: 'Project Name',
      des: ' Lorem ipsum dolor sit amet consectetu adipisicing elit. Nisi, error, repellendus tenetur rem sequi illo atque ea corrupti numquam',
    },
    {
      name: 'Project Name',
      des: ' Lorem ipsum dolor sit amet consectetu adipisicing elit. Nisi, error, repellendus tenetur rem sequi illo atque ea corrupti numquam',
    },
  ];

  return loading ? (
    <h1>Loading</h1>
  ) : (
    <div className='container '>
      <div className='flex justify-between border pt-24 bg-cover px-4 pb-1 '>
        {/* avatar */}
        <img
          alt='Remy Sharp'
          src={`${process.env.REACT_APP_BACKEND_API}/${userData.profile_picture}`}
          className='rounded-full h-24 w-24 '
        />
        {/* rating */}
        <div className='text-white'>
          <h3 className='mb-2'>Rating:</h3>
          <div className='flex items-center container'>
            <img src={starFull} alt='' />
            <img src={starFull} alt='' />
            <img src={starFull} alt='' />
            <img src={halfStar} alt='' />
            <img src={emptyStar} alt='' />
          </div>
        </div>
      </div>
      <div className='mt-4'>
        <div className='flex items-center '>
          <h2 className='text-3xl'>{userData.name}</h2>
          <p className='ml-4 text-green-400'>Available</p>
        </div>
        <p className='mt-2 text-gray-500 '>
          {userData.skills.split(',')[0]} {userData.skills.split(',')[1] ? `| ` + userData.skills.split(',')[1] : ''}
        </p>
        <div className='flex mt-3'>
          {/* <button className='bg-blue-600 hover:bg-blue-700 rounded-md font-medium px-8 py-1 text-white mr-6'>
            {' '}
            Hire
          </button>
          <button className='bg-white border border-blue-600 text-blue-600  rounded-md font-medium px-8 py-1 hover:bg-gray-200 '>
            Rate
          </button> */}
          <Link to='/profile-setting' className={`bg-white border border-blue-600 text-blue-600  rounded-md font-medium px-8 py-1 hover:bg-gray-200 `}>
            Edit profile
          </Link>
        </div>
      </div>
      <div className='mt-4 w-3/5'>
        <h2 className='text-2xl  border-b-2 border-gray-400 pb-3'>About Me:</h2>

        <p className='mt-2 text-gray-500'>{userData.about_me}</p>
      </div>

      <div className='mt-16 flex justify-between items-start mb-16'>
        <div className=''>
          <h2 className='text-2xl '>My Projects:</h2>
          {projects.map((item, index) => (
            <div className='mt-2 pl-3' key={index}>
              <div className='flex items-center'>
                <h3 className='text-xl font-medium mr-4'>
                  {index + 1}- {item.name}
                </h3>
                <div className='text-blue-500 hover:text-blue-600 pt-1 '>
                  <a
                    className='pr-2'
                    href='https://google.com'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    Demo
                  </a>{' '}
                  |
                  <a
                    href='https://google.com'
                    className='pl-2'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    Source Code
                  </a>
                </div>
              </div>
              <p className='mt-2 text-gray-500 w-2/4'>{item.des}</p>
            </div>
          ))}
        </div>
        <div className='w-1/2'>
          <h2 className='text-2xl mb-2'>Contact:</h2>
          <div className='pl-3'>
            <p>
              Email:{' '}
              <a
                href='mailto:test@gmail.com'
                className='hover:text-blue-500 text-gray-600'
              >
                {userData.email}
              </a>
            </p>
            <p className='pt-1'>
              Phone Number:{' '}
              <span className='text-gray-600'>
                {userData.phone_number}
              </span>
            </p>
            <p className='pt-1'>
              Address:{' '}
              <span className='text-gray-600'>
                {userData.city.name},Kurdistan,Iraq
              </span>
            </p>
          </div>
          <div className='flex  items-center mt-4 pl-3'>
            <a
              href='https://www.facebook.com/abdulbasit.salah.7'
              rel='noopener noreferrer'
              target='_blank'
              className='mr-3'
            >
              <img src={facebook} alt='' />{' '}
            </a>
            <a
              href='https://github.com/test'
              rel='noopener noreferrer'
              target='_blank'
              className='mr-3'
            >
              {' '}
              <img src={github} alt='' />
            </a>
            <a
              href='https://Linkedin.com/test'
              rel='noopener noreferrer'
              target='_blank'
            >
              {' '}
              <img src={linkedin} alt='' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
