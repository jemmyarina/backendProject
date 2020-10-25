import dotenv from 'dotenv';

dotenv.config();

export default { 
    PORT: process.env.PORT,
    SECRETE_KEY: process.env.SECRETE_KEY,
    DATABASE_URL: process.env.DATABASE_URL
 };     
