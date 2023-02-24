import createEventService from '../../services/events/createEventService.js';

const createEventPersistence = async (eventDTO) => createEventService(eventDTO);

export default createEventPersistence;
