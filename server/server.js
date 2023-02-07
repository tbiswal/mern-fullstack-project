import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
app.use(express.json());

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
app.use(cors());

app.use(express.json());

app.get('/api/events', (req, res) => {
  res.send(events);
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
