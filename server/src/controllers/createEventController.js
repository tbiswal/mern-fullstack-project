import CreateEventDTO from '../dto/events/CreateEventDTO.js';

const createEventController = async (
  { createEventPersistence },
  { title, description, date }
) => {
  const eventDTO = new CreateEventDTO({ title, description, date });
  eventDTO.validate();

  const newEvent = await createEventPersistence({ title, description, date });
  return newEvent;
};

export default createEventController;
