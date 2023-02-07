const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 3001;
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
];

app.use(morgan('tiny'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/events', (req, res) => {
  res.send(events);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
