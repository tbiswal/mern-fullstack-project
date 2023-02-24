import mongoose from 'mongoose';

mongoose.set('strictQuery', false);

const mongoDB = (dbConfig) => {
  const connectionString = `${dbConfig.srv}://${dbConfig.username}:${dbConfig.password}@${dbConfig.host}/${dbConfig.dbname}?retryWrites=true&w=majority`;

  mongoose
    .connect(connectionString, {
      usenewURLParser: true,
      useUNifiedTopology: true,
    })
    .then(() => {
      console.log('CONNECTION OPEN!');
    })
    .catch((err) => {
      console.log('CONNECTION ERROR!');
      console.log(err);
    });
};

export default mongoDB;
