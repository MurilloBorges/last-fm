import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_URL_API}`,
  params: {
    api_key: `${process.env.REACT_APP_API_KEY}`,
  },
});

export default api;
