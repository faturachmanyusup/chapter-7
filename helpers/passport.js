const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const { User } = require('../models');

const validateToken = (payload, done) => {
  User.findByPk(payload.id)
    .then(user => done(null, user))
    .catch(err => done(err, null))
}

passport.use(new Strategy({
  jwtFromRequest: ExtractJwt.fromHeader('Authorization'),
  secretOrKey: 'PASSWORD'
}, validateToken));

module.exports = passport;