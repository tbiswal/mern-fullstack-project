import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import * as dotenv from 'dotenv';
import dbConnect from './dbConnect.js';
import router from './routes/eventApi.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());
app.use('/', router);

const username = process.env.DB_USER;
const password = process.env.DB_PASS;
const cluster = process.env.DB_CLUSTER;
const dbname = process.env.DB_NAME;

dbConnect(username, password, cluster, dbname);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
