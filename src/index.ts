import express from 'express';
import type { Express } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import taskRoutes from './routes/tasks.routes.js';

import 'dotenv/config';

const PORT = process.env.PORT;

const app: Express = express()

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())

// Routes
app.use("/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`)
})