// lib/util/axiosConfig.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://h0z4t4u2d9.execute-api.us-east-1.amazonaws.com/PostUserr/Cocina', // Ajusta la URL base según tu backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
