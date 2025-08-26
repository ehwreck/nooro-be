import express from 'express';
import type { Express } from 'express';

import taskRoutes from './routes/tasks.routes.js';

import 'dotenv/config';

const PORT = process.env.PORT;

const app: Express = express()

// Routes
app.use("/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`)
})