import supertest from 'supertest';
import { Application } from '../app';

const app = new Application({ disableLogging: true }).express;

describe('Testing default routes', () => {
    it('should retrieve api information', async () => {
        await supertest(app).get('/').expect(200);
    });

    it('should call healthcheck', async () => {
        await supertest(app).get('/health').expect(200);
    });
});
