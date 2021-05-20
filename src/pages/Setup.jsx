import React, {useState, useEffect, useContext} from 'react';
import {Link, useParams} from 'react-router-dom';
import {toast} from 'react-toastify';

import axios from '../axios';
import {useHistory} from 'react-router';
import {AuthContext} from '../AuthContext';

function Setup() {
  const [cities, setCities] = useState([]);
  const [genders, setGenders] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [skills, setSkills] = useState([]);
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [age, setAge] = useState(0);
  const [aboutMe, setAboutMe] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [skill, setSkill] = useState([]);
  const [language, setLanguage] = useState('');
  const [cv, setCv] = useState(null);
  const [certificate, setCertificate] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);
  const [previewUrl, setPreviewUrl] = useState();
  const history = useHistory();

  const auth = useContext(AuthContext);

  const {userId} = useParams();

  useEffect(() => {
    if (!profilePicture) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(profilePicture);
  }, [profilePicture]);

  //get data from backend
  useEffect(() => {
    const getData = async () => {
      const cities = await axios.get('/api/cities');
      const genders = await axios.get('/api/genders');
      const languages = await axios.get('/api/languages');
      const skills = await axios.get('/api/tags');
      setCities(cities.data.data);
      setLanguages(languages.data.data);
      setGenders(genders.data.data);
      setSkills(skills.data.data);
    };
    getData();
  }, []);

  const handleSelectSkill = e => {
    setSkill(Array.from(e.target.selectedOptions, option => option.value));
  };

  const createProfile = async e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('phone_number', phone);
    formData.append('gender_id', gender);
    formData.append('language_id', language);
    formData.append('city_id', city);
    formData.append('age', age);
    formData.append('skills', skill);
    formData.append('cv', cv);
    formData.append('certificate', certificate);
    formData.append('profile_picture', profilePicture);
    formData.append('about_me', aboutMe);

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };

    const resp = await axios.post(
      `/api/users/${parseInt(userId)}/profiles`,
      formData,
      config
    );

    if (!resp.data.error) {
      toast.success(resp.data.message, {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        auth.login(resp.data.user, resp.data.access_token);
        history.push(`/profile/${parseInt(userId)}`);
      }, 2500);
    }
  };

  const pickedCVHandler = event => {
    let pickedFile;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setCv(pickedFile);
    } else {
      return 0;
    }
  };

  const pickedCertivicateHandler = event => {
    let pickedFile;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setCertificate(pickedFile);
    } else {
      return 0;
    }
  };

  const pickedProfilePictureHandler = event => {
    let pickedFile;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setProfilePicture(pickedFile);
    } else {
      return 0;
    }
  };

  return (
    <div className=' lg:flex mt-20 lg:flex-row-reverse shadow-md md:w-2/3 mx-auto my-3 rounded-md border none'>
      <div className='lg:w-2/5 bg-cover text-lg text-white py-4 px-6 md:px-12'>
        <h1 className='text-3xl my-5'>Complete Your Profile</h1>
        <p className='mb-3'>
          Fill in your profile for employers to better understand your services
          when they visit your profile page.
        </p>
        <p>
          It is important to leave accurate information here to maximize your
          chances of getting jobs.
        </p>
        <p className='mb-3 mt-24 text-center'>
          You can aslo press skip & complete your profile info later.
        </p>
        <div className='justify-center flex space-x-4 m-5'>
          <Link to={`/profile/${parseInt(userId)}`}>
            <button className='flex justify-center items-center w-24 text-white p-1 border border-white rounded-md focus:outline-none'>
              Skip
            </button>
          </Link>
          <button
            type='submit'
            form='form'
            className='bg-white flex justify-center items-center w-24 text-cover p-1 rounded-md focus:outline-none'
          >
            Next
          </button>
        </div>
      </div>
      <div className='lg:w-3/5 m-5'>
        <form id='form' onSubmit={createProfile}>
          <div className='flex flex-col w-full lg:w-4/5 mb-5'>
            <label className='text-lg'>Full Name</label>
            <input
              type='text'
              required
              className='px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600'
              placeholder='Full Name'
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div className='flex items-center justify-between space-x-4 mb-5'>
            <div className='flex-1 flex flex-col'>
              <label className='text-lg'>Gender</label>
              <select
                required
                className='cursor-pointer px-3 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600'
                name='gender'
                value={gender}
                onChange={e => setGender(e.target.value)}
              >
                {genders &&
                  genders.map(gender => (
                    <option value={gender.id} key={gender.id}>
                      {gender.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className='flex flex-col'>
              <label className='text-lg'>Age</label>
              <input
                required
                type='number'
                className='px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600'
                placeholder='Number'
                value={age}
                onChange={e => setAge(e.target.value)}
              />
            </div>
            <div className='flex-1 flex flex-col'>
              <label className='text-lg'>Language</label>
              <select
                required
                className='cursor-pointer px-3 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600'
                name='language'
                value={language}
                onChange={e => setLanguage(e.target.value)}
              >
                {languages &&
                  languages.map(language => (
                    <option value={language.id} key={language.id}>
                      {language.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <div className='flex flex-row  mb-5'>
            <div className='w-2/5 mr-10'>
              <label className='text-lg'>City</label>
              <select
                required
                className='cursor-pointer px-3 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600'
                value={city}
                onChange={e => setCity(e.target.value)}
              >
                {cities &&
                  cities.map(city => (
                    <option value={city.id} key={city.id}>
                      {city.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className='w-3/5'>
              <label className='text-lg'>Phone Number</label>
              <input
                required
                type='tel'
                className='px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600'
                placeholder='+964XXX XXX XXXX'
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div className='flex flex-col w-full lg:w-full mb-5'>
            <label className='text-lg'>Skills</label>
            <small className='text-gray-500'>
              hold contrl and select skills
            </small>
            {/* <Multiselect /> */}
            <select
              required
              className='resize-y cursor-pointer px-3 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600'
              // value={skill}
              onChange={handleSelectSkill}
              multiple
              size='5'
            >
              {skills &&
                skills.map(skill => (
                  <option value={skill.name} key={skill.id}>
                    {skill.name}
                  </option>
                ))}
            </select>
          </div>
          <div className='flex flex-col w-full lg:w-full mb-5'>
            <label className='text-lg' htmlFor='aboutMe'>
              About me
            </label>

            <textarea
              required
              maxLength='300'
              className='border resize-none focus:ring-gray-500 p-3 focus:border-gray-900 w-full border-gray-300 rounded-md focus:outline-none text-gray-600'
              id='aboutMe'
              rows='6'
              value={aboutMe}
              onChange={e => setAboutMe(e.target.value)}
            ></textarea>
          </div>

          <div className='flex items-center space-x-4 mb-5'>
            <div className='flex flex-col mr-5'>
              <label className='text-lg'>Upload resume or CV</label>
              <label className='cursor-pointer px-2 py-2 flex border focus:ring-gray-500 focus:border-gray-900 sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600'>
                <svg className='svg-icon w-5 mr-2' viewBox='0 0 20 20'>
                  <path d='M17.927,5.828h-4.41l-1.929-1.961c-0.078-0.079-0.186-0.125-0.297-0.125H4.159c-0.229,0-0.417,0.188-0.417,0.417v1.669H2.073c-0.229,0-0.417,0.188-0.417,0.417v9.596c0,0.229,0.188,0.417,0.417,0.417h15.854c0.229,0,0.417-0.188,0.417-0.417V6.245C18.344,6.016,18.156,5.828,17.927,5.828 M4.577,4.577h6.539l1.231,1.251h-7.77V4.577z M17.51,15.424H2.491V6.663H17.51V15.424z'></path>
                </svg>
                <input
                  type='file'
                  onChange={pickedCVHandler}
                  className='hidden'
                />
                Upload
              </label>
              <small className='pl-2 text-gray-500'>
                {cv ? cv.name : 'name of the file'}
              </small>
            </div>
            <div className='flex flex-col'>
              <label className='text-lg'>Certificate</label>
              <label className='cursor-pointer px-2 py-2 flex border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600'>
                <svg className='svg-icon w-5 mr-2' viewBox='0 0 20 20'>
                  <path d='M17.927,5.828h-4.41l-1.929-1.961c-0.078-0.079-0.186-0.125-0.297-0.125H4.159c-0.229,0-0.417,0.188-0.417,0.417v1.669H2.073c-0.229,0-0.417,0.188-0.417,0.417v9.596c0,0.229,0.188,0.417,0.417,0.417h15.854c0.229,0,0.417-0.188,0.417-0.417V6.245C18.344,6.016,18.156,5.828,17.927,5.828 M4.577,4.577h6.539l1.231,1.251h-7.77V4.577z M17.51,15.424H2.491V6.663H17.51V15.424z'></path>
                </svg>
                <input
                  type='file'
                  className='hidden'
                  onChange={pickedCertivicateHandler}
                />
                Upload
              </label>
              <small className='pl-2 text-gray-500'>
                {certificate ? certificate.name : 'name of the file'}
              </small>
            </div>
          </div>
          <div className='flex flex-col mb-4'>
            <label className='text-lg'>Profile Picture</label>
            <label className='cursor-pointer px-2 py-2 flex border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600'>
              <svg className='svg-icon w-5 mr-2' viewBox='0 0 20 20'>
                <path d='M17.927,5.828h-4.41l-1.929-1.961c-0.078-0.079-0.186-0.125-0.297-0.125H4.159c-0.229,0-0.417,0.188-0.417,0.417v1.669H2.073c-0.229,0-0.417,0.188-0.417,0.417v9.596c0,0.229,0.188,0.417,0.417,0.417h15.854c0.229,0,0.417-0.188,0.417-0.417V6.245C18.344,6.016,18.156,5.828,17.927,5.828 M4.577,4.577h6.539l1.231,1.251h-7.77V4.577z M17.51,15.424H2.491V6.663H17.51V15.424z'></path>
              </svg>
              <input
                type='file'
                className='hidden'
                onChange={pickedProfilePictureHandler}
              />
              Upload
            </label>
            <small className='pl-2 text-gray-500'>
              {profilePicture ? profilePicture.name : 'name of the file'}
            </small>

            {previewUrl && (
              <div className='border border-gray-300 mb-4 mt-2 flex justify-center'>
                <div className='w-56 h-auto py-2'>
                  <p className='text-gray-600 pb-2'>Preview Image</p>

                  <img src={previewUrl} className='' alt='Preview' />
                </div>
              </div>
            )}
          </div>

          <div className='flex items-center  space-x-4 mb-5'></div>
        </form>
      </div>
    </div>
  );
}

export default Setup;
