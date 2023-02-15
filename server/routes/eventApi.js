import express from 'express';
import { Event } from '../models/event.js';

const router = express.Router();

router.get('/api/events', async (req, res) => {
  const events = await Event.find({}).sort({ _id: -1 });
  res.send(events);
});

router.post('/api/events', async (req, res) => {
  const newEvent = new Event(req.body);
  await newEvent.save();
  console.log(newEvent);
  res.send(newEvent);
});

export { router };
