import axios from 'axios';

const jsonServer = axios.create({
  baseURL: 'http://localhost:3004/users'
});

export default jsonServer;
