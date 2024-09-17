// services/api.js
import axios from 'axios';

const API_URL = 'http://192.168.0.238:3000';

const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});


export const apiLogin = async ( data) => {
  
  try {
    const response = await apiClient.post('/api/auth/login', data);
    return  response;
  } catch (error) {
    return error.response
  }
};

export const apiRegister = async (data) =>{
  try {
    const response = await apiClient.post('/api/auth/register', data)
    console.log(response);
    
    return response
  } catch (error) {
    return error.response
  }
}