import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import { Event } from './models/event.js';
import * as dotenv from 'dotenv';

dotenv.config()

const app = express();
app.use(express.json());

const username = process.env.DB_USER;
const password = process.env.DB_PASS;
const cluster = process.env.DB_CLUSTER;
const dbname = process.env.DB_NAME;

mongoose.set('strictQuery', false);
mongoose
  .connect(
    `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`,
    {
      usenewURLParser: true,
      useUNifiedTopology: true,
    }
  )
  .then(() => {
    console.log('CONNECION OPEN!');
  })
  .catch((err) => {
    console.log('CONNECION ERROR!');
    console.log(err);
  });

app.use(morgan('tiny'));
app.use(cors());

app.use(express.json());

app.get('/api/events', async (req, res) => {
  const events = await Event.find({}).sort({ _id: -1 });
  res.send(events);
});

app.post('/api/events', async (req, res) => {
  const newEvent = new Event(req.body);
  await newEvent.save();
  console.log(newEvent);
  res.send(newEvent);
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
