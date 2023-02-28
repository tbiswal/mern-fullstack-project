import express from 'express';
import fetchAllEvents from '../controllers/events/fetchAllEventsController.js';
import createEvent from '../controllers/events/createEventController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/api/events', fetchAllEvents);

authMiddleware();

router.post('/api/events', createEvent);

export default router;
