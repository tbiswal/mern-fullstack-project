import Event from '../../models/eventModel.js';

const fetchEventService = async () => {
  const events = await Event.find({}).sort({ _id: -1 });
  return events;
};

export default fetchEventService;
