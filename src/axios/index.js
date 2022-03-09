import axios from 'axios';

export const productAxios = axios.create({
  baseURL: 'https://fakestoreapi.com/',
  headers: {
    'Content-type': 'application/json',
  }
});