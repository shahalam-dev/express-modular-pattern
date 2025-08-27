import { Schema, model } from 'mongoose';
import { AddressInterface, StudentInterface } from './student.inderface';

const addressSchema = new Schema<AddressInterface>(
  {
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zipCode: { type: String },
  },
  { _id: false },
);

const studentSchema = new Schema<StudentInterface>(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    grade: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: addressSchema, required: false },
    phone: { type: String },
  },
  { timestamps: true },
);

export const StudentModel = model<StudentInterface>('Student', studentSchema);
