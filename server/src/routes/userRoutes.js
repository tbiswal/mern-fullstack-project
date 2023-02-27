import express from 'express';
import {
  registerUser,
  loginUser,
} from '../controllers/users/registerUserController.js';

const userRouter = express.Router();

userRouter.post('/api/users', registerUser);
userRouter.post('/api/login', loginUser);

export default userRouter;
