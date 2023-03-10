import * as dotenv from 'dotenv';
import Event from './models/eventModel.js';
import connectDB from './db/connectDB.js';

dotenv.config();

connectDB();

const createSeeds = () => {
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

  return new Promise((resolve, reject) => {
    Event.insertMany(seedEvents)
      .then(() => {
        console.log('Seeds created successfully!');
        resolve();
      })
      .catch((e) => {
        console.log(e);
        reject();
      });
  });
};

if (process.env.NODE_ENV !== 'testing') {
  createSeeds();
}

export default createSeeds;
