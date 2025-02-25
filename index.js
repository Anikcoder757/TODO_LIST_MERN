import express from 'express';
import cors from 'cors';

import Connection from './database/db.js';
import Routes from './routes/route.js';

const app = express();

app.use(cors());

app.use(express.json({ extended: true}));
app.use(express.urlencoded({ extended: true}));

app.use('/', Routes);

const PORT = 5000;

Connection();

app.listen(PORT, () => console.log('Server is running on port', PORT));