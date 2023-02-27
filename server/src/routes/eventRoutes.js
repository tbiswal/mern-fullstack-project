import express from 'express';
import fetchAllEvents from '../controllers/events/fetchAllEventsController.js';
import createEvent from '../controllers/events/createEventController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const eventRouter = express.Router();

eventRouter.get('/api/events', fetchAllEvents);

authMiddleware();

eventRouter.post('/api/events', createEvent);

export default eventRouter;
