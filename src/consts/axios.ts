import axios from 'axios';

export const axiosApi = axios.create({
  baseURL: 'https://data.ex.co.kr',
  timeout: 5000,
});
