const mongoose = require('mongoose');

// Mongo connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true
});

// Mongoose connection object:
const db = mongoose.connection;

// Set up an event listener that will fire once the connection opens for the database:
// Log to the terminal what host and port we are on
db.once('open', () => {
  console.log(`Connected to MongoDB @ ${db.host}:${dp.port}`);
});
db.on('error', (error) => {
  console.log(`Database error \n ${error}`);
  // \n refers to line break
})
// THIS:
// const User = require('./User');
// module.exports = User;
// SAME AS:
module.exports.User = require('./User');
