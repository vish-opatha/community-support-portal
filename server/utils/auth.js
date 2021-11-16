const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {
  authMiddleWare({req}){
    let token = req.body.token || req.query.token || req.headers.authorization;

    if(req.headers.authorization)
    {
      token=token.split(" ").pop().trim();
    }

    if(!token)
    {
      return req;
    }

    try
    {
      const {data} = jwt.verify(token,secret,{maxAge:expiration});
      req.user=data;
    }

    catch(e)
    {
      console.error(e);
    }

    return req;
  },
  
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
