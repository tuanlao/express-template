import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    email: {
      type: String,
      index: true,
    },
    name: { type: String, index: true },
    subject: { type: String },
    message: { type: String },
    ip: { type: String },
  },
  { collection: 'messsages', timestamps: true },
);

export default mongoose.model('Message', schema);
