import axios from 'axios';

export const API_URL = 'https://upayments-studycase-api.herokuapp.com/api';
const API_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inl1c3VmZnlsZHJtMUBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20veXVzdWZ5bGRybSIsImlhdCI6MTY1OTI2NDcwOCwiZXhwIjoxNjU5Njk2NzA4fQ.mjTeCRd29dEcqQTIu2nStRbJbYoOtQu_i0QZ2eu7IpE';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_TOKEN}`
  }
});

export default api;
