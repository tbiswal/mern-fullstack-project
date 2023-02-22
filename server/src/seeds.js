import * as dotenv from 'dotenv';
import Event from './models/event.js';
import dbConnect from './dbConnect.js';

dotenv.config();

const username = process.env.DB_USER;
const password = process.env.DB_PASS;
const cluster = process.env.DB_CLUSTER;
const dbname = process.env.DB_NAME;

dbConnect(username, password, cluster, dbname);

const seedEvents = [
  {
    title: 'Python Hackathon',
    description: 'Participate and win 1000$',
    date: '2023-02-22',
  },
  {
    title: 'Go Hackathon',
    description: 'Participate and win 2000$',
    date: '2023-02-24',
  },
  {
    title: 'Mongo Hackathon',
    description: 'Participate and win 3000$',
    date: '2023-02-23',
  },
  {
    title: 'PHP Hackathon',
    description: 'Participate and win 1000$',
    date: '2023-04-23',
  },
];

Event.insertMany(seedEvents)
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
