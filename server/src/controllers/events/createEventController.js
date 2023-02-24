import createEventPersistence from '../../injectable/events/createEventPersistence.js';
import wrapAsync from '../../utils/wrapAsync.js';
import CreateEventDTO from '../../dtos/events/CreateEventDTO.js';

const createEvent =
  ({ createEventPersistence },
  wrapAsync(async (req, res) => {
    const { title, description, date } = req.body;

    const eventDTO = new CreateEventDTO({ title, description, date });
    eventDTO.validate();

    const newEvent = await createEventPersistence({ title, description, date });
    res.send(newEvent);
  }));

export default createEvent;
