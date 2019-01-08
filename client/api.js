import axios from 'axios';
import { API_URL } from './config';

const client = axios.create({
  baseURL: API_URL
});

export const getMetadataList = () => {
  return client.get('/metadata');
};
