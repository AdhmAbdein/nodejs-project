const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
    it('responds Hello I am Adham and this is nodejs website', async () => {
        const response = await request(app).get('/');
        expect(response.text).toBe('Hello I am Adham and this is nodejs website');
    });
});
