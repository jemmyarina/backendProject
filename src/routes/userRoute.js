import express from 'express';
import { signup, readOneUser, readAllusers, updateUser, login,deleteUser} from '../controllers/userController';
// import {user_signup1} from '../controllers/signup';

const userRouter = express.Router();


// userRouter.post('/insertUser1', user_signup1);
userRouter.post('/insertUser', signup);
userRouter.get('/selectUser/:id', readOneUser);
userRouter.get('/selectUsers', readAllusers);
userRouter.delete('/deleteUser/:id', deleteUser);
userRouter.put('/updateUser/:id', updateUser);

userRouter.post('/login/:id', login);

export default userRouter;



