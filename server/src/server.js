import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import * as dotenv from 'dotenv';
import connectDB from './db/connectDB.js';
import router from './routes/eventRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());
app.use('/', router);

connectDB();

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

export default app;
