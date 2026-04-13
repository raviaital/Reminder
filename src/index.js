import express from 'express'; // Imports Express.js.
import reminderRoutes from './routes/reminderRoutes.js';
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';

const app = express() // Creates an Express application instance.
const port = process.env.PORT

app.use(express.json()) // Middleware to parse JSON
app.use('/reminders', reminderRoutes) // Use reminder routes
app.use(errorHandlerMiddleware) // Should be last

// Listen to PORT
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) // Starts the server on port 3000 and logs a confirmation message.