const request = require('supertest');
const app = require('../app');

let server;

beforeAll((done) => {
  // Start the server on an available port.
  server = app.listen(0, done); // We use 'done' to ensure Jest waits for the server to start
});

afterAll((done) => {
  // Close the server after the tests to avoid open handles.
  server.close(done);  // Using 'done' ensures the server closes before Jest exits
});

describe('GET /', () => {
  it('responds Hello I am Adham and this is nodejs website', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello I am Adham and this is nodejs website');
  });
});

