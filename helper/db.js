const mongoose = require('mongoose');

module.exports = () => {
  const dbOptions = {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }
  mongoose.connect(process.env.MONGO_DB_URL,dbOptions);

  mongoose.connection.on('open', () => {
    console.log('MongoDB: Connected!');
  });

  mongoose.connection.on('error', (err) => {
    console.log('MongoDB: Error', err);
  });

  mongoose.Promise = global.Promise;
};