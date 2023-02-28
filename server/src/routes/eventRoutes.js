import express from 'express';
import fetchAllEvents from '../controllers/events/fetchAllEventsController.js';
import createEvent from '../controllers/events/createEventController.js';
// import authMiddleware from '../middleware/authMiddleware.js';
import protect from '../middleware/jwtAuthMiddleware.js';

const eventRouter = express.Router();

eventRouter.get('/api/events', fetchAllEvents);
eventRouter.post('/api/events', protect, createEvent);

export default eventRouter;
