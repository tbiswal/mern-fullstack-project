import eventModel from '../../models/eventModel.js';

const fetchEventService = async () => {
  const events = await eventModel.find({}).sort({ _id: -1 });
  return events;
};

export default fetchEventService;
