import express from 'express'; // Imports Express.js.
import reminderRoutes from './routes/reminderRoutes.js';

const app = express() // Creates an Express application instance.
const port = process.env.PORT

// Use reminder routes
app.use('/reminders', reminderRoutes)

// Listen to PORT
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) // Starts the server on port 3000 and logs a confirmation message.