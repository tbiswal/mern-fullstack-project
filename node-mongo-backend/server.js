import express from 'express';
import morgan from 'morgan';
import path from 'path';

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../react-as-frontend/build')));

app.get(/^(?!\/api).+/, (req, res) => {
  res.sendFile(path.join(__dirname, '../react-as-frontend/build/index.html'));
});

const events = [
  {
    id: '1',
    title: 'React Hackathon',
    description: 'Participate and win 1000$',
    date: '2023-02-22',
  },
  {
    id: '2',
    title: 'Node Hackathon',
    description: 'Participate and win 2000$',
    date: '2023-02-24',
  },
  {
    id: '3',
    title: 'Mongo Hackathon',
    description: 'Participate and win 3000$',
    date: '2023-02-23',
  },
  {
    id: '4',
    title: 'PHP Hackathon',
    description: 'Participate and win 1000$',
    date: '2023-04-23',
  },
];

app.use(morgan('tiny'));
app.use(express.json());

app.get('/api/events', (req, res) => {
  res.send(events);
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
