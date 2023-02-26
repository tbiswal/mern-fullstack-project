import createEventPersistence from '../../interfaces/events/createEventPersistence.js';
import wrapAsync from '../../utils/wrapAsync.js';
import * as eventObject from '../../entities/events/eventEntity.js';

const createEvent =
  ({ createEventPersistence },
  wrapAsync(async (req, res) => {
    const { title, description, date } = req.body;

    eventObject.setDefaultEventEntity({
      title,
      description,
      date,
    });
    const eventEntity = eventObject.defaultEventEntity();
    eventObject.validate();

    const newEvent = await createEventPersistence(eventEntity);
    res.status(201).send(newEvent);
  }));

export default createEvent;
