import Event from '../../models/event.js';

const createEventPersistence = async ({ title, description, date }) => {
  const newEvent = new Event({ title, description, date });
  await newEvent.save();

  return newEvent;
};

export default createEventPersistence;
