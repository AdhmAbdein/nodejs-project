const request = require('supertest');
const app = require('../app');

let server;

beforeAll(done => {
  server = app.listen(0, () => done()); // Bind to an available port dynamically
});

afterAll(done => {
  server.close(done); // Ensure the server is closed properly
});

describe('GET /', () => {
  it('responds Hello I am Adham and this is nodejs website', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello I am Adham and this is nodejs website');
  });
});

