const axios = require('axios');

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

api.interceptors.request.use(request => {
  console.log('Starting Request', {
    method: request.method,
    url: request.url,
    data: request.data,
  });
  return request;
}, error => {
  console.error('Request Error:', error);
  return Promise.reject(error);
});

api.interceptors.response.use(response => {
  console.log('Response:', {
    url: response.config.url,
    status: response.status,
    data: response.data,
  });
  return response;
}, error => {
  console.error('Response Error:', error);
  return Promise.reject(error);
});

module.exports = api;