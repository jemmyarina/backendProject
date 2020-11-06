import express from 'express';
import mongoose from 'mongoose';
import config from './config/config';
import blogRouter from './routes/blogRoute';
import contactRouter from './routes/contactRoute';
import userRouter from './routes/userRoute';

const app = express();
app.use(express.json());
app.use(blogRouter);
app.use(contactRouter);
app.use(userRouter);

app.use('/', (req, res) => {
  res.status(200).json({message: 'Welcome to Jemima- dev website!'})
});

const c = config.DATABASE_URL;
const connect = mongoose.connect(url);
connect.then((db) => {
  console.log(" The server is currently connected correctly");
}, (err) => { console.log(err); });

const PORT = config.PORT;

app.listen(PORT, ()=> console.log(`App running on port ${PORT}`));

export default app;