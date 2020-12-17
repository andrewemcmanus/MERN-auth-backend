require('dotenv').config();
const { JWT_SECRET } = require('./keys')
// console.log(process.env);

// A passport strategy for authentication with a JSON web token:
// this allows us to authenticate endpoints using a token
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = require('../models/User');
// User.findById;


const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

// JWT_SECRET is inside of our environment
options.secretOrKey = JWT_SECRET;

module.exports = (passport) => {
  passport.use(new JwtStrategy(options, (jwt_payload, done) => {
    // have a user that we're going to find using their id in the payload
    // when we get a user back, we will check to see if that user is in the database
    User.findById(jwt_payload.id).then(user => {
      // "jwt_payload" is an object literal that contains the decoded JWT payload
      // "done" is a callback that has an error first as an argument done(error, user, info)

      if (user) {
        // If a user is found, return null (for error) and the user
        return done(null, user);
      } else {
        // no user was found
        return done(null, false);
      }
    }).catch(error => console.log(error));
  }))
}
