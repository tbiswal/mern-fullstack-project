import Event from '../../models/eventModel.js';

const createEventService = async (eventDTO) => {
  const newEvent = new Event(eventDTO);
  await newEvent.save();

  return newEvent.getPublicFields();
};

export default createEventService;
