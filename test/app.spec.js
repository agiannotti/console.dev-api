const app = require('../src/app');

describe('App', () => {
  describe('GET /', () => {
    it('Should return 200 and "Hello, Console.dev!', () => {
      return supertest(app).get('/').expect(200, 'Hello, Console.dev!');
    });
  });
});
