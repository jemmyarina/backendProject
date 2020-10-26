import express from 'express';
import {auth} from '../middleware/authentication';
import { signup, readOneUser, readAllusers, updateUser, login,deleteUser} from '../controllers/userController';
// import {user_signup1} from '../controllers/signup';

const userRouter = express.Router();


// userRouter.post('/insertUser1', user_signup1);
userRouter.post('/insertUser', signup);
userRouter.get('/selectUser/:id', auth,readOneUser);
userRouter.get('/selectUsers', auth,readAllusers);
userRouter.delete('/deleteUser/:id', auth,deleteUser);
userRouter.put('/updateUser/:id', auth,updateUser);

userRouter.post('/login', login);

export default userRouter;



