import { Schema, Document } from 'mongoose';

export const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
  },
  { timestamps: true },
);

export interface User extends Document {
  name: string;
  phone: string;
  email: string;
}

export const USER_MODEL = 'User';
