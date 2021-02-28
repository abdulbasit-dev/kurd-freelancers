import React, {useState} from 'react';
import changeProfilePic from './../assets/img/changeProfilePic.svg';
import certificate from './../assets/img/certificates.svg';
import cv from './../assets/img/cv.svg';
import editIcon from './../assets/img/edit.svg';
import editIconOn from './../assets/img/editOn.svg';
const ProfileSetting = () => {
  const [acountSettingState, setAccountSettingState] = useState(2);
  const [edit, setEdit] = useState({id: 0, editing: false});
  const [data1, setData1] = useState({
    firstname: 'jone',
    lastname: 'mcdonald',
    image:
      'https://i.pinimg.com/originals/44/69/c7/4469c769cb0d648dedccabe24d6fab8e.jpg',
    aboutme:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus',
    projects: [
      {
        name: 'Project Name1',
        des:
          ' Lorem ipsum dolor sit amet consectetu adipisicing elit. Nisi, error, repellendus tenetur rem sequi illo atque ea corrupti numquam',
      },
      {
        name: 'Project Name2',
        des:
          ' Lorem ipsum dolor sit amet consectetu adipisicing elit. Nisi, error, repellendus tenetur rem sequi illo atque ea corrupti numquam',
      },
      {
        name: 'Project Name3',
        des:
          ' Lorem ipsum dolor sit amet consectetu adipisicing elit. Nisi, error, repellendus tenetur rem sequi illo atque ea corrupti numquam',
      },
    ],
    title: ['Web Developer ', 'Mobile app developer'],
    phoneNumber: '0750 445 4545',
    email: 'test@test.com',
    city: 'Erbil',
    country: 'kurdistan',
  });
  const [data, setData] = useState(() => data1);
  console.log(edit.editing);
  console.log(data.projects[edit.id].des);
  return (
    <div className='h-screen flex flex-col w-10/12 border-2 mx-auto items-center'>
      <div className='relative w-full h-1/5'>
        <img
          className='absolute w-full h-full '
          src='https://i.pinimg.com/originals/c1/5c/ba/c15cbae66a8a930a1cb292aaf60bb815.jpg'
          alt='cover'
        />
        <button className='absolute z-20 right-0 mr-8 mt-3 border-2 border-white text-white rounded-md px-4 py-2'>
          change Cover
        </button>
      </div>
      <div className='shadow-xl w-9/12 min-h-3/4 flex -my-14 z-10 bg-white flex-col xl:flex-row'>
        <div className='w-2/5 flex flex-col'>
          <div className='flex flex-col'>
            <div className='flex justify-center relative'>
              <div className='rounded-full w-48 h-48 flex justify-center items-center relative ml-6 mt-6 '>
                <img
                  src={data.image}
                  alt='profileimage'
                  className='w-full h-full rounded-full absolute'
                />
                <button className='absolute z-20 bottom-0 right-0 mr-3 mb-3'>
                  <img src={changeProfilePic} alt='change profile pic button' />
                </button>
              </div>
              <div className='flex items-center mr-10  absolute top-0 left-0 ml-10 mt-10'>
                <button className='border-2 border-blue-400 p-1 text-blue-400 rounded-md foc outline-none'>
                  EN
                </button>
              </div>
            </div>
          </div>
          <div className=' flex justify-center mt-3'>
            <div className=''>
              <h1 className='text-4xl '>
                {data1.firstname + ' ' + data1.lastname}
              </h1>
            </div>
          </div>
          <div className='flex justify-center text-gray-400 mt-4'>
            <h1>
              {data1.title.map((e, i) => {
                if (i === data1.title.length - 1) {
                  return e;
                } else return `${e} | `;
              })}
            </h1>
          </div>
          <div className='px-4'>
            {acountSettingState === 0 && (
              <div className='flex flex-col mt-10'>
                <h1 className='text-2xl'>About Me:</h1>
                <p className='mt-4'>{data1.aboutme}</p>
              </div>
            )}
            {acountSettingState === 1 && (
              <div className='mt-10'>
                <h1 className='text-2xl '>My projects:</h1>
                {data.projects.map((element, index) => (
                  <div className='flex flex-col pl-1 mt-2' key={index}>
                    <div className='flex justify-between'>
                      <h1 className='flex text-gray-500'>
                        {index + 1}-{element.name}{' '}
                        <a href='/profile-setting' className='text-cover ml-3'>
                          Demo
                        </a>
                        <span className='text-gray-400 mx-2'>|</span>
                        <a href='/profile-setting' className='text-cover'>
                          Github
                        </a>
                      </h1>
                      <img
                        src={
                          edit.editing && edit.id === index
                            ? editIconOn
                            : editIcon
                        }
                        alt='edit icon'
                        className=' hover:cursor-pointer'
                        onClick={e => {
                          setEdit({id: index, editing: true});
                        }}
                      />
                    </div>
                    <p className='text-sm text-gray-400 '>{element.des}</p>
                  </div>
                ))}
              </div>
            )}
            {(acountSettingState === 2 || acountSettingState === 3) && (
              <div className='flex flex-col mt-24'>
                <h1 className='text-xl text-center'>Contact</h1>
                <h2 className='text-lg text-gray-400 pl-6'>
                  Email: test@tetscom
                </h2>
                <h2 className='text-lg text-gray-400 pl-6'>
                  Phone Number: 0750 444 000 000
                </h2>
                <h2 className='text-lg text-gray-400 pl-6'>
                  Address: Erbil- Iraq
                </h2>
              </div>
            )}
          </div>
        </div>
        <div className='border my-10'></div>
        <div className='w-3/5  flex flex-col'>
          <div className=''>
            <ul className='flex justify-around text-2xl mt-10'>
              <li
                className={
                  acountSettingState === 0
                    ? ' border-b-2 border-blue-400 pb-5 cursor-default'
                    : 'cursor-default'
                }
                onClick={() => {
                  setAccountSettingState(0);
                }}
              >
                Account Settings
              </li>
              <li
                className={
                  acountSettingState === 1
                    ? ' border-b-2 border-blue-400 pb-5 cursor-default'
                    : 'cursor-default'
                }
                onClick={() => {
                  setAccountSettingState(1);
                }}
              >
                Projects
              </li>
              <li
                className={
                  acountSettingState === 2
                    ? ' border-b-2 border-blue-400 pb-5 cursor-default'
                    : 'cursor-default'
                }
                onClick={() => {
                  setAccountSettingState(2);
                }}
              >
                Social media
              </li>
              <li
                className={
                  acountSettingState === 3
                    ? ' border-b-2 border-blue-400 pb-5 cursor-default'
                    : 'cursor-default'
                }
                onClick={() => {
                  setAccountSettingState(3);
                }}
              >
                privacy
              </li>
            </ul>
          </div>
          {acountSettingState === 0 && (
            <form className='flex flex-wrap justify-around flex-col  mt-6 px-10'>
              <div className='flex flex-wrap justify-between '>
                <div className='flex flex-col w-5/12'>
                  <label htmlFor='firstname' className='text-xl'>
                    First Name
                  </label>
                  <input
                    type='text'
                    class=' border-2 rounded h-12 px-5 text-3xl'
                    id='firstname'
                    value={data.firstname}
                    onChange={e => {
                      setData(p => ({...p, firstname: e.target.value}));
                    }}
                  />
                </div>
                <div className='flex flex-col w-5/12'>
                  <label htmlFor='lastname' className='text-xl'>
                    Last Name
                  </label>
                  <input
                    type='text'
                    class=' border-2 rounded h-12 px-5 text-3xl'
                    id='lastname'
                    onChange={e => {
                      setData(p => ({...p, lastname: e.target.value}));
                    }}
                    value={data.lastname}
                  />
                </div>
              </div>
              <div className='flex flex-wrap justify-between mt-4'>
                <div className='flex flex-col w-5/12'>
                  <label htmlFor='email' className='text-xl'>
                    First Name
                  </label>
                  <input
                    type='email'
                    class=' border-2 rounded h-12 px-5 text-3xl'
                    id='email'
                    value={data.email}
                    onChange={e => {
                      setData(p => ({...p, email: e.target.value}));
                    }}
                  />
                </div>
                <div className='flex flex-col w-5/12'>
                  <label htmlFor='phonenumber' className='text-xl'>
                    Last Name
                  </label>
                  <input
                    type='text'
                    class=' border-2 rounded h-12 px-5 text-3xl'
                    id='phonenumber'
                    onChange={e => {
                      setData(p => ({...p, phoneNumber: e.target.value}));
                    }}
                    value={data.phoneNumber}
                  />
                </div>
              </div>
              <div className='flex flex-wrap justify-between mt-4'>
                <div className='flex flex-col w-5/12'>
                  <label htmlFor='city' className='text-xl'>
                    City
                  </label>
                  <input
                    type='text'
                    class=' border-2 rounded h-12 px-5 text-3xl'
                    id='city'
                    value={data.city}
                    onChange={e => {
                      setData(p => ({...p, city: e.target.value}));
                    }}
                  />
                </div>
                <div className='flex flex-col w-5/12'>
                  <label htmlFor='country' className='text-xl'>
                    Country
                  </label>
                  <input
                    type='text'
                    class=' border-2 rounded h-12 px-5 text-3xl'
                    id='country'
                    onChange={e => {
                      setData(p => ({...p, country: e.target.value}));
                    }}
                    value={data.country}
                  />
                </div>
              </div>
              <label htmlFor='abouteme' className='text-xl mt-4'>
                About Me
              </label>
              <textarea
                onChange={e => {
                  setData(p => ({...p, aboutme: e.target.value}));
                }}
                id='abouteme'
                rows='5'
                className='border-2 rounded resize-none'
              >
                {data.aboutme}
              </textarea>
              <div className='flex justify-between mt-4 text-gray-500'>
                <button className='w-5/12 flex justify-center bg-gray-300 items-center rounded'>
                  <img src={cv} alt='cv icon' />
                  <h1 className='text-xl ml-2'>Add CV</h1>
                </button>
                <button className='w-5/12 flex justify-center bg-gray-300 items-center rounded'>
                  <img src={certificate} alt='certificate icon' />
                  <h1 className='text-xl ml-2'>Add Certificates</h1>
                </button>
              </div>
              <div className='flex justify-end mt-4'>
                <button
                  className='p-2 bg-cover rounded-xl border-4 border-cover hover:bg-transparent  px-10 text-white hover:text-cover'
                  onClick={e => {
                    e.preventDefault();
                    setData1(data);
                  }}
                >
                  Save
                </button>
                <button
                  className='p-2 border-4 border-gray-300  rounded-xl px-10 text-gray-400 ml-7 hover:bg-gray-300'
                  onClick={e => {
                    e.preventDefault();
                    setData(data1);
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
          {acountSettingState === 1 && (
            <form className='flex flex-col pl-10 pr-20 mt-6'>
              <label htmlFor='projectname' className='text-xl'>
                Project Name
              </label>
              <input
                type='text'
                class=' border-2 rounded h-12 px-5 text-3xl '
                id='projectname'
                placeholder='Project name'
                onChange={e => {
                  let temp = data.projects;
                  console.log(temp);
                  setData(p => ({
                    ...p,
                    projects: temp.splice(edit.id, 1, {
                      name: e.target.value,
                      des: temp?.projects[edit.id].des,
                    }),
                  }));
                }}
                value={edit.editing ? data.projects[edit.id]?.name : ''}
              />
              <label className='text-xl mt-3' htmlFor='projectdes'>
                Project Description
              </label>
              <textarea
                placeholder='Project Description'
                id='projectdes'
                onChange={e => {
                  setData(p => ({...p, aboutme: e.target.value}));
                }}
                rows='4'
                className='border-2 rounded resize-none text-3xl px-5'
              >
                {edit.editing ? data.projects[0].des : ''}
              </textarea>
              <label htmlFor='projectdemo' className='text-xl mt-3'>
                Project Demo URL
              </label>
              <input
                type='text'
                class=' border-2 rounded h-12 px-5 text-3xl '
                id='projectdemo'
                placeholder='Project Demo URL'
              />
              <label htmlFor='projectgithub' className='text-xl mt-3'>
                Project Github URL
              </label>
              <input
                type='text'
                class=' border-2 rounded h-12 px-5 text-3xl '
                id='projectgithub'
                placeholder='Project Github URL'
              />
              <div className='flex justify-end mt-4'>
                <button
                  className={`p-2 bg-red-700 rounded-xl  hover:bg-red-500 px-10 text-white  ${
                    edit.editing ? 'hiden' : ''
                  }`}
                >
                  Delete
                </button>
                <button className='p-2 bg-cover rounded-xl border-4 border-cover hover:bg-transparent  px-10 text-white ml-7 hover:text-cover'>
                  {edit.editing ? 'Save' : 'Add'}
                </button>
                <button className='p-2 border-4 border-gray-300  rounded-xl px-10 text-gray-400 ml-7 hover:bg-gray-300'>
                  Cancel
                </button>
              </div>
            </form>
          )}
          {acountSettingState === 2 && (
            <form className='flex flex-col pl-10 pr-20 mt-6 justify-between'>
              <label htmlFor='facebook' className='text-xl mt-3'>
                Facebook
              </label>
              <input
                type='text'
                class=' border-2 rounded h-12 px-5 text-3xl '
                id='facebook'
                placeholder='Facebook Link'
              />
              <label htmlFor='github' className='text-xl mt-3'>
                Github
              </label>
              <input
                type='text'
                class=' border-2 rounded h-12 px-5 text-3xl '
                id='github'
                placeholder='Github Link'
              />
              <label htmlFor='linkedin' className='text-xl mt-3'>
                Linkedin
              </label>
              <input
                type='text'
                class=' border-2 rounded h-12 px-5 text-3xl '
                id='linkedin'
                placeholder='Github Link'
              />
              <div className='flex justify-end mt-20'>
                <button
                  className='p-2 bg-cover rounded-xl border-4 border-cover hover:bg-transparent  px-10 text-white hover:text-cover'
                  onClick={e => {
                    e.preventDefault();
                    setData1(data);
                  }}
                >
                  Save
                </button>
                <button
                  className='p-2 border-4 border-gray-300  rounded-xl px-10 text-gray-400 ml-7 hover:bg-gray-300'
                  onClick={e => {
                    e.preventDefault();
                    setData(data1);
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
          {acountSettingState === 3 && (
            <form className='flex flex-col pl-10 pr-20 mt-6 justify-between'>
              <label htmlFor='currentpassword' className='text-xl mt-3'>
                Current Password
              </label>
              <input
                type='password'
                class=' border-2 rounded h-12 px-5 text-3xl '
                id='currentpassword'
                placeholder='Password'
              />
              <label htmlFor='newpassword' className='text-xl mt-3'>
                New Password
              </label>
              <input
                type='text'
                class=' border-2 rounded h-12 px-5 text-3xl '
                id='newpassword'
                placeholder='New Password'
              />
              <label htmlFor='Confirmpassword' className='text-xl mt-3'>
                Confirm Password
              </label>
              <input
                type='text'
                class=' border-2 rounded h-12 px-5 text-3xl '
                id='Confirmpassword'
                placeholder='Confirm Password'
              />
              <div className='flex justify-end mt-20'>
                <button
                  className={`p-2 bg-red-700 rounded-xl  hover:bg-red-500 px-10 text-white`}
                >
                  Delete Account
                </button>
                <button className='p-2 bg-cover rounded-xl border-4 border-cover hover:bg-transparent  px-10 text-white ml-7 hover:text-cover'>
                  Save
                </button>
                <button className='p-2 border-4 border-gray-300  rounded-xl px-10 text-gray-400 ml-7 hover:bg-gray-300'>
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileSetting;
