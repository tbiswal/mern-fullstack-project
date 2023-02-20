import fs from 'fs';
import admin from 'firebase-admin';
import express from 'express';
import Event from '../models/event.js';

const credentials = JSON.parse(fs.readFileSync('./credentials.json'));

if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(credentials),
  });
}

const router = express.Router();

router.get('/api/events', async (req, res) => {
  const events = await Event.find({}).sort({ _id: -1 });
  res.send(events);
});

router.use(async (req, res, next) => {
  const { authtoken } = req.headers;

  if (authtoken) {
    try {
      req.user = (await admin.auth().verifyIdToken(authtoken)) || {};

      console.log(req.user);
    } catch (e) {
      res.sendStatus(400);
    }

    if (req.user) {
      next();
    } else {
      res.sendStatus(401);
    }
  }
});

router.post('/api/events', async (req, res) => {
  const newEvent = new Event(req.body);
  await newEvent.save();
  console.log(newEvent);
  res.send(newEvent);
});

export default router;
