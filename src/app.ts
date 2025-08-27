import cors from 'cors';
import express from 'express';
const app = express();

// Middleware to parse JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())


app.get('/', (_req, res) => {
  res.send('Hello World!');
});

export default app;
