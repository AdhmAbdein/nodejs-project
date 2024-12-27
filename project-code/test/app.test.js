const request = require('supertest');
const app = require('../app');

let server; // Declare a variable to hold the server instance

beforeAll(() => {
    server = app.listen(3000); // Start the server before tests
});

afterAll((done) => {
    server.close(done); // Ensure the server is properly closed after tests
});

describe('GET /', () => {
    it('responds Hello I am Adham and this is nodejs website', async () => {
        const response = await request(app).get('/');
        expect(response.text).toBe('Hello I am Adham and this is nodejs website');
    });
});

