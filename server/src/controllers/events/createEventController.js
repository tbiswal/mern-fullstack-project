import createEventPersistence from '../../interfaces/events/createEventPersistence.js';
import wrapAsync from '../../utils/wrapAsync.js';
import * as eventEntity from '../../entities/events/eventEntity.js';

const createEvent =
  ({ createEventPersistence },
  wrapAsync(async (req, res) => {
    const { title, description, date } = req.body;

    eventEntity.setDefaultEventEntity({
      title,
      description,
      date,
    });
    const eventData = eventEntity.defaultEventEntity();
    eventEntity.validate();

    const newEvent = await createEventPersistence(eventData);
    res.status(201).send(newEvent);
  }));

export default createEvent;
