import validateEmpty from '../../utils/validateEmpty.js';
import AppError from '../../utils/AppError.js';

class CreateEventDTO {
  constructor({ title, description, date }) {
    this.title = title;
    this.description = description;
    this.date = date;
  }

  validate() {
    if (validateEmpty(this.title)) {
      throw new AppError('title required', 401);
    }

    if (validateEmpty(this.description)) {
      throw new AppError('description required', 401);
    }

    if (validateEmpty(this.date)) {
      throw new AppError('date required', 401);
    }
  }
}

export default CreateEventDTO;
