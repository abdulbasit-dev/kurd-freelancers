import axios from 'axios';

// base url to make requst to the movie database
const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API,
});

export default instance;

// for example
// instance.get('/foo-bar')
// it equal to
// 'https://api.themoviedb.org/3/foo-bar'
