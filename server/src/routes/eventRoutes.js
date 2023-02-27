import express from 'express';
import fetchAllEvents from '../controllers/events/fetchAllEventsController.js';
import createEvent from '../controllers/events/createEventController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const eventRouter = express.Router();

eventRouter.get('/api/events', fetchAllEvents);

authMiddleware();

eventRouter.post('/api/events', createEvent);

eventRouter.use((err, req, res, next) => {
  const { status = 500, defaultMessage = 'Something went wrong!' } = err;
  res.status(status).send({
    message: err.message || defaultMessage,
  });
});

export default eventRouter;
