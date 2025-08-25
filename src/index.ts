import express from 'express';
import type { Express } from 'express';

import 'dotenv/config';

const PORT = process.env.PORT;

const app: Express = express()

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`)
})