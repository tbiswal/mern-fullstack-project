import validateEmpty from '../../utils/validateEmpty.js';
import AppError from '../../utils/AppError.js';

let eventEntity = { title: '', description: '', date: '' };

export function defaultEventEntity() {
  // Gives a copy of entity and keep the data immutable
  return { ...eventEntity };
}

export function setDefaultEventEntity(arg) {
  eventEntity = arg;
}

export function validate() {
  if (validateEmpty(eventEntity.title)) {
    throw new AppError('title required', 400);
  }

  if (validateEmpty(eventEntity.description)) {
    throw new AppError('description required', 400);
  }

  if (validateEmpty(eventEntity.date)) {
    throw new AppError('date required', 400);
  }
}
