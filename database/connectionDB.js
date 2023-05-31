const mongoose = require('mongoose');
const process = require('process');

const connectionDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to DB'))
    .catch((err) => console.error(err.message));
};

module.exports = connectionDB;
