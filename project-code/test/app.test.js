const request = require('supertest');
const app = require('../app');

let server;

beforeAll(() => {
  // Mock or override the server start logic to avoid starting it during tests.
  server = app.listen(0); // Let the system choose an available port.
});

afterAll(() => {
  // Close the server after the tests are done to prevent the open handle issue.
  server.close();
});

describe('GET /', () => {
  it('responds Hello I am Adham and this is nodejs website', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello I am Adham and this is nodejs website');
  });
});

