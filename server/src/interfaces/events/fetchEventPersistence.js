import fetchEventService from '../../services/events/fetchEventService.js';

// Todo - Inject using env
const fetchEventPersistence = async () => fetchEventService();

export default fetchEventPersistence;
