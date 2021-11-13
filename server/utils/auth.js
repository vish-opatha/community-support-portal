const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {
  signToken: function ({
    title,
    firstName,
    lastName,
    organisation,
    location,
    email,
    telephone,
    orgWebsite,
    password,
    _id,
  }) {
    const payload = {
      title,
      firstName,
      lastName,
      organisation,
      location,
      email,
      telephone,
      orgWebsite,
      password,
      _id,
    };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
