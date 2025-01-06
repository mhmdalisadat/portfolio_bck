import mongoose, { Schema, Document } from "mongoose";

export interface IContact extends Document {
  email: string;
  phone: string;
  message: string;
  createdAt: Date;
}

const ContactSchema: Schema = new Schema({
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Contact = mongoose.model<IContact>("Contact", ContactSchema);
