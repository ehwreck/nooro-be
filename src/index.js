import express from 'express';
import dotenv from 'dotenv/config';

const PORT = process.env.PORT;

const app = express()

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`)
})