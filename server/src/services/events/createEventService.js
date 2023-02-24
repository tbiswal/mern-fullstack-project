import Event from '../../models/event.js';

const createEventService = async (eventDTO) => {
  const newEvent = new Event(eventDTO);
  await newEvent.save();

  return newEvent.getPublicFields();
};

export default createEventService;
