import { studentController } from './student.controller';
import { Router } from 'express';

const router = Router();

router.post('/create-student', studentController.createStudent);

export const studentRoute = router;
