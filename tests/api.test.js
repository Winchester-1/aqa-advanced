const api = require('./api');

describe('JSONPlaceholder API', () => {

  test('GET /posts returns list of posts', async () => {
    const response = await api.get(
      'https://jsonplaceholder.typicode.com/posts'
    );

    expect(response.status).toBe(200);

    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);

    expect(response.data[0]).toHaveProperty('userId');
    expect(response.data[0]).toHaveProperty('id');
    expect(response.data[0]).toHaveProperty('title');
    expect(response.data[0]).toHaveProperty('body');
  });

  test('GET /posts/1 returns single post', async () => {
    const response = await api.get(
      'https://jsonplaceholder.typicode.com/posts/1'
    );

    expect(response.status).toBe(200);

    expect(typeof response.data).toBe('object');

    expect(response.data.id).toBe(1);
    expect(response.data).toHaveProperty('userId');
    expect(response.data).toHaveProperty('title');
    expect(response.data).toHaveProperty('body');
  });

  test('POST /posts creates new post', async () => {
    const newPost = {
      title: 'Test title',
      body: 'Test body',
      userId: 1
    };

    const response = await api.post(
      'https://jsonplaceholder.typicode.com/posts',
      newPost
    );

    expect(response.status).toBe(201);

    expect(response.data).toHaveProperty('id');
    expect(response.data.title).toBe(newPost.title);
    expect(response.data.body).toBe(newPost.body);
    expect(response.data.userId).toBe(newPost.userId);
  });

  test('GET /posts/1/comments returns first post comments', async () => {
    const response = await api.get(
      'https://jsonplaceholder.typicode.com/posts/1/comments'
    );

    expect(response.status).toBe(200);

    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);

    expect(response.data[0]).toHaveProperty('postId');
    expect(response.data[0].postId).toBe(1);
    expect(response.data[0]).toHaveProperty('id');
    expect(response.data[0]).toHaveProperty('name');
    expect(response.data[0]).toHaveProperty('email');
    expect(response.data[0]).toHaveProperty('body');
  });

  test('GET /comments?postId=1 returns only first post comments', async () => {
    const response = await api.get(
      'https://jsonplaceholder.typicode.com/posts/1/comments?postId=1'
    );

    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);
    
    expect(response.data[0]).toHaveProperty('postId');
    expect(response.data[0].postId).toBe(1);
    expect(response.data[0]).toHaveProperty('id');
    expect(response.data[0]).toHaveProperty('name');
    expect(response.data[0]).toHaveProperty('email');
    expect(response.data[0]).toHaveProperty('body');
  });
});