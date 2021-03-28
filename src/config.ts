import dotenv from 'dotenv';

dotenv.config();

interface IConfig {
    port: number;
    authDomain: string;
    authAudience: string;
}

export const Config: IConfig = {
    port: parseInt(process.env.PORT || '4000', 10),

    authDomain: process.env.AUTH_DOMAIN || '',
    authAudience: process.env.AUTH_AUDIENCE || 'http://localhost:4000',
};
