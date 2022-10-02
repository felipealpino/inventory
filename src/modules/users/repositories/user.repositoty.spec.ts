import App from '../../../app';
import UsersRoute from '../../../routes/user.routes';

const request = require('supertest');

describe('Test the root path', () => {
	const app = new App([new UsersRoute()]);
	test('It should response the GET method', (done) => {
		request(app)
			.get('/')
			.then((response) => {
				expect(response.statusCode).toBe(200);
				done();
			});
	});
});
