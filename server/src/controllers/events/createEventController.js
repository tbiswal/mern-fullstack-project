import createEventPersistence from '../../interfaces/events/createEventPersistence.js';
import wrapAsync from '../../utils/wrapAsync.js';
import EventDTO from '../../dtos/events/EventDTO.js';

const createEvent =
  ({ createEventPersistence },
  wrapAsync(async (req, res) => {
    const { title, description, date } = req.body;

    const eventDTO = new EventDTO({ title, description, date });
    eventDTO.validate();

    const newEvent = await createEventPersistence(eventDTO);
    res.status(201).send(newEvent);
  }));

export default createEvent;
