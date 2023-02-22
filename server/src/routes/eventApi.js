import fs from 'fs';
import admin from 'firebase-admin';
import express from 'express';
import createEventController from '../controllers/events/createEventController.js';
import fetchEventController from '../controllers/events/fetchEventController.js';
import createEventPersistence from '../injectables/events/createEventPersistence.js';
import fetchEventPersistence from '../injectables/events/fetchEventPersistence.js';

import wrapAsync from '../utils/wrapAsync.js';

const router = express.Router();

router.get(
  '/api/events',
  wrapAsync(async (req, res) => {
    const events = await fetchEventController({ fetchEventPersistence });
    res.send(events);
  })
);

// const credentials = JSON.parse(fs.readFileSync('./credentials.json'));

// if (admin.apps.length === 0) {
//   admin.initializeApp({
//     credential: admin.credential.cert(credentials),
//   });
// }

// router.use(async (req, res, next) => {
//   const { authtoken } = req.headers;

//   if (authtoken) {
//     try {
//       req.user = (await admin.auth().verifyIdToken(authtoken)) || {};

//       console.log(req.user);
//     } catch (e) {
//       res.sendStatus(400);
//     }

//     if (req.user) {
//       next();
//     } else {
//       res.sendStatus(401);
//     }
//   }
// });

router.post(
  '/api/events',
  wrapAsync(async (req, res) => {
    const { title, description, date } = req.body;
    const newEvent = await createEventController(
      { createEventPersistence },
      { title, description, date }
    );

    res.send(newEvent);
  })
);

router.use((err, req, res, next) => {
  const { status = 500, defaultMessage = 'Something went wrong!' } = err;
  res.status(status).send({
    message: err.message || defaultMessage,
  });
});

export default router;
