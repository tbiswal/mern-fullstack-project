import fetchEventPersistence from '../../injectable/events/fetchEventPersistence.js';
import wrapAsync from '../../utils/wrapAsync.js';

const fetchAllEvents =
  ({ fetchEventPersistence },
  wrapAsync(async (req, res) => {
    const events = await fetchEventPersistence();
    res.send(events);
  }));

export default fetchAllEvents;
