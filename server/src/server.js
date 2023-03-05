import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import * as dotenv from 'dotenv';
import connectDB from './db/connectDB.js';
import eventRouter from './routes/eventRoutes.js';
import userRouter from './routes/userRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());
app.use('/', [eventRouter, userRouter]);
app.use((err, req, res, next) => {
  const { status = 500, defaultMessage = 'Something went wrong!' } = err;
  res.status(status).send({
    message: err.message || defaultMessage,
  });
});

// Handle errors
app.use((err, req, res, next) => {
  const {
    status = 200,
    defaultHttpCode = 500,
    defaultMessage = 'Something went wrong!',
  } = err;

  res.status(status).send({
    httpCode: err.httpCode || defaultHttpCode,
    error: err.message || defaultMessage,
  });
});

connectDB();

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

export default app;
