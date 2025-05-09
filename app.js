import express from 'express';
import dotenv from 'dotenv';
import todosRouter from './routes/todos.js';

const PORT = process.env.PORT;

const app = express();

dotenv.config();

// middleware to parse json bodies
app.use(express.json());

// route middleware
app.use('/todos', todosRouter);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});