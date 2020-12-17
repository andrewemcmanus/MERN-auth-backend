require('dotenv').config()
const mongoose = require('mongoose');
const { MONGO_URI } = require('../config/keys')

// Mongo connection
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true
});

// console.log(process.env.MONGO_URI)
// when process.env.MONG_URI isn't working, just put the string in place
// OR do the key-value pair thing above
// Mongoose connection object:
const db = mongoose.connection;
// console.log(db);

// Set up an event listener that will fire once the connection opens for the database:
// Log to the terminal what host and port we are on
db.once('open', () => {
  console.log(`Connected to MongoDB @ ${db.host}:${db.port}`);
});
db.on('error', (error) => {
  console.log(`Database error \n ${error}`);
  // \n refers to line break
});
// THIS:
const User = require('./User');
module.exports = User;
// SAME AS:
// module.exports.User = require('./User');
