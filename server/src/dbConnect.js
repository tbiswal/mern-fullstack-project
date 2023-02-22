import mongoose from 'mongoose';

mongoose.set('strictQuery', false);

const dbConnect = (username, password, cluster, dbname) => {
  const dbUrl = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`;

  mongoose
    .connect(dbUrl, {
      usenewURLParser: true,
      useUNifiedTopology: true,
    })
    .then(() => {
      console.log('CONNECION OPEN!');
    })
    .catch((err) => {
      console.log('CONNECION ERROR!');
      console.log(err);
    });
};

export default dbConnect;
