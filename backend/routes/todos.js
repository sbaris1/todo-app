
// Creates an Express router, and brings in the pool to run DB queries.
import express from 'express';
import pool from '../db/index.js';
const router = express.Router();


/* pool.query(...): runs raw SQL to get all todos.

result.rows: actual data returned by the DB.

Responds with the data as JSON.

If an error happens, send 500 status and error message.
*/

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM todos ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});




/*
req.body.title: reads the title from the JSON body.

$1: is a placeholder for prepared statements (safe from SQL injection).

RETURNING *: returns the inserted row.

Sends back the new todo with 201 Created.

*/
router.post('/', async (req, res) => {
  const { title } = req.body;
  try {
    const result = await pool.query('INSERT INTO todos (title) VALUES ($!) RETURNING *', [title]

    );
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/*
Gets id from the URL (e.g. /todos/2).

Updates the row with the new title and completion status.

Returns the updated todo.
*/

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  try {
    const result = await pool.query('UPDATE todos SET title = $1, completed= $2 WHERE id = $3 RETURNING *', [title, completed, id]);
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/*
Gets the ID from the URL.

Deletes the todo with that ID.

Sends 204 No Content (means successful but no data returned).
*/
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DETELE FROM todos WHERE id=$1', [id]);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
export default router;