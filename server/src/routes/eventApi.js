import fs from 'fs';
import admin from 'firebase-admin';
import express from 'express';
import Event from '../models/event.js';
import createEventController from '../controllers/createEventController.js';
import createEventPersistence from '../injectables/events/createEventPersistence.js';
import AppError from '../utils/AppError.js';

const credentials = JSON.parse(fs.readFileSync('./credentials.json'));

if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(credentials),
  });
}

const router = express.Router();

// Fetch All Events
router.get('/api/events', async (req, res) => {
  // Mongoose interaction
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

router.post('/api/events', async (req, res, next) => {
  try {
    const { title, description, date } = req.body;

    console.log({ title, description, date });

    const newEvent = await createEventController(
      { createEventPersistence },
      { title, description, date }
    );

    res.send(newEvent);
  } catch (err) {
    next(err);
  }
});

router.use((err, req, res, next) => {
  const { status = 500, defaultMessage = 'Something went wrong!' } = err;
  res.status(status).send({
    message: err.message || defaultMessage,
  });
});

export default router;
