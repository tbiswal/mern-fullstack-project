import createEventService from '../../services/events/createEventService.js';

const createEventPersistence = async (eventEntity) =>
  createEventService(eventEntity);

export default createEventPersistence;
