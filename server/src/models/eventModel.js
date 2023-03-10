import mongoose from 'mongoose';
import { nanoid } from 'nanoid';

const eventSchema = new mongoose.Schema(
  {
    pubId: {
      type: String,
      required: true,
      default: () => nanoid(),
      index: { unique: true },
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
  },
  { timestamps: true }
);

eventSchema.methods.getPublicFields = function () {
  return {
    pubId: this.pubId,
    title: this.title,
    description: this.description,
    date: this.date,
  };
};

export default mongoose.model('Event', eventSchema);
