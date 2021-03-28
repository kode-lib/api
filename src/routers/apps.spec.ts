import supertest from 'supertest';
import { Application } from '../app';

const app = new Application({ disableLogging: true }).express;

describe('Testing apps routes', () => {
    it('should retrieve latest download url for werk', async () => {
        await supertest(app).get('/v1/apps/werk/latest/url').expect(200);
    });

    it('should return the latest version for werk', async () => {
        await supertest(app).get('/v1/apps/werk/latest/version').expect(200);
    });
});
