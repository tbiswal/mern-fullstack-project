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

const Event = mongoose.model('Event', eventSchema);

export default Event;
