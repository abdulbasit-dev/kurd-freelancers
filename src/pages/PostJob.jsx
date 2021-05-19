import React, {useContext, useEffect, useState} from 'react';
import {
  TextField,
  MenuItem,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  FormControl,
  Button,
  CircularProgress,
} from '@material-ui/core';
import {toast} from 'react-toastify';
import {useHistory} from 'react-router';

import axios from '../axios';

//images
import bag from '../assets/img/PostJob/bag.svg';
import paper from '../assets/img/PostJob/paper.svg';
import upload from '../assets/img/PostJob/upload.svg';
import info from '../assets/img/PostJob/info.svg';
// import remove from '../assets/img/PostJob/remove.svg';
import cog from '../assets/img/PostJob/cog.svg';
import {AuthContext} from '../AuthContext';

function JobPost() {
  const [loading, setLoading] = useState(true);
  const [skills, setSkills] = useState([]);
  const [cities, setCities] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [tag, setTag] = useState('');
  const [currencyType, setCurrencyType] = useState('USA');
  const [fixPrice, setFixPrice] = useState(0);
  const [startRange, setStartRange] = useState(0);
  const [endRagne, setEndRagne] = useState(0);
  const [timeDelivaryType, setTimeDelivaryType] = useState('');
  const [timeAmount, setTimeAmount] = useState(0);
  const [location, setLocation] = useState('');
  const [priceType, setPriceType] = useState('fix');

  const auth = useContext(AuthContext);
  const history = useHistory();

  //get data from backend
  useEffect(() => {
    const getData = async () => {
      const cities = await axios.get('/api/cities');
      const skills = await axios.get('/api/tags');
      setCities(cities.data.data);
      setSkills(skills.data.data);
      setLoading(false);
    };
    getData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const savePost = async e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('user_id', auth.user.id);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('file', file);
    formData.append('tag_id', tag);
    formData.append('currency_type', currencyType);
    formData.append('fix_price', fixPrice);
    formData.append('start_range_price', startRange);
    formData.append('end_range_price', endRagne);
    formData.append('time_delivary_type', timeDelivaryType);
    formData.append('time_amount', timeAmount);
    formData.append('city_id', location);

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };

    const resp = await axios.post(`/api/posts`, formData, config);

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
        history.push(`/jobs`);
      }, 2500);
    }
  };

  const pickedFileHandler = event => {
    let pickedFile;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
    } else {
      return 0;
    }
  };

  const handlePriceType = e => {
    setPriceType(e.target.value);
    setFixPrice(0);
    setStartRange(0);
    setEndRagne(0);
  };

  return loading ? (
    <div className='flex justify-center my-48'>
      <CircularProgress size={100} color='secondary' thickness={2} />
    </div>
  ) : (
    <div className='container mt-10 mb-32'>
      <h1 className='text-3xl'>Post Your Job on KurdFreelancer</h1>
      <div className='bg-gray-300 h-0.1 mt-4 w-2/5'></div>
      <form action='' onSubmit={savePost}>
        <div className='grid grid-cols-1 lg:grid-cols-2 mt-12 mb-8'>
          <div className='pr-12  border-r-2 border-gray-400'>
            <div className='mb-12'>
              <div className='flex mb-4'>
                <img src={bag} alt='bag' />
                <h3 className='capitalize ml-2 text-xl'>
                  Give your job a title
                </h3>
              </div>

              <TextField
                type='text'
                fullWidth={true}
                label='Develop Android app for e-commerce site.'
                variant='outlined'
                required
                value={title}
                onChange={e => setTitle(e.target.value)}
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
                required
                value={description}
                onChange={e => setDescription(e.target.value)}
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
                    <div className='flex flex-col'>
                      <label className='cursor-pointer px-2 py-2 flex border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600'>
                        <svg className='svg-icon w-5 mr-2' viewBox='0 0 20 20'>
                          <path d='M17.927,5.828h-4.41l-1.929-1.961c-0.078-0.079-0.186-0.125-0.297-0.125H4.159c-0.229,0-0.417,0.188-0.417,0.417v1.669H2.073c-0.229,0-0.417,0.188-0.417,0.417v9.596c0,0.229,0.188,0.417,0.417,0.417h15.854c0.229,0,0.417-0.188,0.417-0.417V6.245C18.344,6.016,18.156,5.828,17.927,5.828 M4.577,4.577h6.539l1.231,1.251h-7.77V4.577z M17.51,15.424H2.491V6.663H17.51V15.424z'></path>
                        </svg>
                        <input
                          type='file'
                          className='hidden'
                          onChange={pickedFileHandler}
                        />
                        Upload
                      </label>
                    </div>
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
                  <p className='text-gray-500 mt-2'>
                    {file ? file.name : 'name of the file'}
                  </p>
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
                select
                fullWidth={true}
                size='small'
                label='Job Type'
                variant='outlined'
                required
                value={tag}
                onChange={e => setTag(e.target.value)}
              >
                {skills.map(option => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>

              {/* <div className='flex items-center mt-2'>
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
            </div> */}
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
                      value={currencyType}
                      onChange={e => setCurrencyType(e.target.value)}
                    >
                      <FormControlLabel
                        labelPlacement='start'
                        value='USA'
                        control={<Radio color='primary' />}
                        label='USA'
                      />
                      <FormControlLabel
                        labelPlacement='start'
                        value='IQD'
                        control={<Radio color='primary' />}
                        label='IQD'
                      />
                    </RadioGroup>
                  </div>
                </FormControl>

                {/* PRICE SECTION  */}
                <div className='mt-8 '>
                  <FormControl component='fieldset'>
                    <div className='flex flex-col'>
                      <FormLabel component='legend'>
                        Choose Price Type:
                      </FormLabel>
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
                        required={priceType === 'fix' && true}
                        value={fixPrice}
                        onChange={e => setFixPrice(e.target.value)}
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
                            required={priceType !== 'fix' && true}
                            value={startRange}
                            onChange={e => setStartRange(e.target.value)}
                          />
                        </div>
                        <TextField
                          size='small'
                          type='number'
                          id='standard-basic'
                          label='max rang'
                          variant='outlined'
                          fullWidth={false}
                          required={priceType !== 'fix' && true}
                          value={endRagne}
                          onChange={e => setEndRagne(e.target.value)}
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
                        select
                        fullWidth={true}
                        size='small'
                        label='Time Type'
                        variant='outlined'
                        required
                        value={timeDelivaryType}
                        onChange={e => setTimeDelivaryType(e.target.value)}
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
                        fullWidth={true}
                        type='number'
                        size='small'
                        label='Amount Of Time'
                        variant='outlined'
                        required={true}
                        value={timeAmount}
                        onChange={e => setTimeAmount(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                {/* LOCATION  */}
                <div className='mt-8'>
                  <h3 className='text-xl text-gray-400 mb-4'>Location:</h3>

                  <TextField
                    select
                    fullWidth={true}
                    size='small'
                    label='Choose a Loaction'
                    variant='outlined'
                    required={true}
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                  >
                    {cities.map(option => (
                      <MenuItem key={option} value={option.id}>
                        {option.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button variant='contained' color='primary' type='submit'>
          Post
        </Button>
      </form>
    </div>
  );
}

export default JobPost;
