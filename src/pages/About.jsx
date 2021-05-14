import React from 'react';
import GoalCard from '../components/GoalCard';
import teamWork from './../assets/img/developer-team.svg';
import data from './../staticData/staticData.json';
import location from './../assets/img/locartion.svg';
import phone from './../assets/img/phone.svg';
import mail from '../assets/img/mail.svg';
console.log(data);
function About() {
  return (
    <div className='mt-20  md:mt-0 flex flex-col justify-center items-center '>
      <div className='z-10 w-full hidden h-max rounded-full border-2 bg-transparent border-gray-500 mx-auto lg:-mt-100 xl:-mt-97 md:flex md:-mt-120   justify-center items-end z-0'>
        <img src={teamWork} alt='team-work' className='w-1/3  lg:mt-10 ' />
      </div>
      <div>
        <img src={teamWork} alt='team-work' className='w-96 mt-10 md:hidden' />
      </div>
      <div className='mt-10'></div>
      <h2 className='text-3xl sm:text-5xl text-center border-b border-gray-400 font-bold p-3 w-2/4 mx-auto'>
        Our Goals
      </h2>
      <div className='flex flex-col tablet:flex-row mx-10  sm:w-3/4 mt-10 justify-between w-full px-5'>
        {data.goals.map((goal, i) => (
          <GoalCard goal={goal} key={i} />
        ))}
      </div>
      <div className='bg-gray-200 mt-5 py-5 px-10 mx-10 w-full '>
        <div className='flex flex-col md:flex-row mx-auto  w-full tablet:w-5/6 mt-3 '>
          <div className='my-3 lg:w-2/4 flex flex-col items-center mr-3'>
            <h1 className='text-xl'>Leave us a message</h1>
            <p className='text-sm my-3'>{data.teamInfo.message}</p>
            <div className='flex flex-col md:flex-row justify-center items-center mt-10'>
              <div className='lg:w-1/3 flex flex-col items-center text-center '>
                <img src={location} alt='loaction logo' />
                <p className='text-sm'>{data.teamInfo.location}</p>
              </div>
              <div className='lg:w-1/3 flex flex-col items-center text-center '>
                <img src={phone} alt='phone logo' />
                <ul className='text-sm'>
                  <li>{data.teamInfo.phoneNumber[0]}</li>
                  <li>{data.teamInfo.phoneNumber[1]}</li>
                </ul>
              </div>
              <div className='lg:w-1/3 flex flex-col items-center text-center '>
                <img src={mail} alt='envelop logo' />
                <ul className='text-sm'>
                  <li>{data.teamInfo.emails[0]}</li>
                  <li>{data.teamInfo.emails[1]}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='lg:w-2/4 flex flex-col items-center'>
            <div className='flex flex-col w-full lg:w-4/5 mb-5'>
              <label className='text-lg'>Full Name</label>
              <input
                type='text'
                className='px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600'
                placeholder='Full Name'
              />
            </div>
            <div className='flex flex-col w-full lg:w-4/5 mb-5'>
              <label className='text-lg'>Message</label>
              <textarea
                className='px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600 resize-none'
                placeholder='Full Name'
                name=''
                id=''
                cols='30'
                rows='10'
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
