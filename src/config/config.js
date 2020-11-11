
import dotenv from 'dotenv';

dotenv.config();

export default {
    PORT: process.env.PORT,
    SECRETE_KEY: process.env.SECRETE_KEY,
    DATABASE_URL1: process.env.DATABASE_URL1,
    DATABASE_URL: process.env.DATABASE_URL,
    DATABASE_URL_test: process.env.DATABASE_URL_TEST

    // DATABASE_URL1: process.env.DATABASE_URL
 };     