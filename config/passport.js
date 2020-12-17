require('dotenv').config();
// console.log(process.env);

// A passport strategy for authentication with a JSON web token:
// this allows us to authenticate endpoints using a token
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const options = {};
options.jwtFromRequest = Extract.fromAuthHeaderAsBearerToken();

// JWT_SECRET is inside of our environment
options.secretOrKey = process.env.JWT_SECRET;

module.exports = (passport) => {
  passport.use(new JwtStrategy(options, (jwt_payload, done) => {
    // have a user that we're going to find using their id in the payload
    // when we get a user back, we will check to see if that user is in the database
  }))
}
