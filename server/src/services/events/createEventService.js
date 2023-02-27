import eventModel from '../../models/eventModel.js';

const createEventService = async (eventEntity) => {
  const newEvent = new eventModel(eventEntity);
  await newEvent.save();

  return newEvent.getPublicFields();
};

export default createEventService;
