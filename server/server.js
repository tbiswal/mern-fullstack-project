import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import { Event } from './models/event.js';

const app = express();
app.use(express.json());

mongoose
  .connect('mongodb://127.0.0.1:27017/eventApp', {
    usenewURLParser: true,
    useUNifiedTopology: true,
  })
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
