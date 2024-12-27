const request = require('supertest');
const app = require('../app');

let server;

beforeAll(async () => {
  // Start the server before tests
  server = app.listen(0);
});

afterAll(async () => {
  // Close the server after tests
  await new Promise(resolve => server.close(resolve));
});

describe('GET /', () => {
  it('responds Hello I am Adham and this is nodejs website', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello I am Adham and this is nodejs website');
  });
});

