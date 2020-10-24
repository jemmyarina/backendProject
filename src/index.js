import express from 'express';
import mongoose from 'mongoose';
// import dotenv from 'dotenv';
import config from './config/config';
import blogRouter from './routes/blogRoute';
import contactRouter from './routes/contactRoute';
import userRouter from './routes/userRoute';

const app = express();
app.use(express.json());
app.use(blogRouter);
app.use(contactRouter);
app.use(userRouter);
 

const url = 'mongodb://localhost:27017/jem_brandDB';
const connect = mongoose.connect(url);
connect.then((db) => {
  console.log(" The server is currently connected correctly");
}, (err) => { console.log(err); });


// const PORT = config.PORT;

const PORT=4000;

app.listen(PORT, ()=> console.log(`App running on port ${PORT}`));