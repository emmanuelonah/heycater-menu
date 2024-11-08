import { ROUTES } from './index.route';

describe('Routes', () => {
  it('should return all routes', () => {
    expect(ROUTES).toEqual({
      notFound: '*',
      client: {
        home: '/',
      },
      admin: {
        home: '/admin',
      },
    });
  });
});
