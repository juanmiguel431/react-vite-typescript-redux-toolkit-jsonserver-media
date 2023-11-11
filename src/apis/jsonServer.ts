import axios from 'axios';
import { jsonServerUrl } from '../constants.ts';

const jsonServer = axios.create({
  baseURL: jsonServerUrl
});

export default jsonServer;
