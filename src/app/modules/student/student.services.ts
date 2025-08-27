import { StudentInterface } from './student.inderface';
import { StudentModel } from './student.model';

const createStudent = async (student: StudentInterface) => {
  try {
    const newStudent = new StudentModel(student);
    return await newStudent.save();
  } catch (error) {
    console.error('Error creating student:', error);
    // throw new Error(`Error creating student: ${error}`);
  }
};

export const studentService = {
  createStudent,
};
