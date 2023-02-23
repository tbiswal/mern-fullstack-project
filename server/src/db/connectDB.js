import * as dotenv from 'dotenv';
import mongoDB from './mongoDB.js';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const connectDB = () => {
  try {
    if (process.env.DB_PROVIDER === 'mongo') {
      const dbConfig = {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        host: process.env.DB_HOST,
        srv: process.env.DB_MONGO_SRV,
        dbname: process.env.DB_NAME,
      };

      mongoDB(dbConfig);

      console.log('Connected to Mongo');
    } else {
      console.log('No database provider set up!');
    }
  } catch (err) {
    console.log(err.message);
  }
};

export default connectDB;
