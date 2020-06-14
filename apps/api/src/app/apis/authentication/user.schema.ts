import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
);

export interface UserModel extends mongoose.Document {
  id: string;
  username: string;
  password: string;
  name: string;
  email: string;
}
