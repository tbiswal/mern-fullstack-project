import Event from '../../models/eventModel.js';

const createEventService = async (eventEntity) => {
  const newEvent = new Event(eventEntity);
  await newEvent.save();

  return newEvent.getPublicFields();
};

export default createEventService;
