import mongoose from 'mongoose';
import { nanoid } from 'nanoid';

const userSchema = new mongoose.Schema(
  {
    pubId: {
      type: String,
      required: true,
      default: nanoid(),
    },
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

userSchema.methods.getPublicFields = function () {
  return {
    pubId: this.pubId,
    name: this.title,
    email: this.description,
  };
};

export default mongoose.model('User', userSchema);
