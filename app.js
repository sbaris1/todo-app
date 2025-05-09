// Imports the Express framework — this helps us build the web server.
import express from 'express';
//  Loads environment variables from a .env file (like DB credentials)
import dotenv from 'dotenv';

// Imports the router that handles all /todos endpoints (GET, POST, etc.).
import todosRouter from './routes/todos.js';

// Sets the server port to what’s defined in .env, or 5000 by default.
const PORT = process.env.PORT;

// Creates an Express application (your web server instance).
const app = express();

// Activates dotenv to actually read and apply the .env config.
dotenv.config();

//  Tells Express to automatically parse incoming JSON in requests like POST/PUT
app.use(express.json());

/*
 Any request to /todos will be forwarded to the todosRouter.
For example:

GET /todos → router.get('/')

POST /todos → router.post('/')

*/
// ROUTE HANDLER TALKS TO THE DATABASE ! 
app.use('/todos', todosRouter);

//  Starts the web server and logs the port to the console.
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});