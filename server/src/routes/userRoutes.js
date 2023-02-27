import express from 'express';
import registerUser from '../controllers/users/registerUserController.js';

const userRouter = express.Router();

userRouter.post('/api/users', registerUser);

userRouter.use((err, req, res, next) => {
  const { status = 500, defaultMessage = 'Something went wrong!' } = err;
  res.status(status).send({
    message: err.message || defaultMessage,
  });
});

export default userRouter;
