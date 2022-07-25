import axios from 'axios';

export const API_URL = 'https://62286b649fd6174ca82321f1.mockapi.io/case-study';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api;
