import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://api-mini-wp.nafies.tech/',
    timeout: 10000
  });

export default instance