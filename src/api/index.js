import axios from 'axios';

const api = axios.create({
  baseURL: 'https://62286b649fd6174ca82321f1.mockapi.io/case-study',
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api;
