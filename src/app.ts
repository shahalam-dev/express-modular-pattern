import cors from 'cors';
import express from 'express';
import { studentRoute } from './app/modules/student/student.route';
const app = express();

// Middleware to parse JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/v1/students', studentRoute);

app.get('/', (_req, res) => {
  res.send('Hello World!');
});

export default app;
