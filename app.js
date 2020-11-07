import express from 'express';
import mongoose from 'mongoose';
import config from './src/config/config';
import blogRouter from './src/routes/blogRoute';
import contactRouter from './src/routes/contactRoute';
import userRouter from './src/routes/userRoute';

const app = express();
app.use(express.json());
app.use(blogRouter);
app.use(contactRouter);
app.use(userRouter);

const url = config.DATABASE_URL;
const connect = mongoose.connect(url);
connect.then((db) => {
  console.log(" The server is currently connected correctly");
}, (err) => { console.log(err); });

const PORT = config.PORT;

export default app;