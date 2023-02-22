import Event from '../../models/event.js';

const fetchEventPersistence = async () => {
  const events = await Event.find({}).sort({ _id: -1 });
  return events;
};

export default fetchEventPersistence;
