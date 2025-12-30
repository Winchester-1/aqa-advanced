const axios = require('axios');

async function fetchWithError() {
  return axios.get('https://jsonplaceholder.typicode.com/WRONG_URL');
}

function fetchWithCustomConfig() {
  return axios.get('https://jsonplaceholder.typicode.com/posts', {
    headers: {
      'X-Custom-Header': 'my-custom-value',
      Authorization: 'Bearer test-token',
    },
    params: {
      userId: 1,
      _limit: 5,
    },
  });
}

async function fetchSuccess() {
  const response = await axios.get('/success-endpoint');
  return response.data;
}

async function fetchFailure() {
  try {
    await axios.get('/error-endpoint');
  } catch (error) {
    throw new Error(`Request failed with status ${error.response.status}`);
  }
}

module.exports = {
  fetchWithError,
  fetchWithCustomConfig,
  fetchSuccess,
  fetchFailure,
};