import { Request, Response } from 'express';
import { studentService } from './student.services';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body;

    const newStudent = await studentService.createStudent(student);
    res.status(201).json({
      success: true,
      message: 'Student created successfully',
      data: newStudent,
    });
  } catch (error) {
    console.error('Error in createStudent controller:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const studentController = {
  createStudent,
};
