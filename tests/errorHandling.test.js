const axios = require('axios');
const {
  fetchWithError,
  fetchWithCustomConfig,
  fetchSuccess, 
  fetchFailure,
} = require('./errorHandling');

jest.mock('axios');

describe('Axios error handling', () => {
  test('should handle 404 error correctly', async () => {
    axios.get.mockRejectedValue({
      response: { status: 404 },
      message: 'Request failed with status code 404',
    });

    await expect(fetchWithError()).rejects.toMatchObject({
      response: { status: 404 },
    });
  });
});

describe('Axios custom config', () => {
  test('should send correct headers and query params', async () => {
    axios.get.mockResolvedValue({
      status: 200,
      data: [],
    });

    await fetchWithCustomConfig();

    expect(axios.get).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/posts',
      expect.objectContaining({
        headers: expect.objectContaining({
          'X-Custom-Header': 'my-custom-value',
          Authorization: 'Bearer test-token',
        }),
        params: {
          userId: 1,
          _limit: 5,
        },
      })
    );
  });
});

describe('Axios mocked requests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should handle successful HTTP request', async () => {
    axios.get.mockResolvedValue({
      status: 200,
      data: { message: 'Success' },
    });

    const result = await fetchSuccess();

    expect(axios.get).toHaveBeenCalledWith('/success-endpoint');
    expect(result).toEqual({ message: 'Success' });
  });

  test('should handle failed HTTP request', async () => {
    axios.get.mockRejectedValue({
      response: {
        status: 404,
      },
    });

    await expect(fetchFailure()).rejects.toThrow(
      'Request failed with status 404'
    );

    expect(axios.get).toHaveBeenCalledWith('/error-endpoint');
  });
});