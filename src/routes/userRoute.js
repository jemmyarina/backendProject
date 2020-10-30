import express from 'express';
import {auth,admin} from '../middleware/authentication';
import { signup, readOneUser, readAllusers, updateUser, login,deleteUser} from '../controllers/userController';
// import {user_signup1} from '../controllers/signup';

const userRouter = express.Router();


// userRouter.post('/insertUser1', user_signup1);
userRouter.post('/insertUser', signup);
userRouter.get('/selectUser/:id', [auth, admin],readOneUser);
userRouter.get('/selectUsers', [auth, admin],readAllusers);
userRouter.delete('/deleteUser/:id', [auth, admin],deleteUser);
userRouter.put('/updateUser/:id', [auth, admin],updateUser);

userRouter.post('/login', login);

export default userRouter;



