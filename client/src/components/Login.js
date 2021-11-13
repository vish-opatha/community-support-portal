import React from 'react';

const Login = () => {
  return (
    <div className="container center">
      <div className="row">
        <h4 className="flow-text" style={{ fontWeight: 600 }}>
          You can login to enter new services directly or indirectly related to
          your agency.
        </h4>
        <div className="input-field col s12">
          <input id="email" type="email" className="validate" />
          <label for="email">Email</label>
        </div>
        <div className="input-field col s12">
          <input id="password" type="password" />
          <label for="password">Password</label>
        </div>
        <div className="col s12">
          <a
            className="waves-effect waves-light btn-small"
            href="/"
            style={{
              background: 'White',
              color: '#004d40',
              borderColor: '#004d40',
              fontWeight: 800,
            }}
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
