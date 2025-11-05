import { Schema, model, Document, Types } from 'mongoose';

export interface IUser extends Document {
  _id: Types.ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isVerified: boolean;
  resetOtp?: string;
  resetOtpExpiry?: Date;
  hasBeenAskedToSubscribe?: boolean;
}

const userSchema = new Schema<IUser>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isVerified: { type: Boolean, default: false },
  resetOtp: { type: String }, 
  resetOtpExpiry: { type: Date }, 
  hasBeenAskedToSubscribe:{ type: Boolean, default: false }
});

export const User = model<IUser>('User', userSchema);
