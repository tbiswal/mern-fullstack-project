import mongoose from 'mongoose';
import { nanoid } from 'nanoid';

const eventSchema = new mongoose.Schema({
  pubId: {
    type: String,
    required: true,
    default: nanoid(),
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

eventSchema.methods.getPublicFields = function () {
  return {
    pubId: this.pubId,
    title: this.title,
    description: this.description,
    date: this.date,
  };
};

const Event = mongoose.model('Event', eventSchema);

export default Event;
