import React, { useState } from 'react';
import styled from 'styled-components';
// import { validateEmail } from '../utils/helpers';
// import styled from 'styled-components';

function AgencyLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either senders name, email and message
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'password') {
      setPassword(inputValue);
    } else if (inputType === 'message') {
      setErrorMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // if (!validateEmail(email)) {
    //   setErrorMessage('Please enter a correct email!');
    //   return;
    // }

    if (!password) {
      setErrorMessage('Your password cannot be empty!');
      return;
    }

    //###########Login logic should come here###########
    // setSenderName('');
    // setMessage('');
    // setEmail('');
    setErrorMessage('');
  };

  return (
    <div className="container mt-4">
      <div className="row text-center justify-content-center">
        <div className="col-10 col-md-10 text-center">
          <form className="form">
            <div className="form-group less-margin bold">
              <label for="email">Email</label>
              <input
                value={email}
                name="email"
                className="form-control"
                onChange={handleInputChange}
                type="email"
                placeholder="Enter your email."
              />
            </div>
            <div className="form-group less-margin bold">
              <label for="password">Message</label>
              <textarea
                value={password}
                name="password"
                className="form-control"
                onChange={handleInputChange}
                type="text"
                placeholder="Enter your password."
              />
            </div>

            <Button
              type="button"
              // className="mt-3 btn btn-rounded"
              onClick={handleFormSubmit}
            >
              Submit
            </Button>
          </form>

          {errorMessage && (
            <div>
              <p className="error-text mt-1 error-msg">{errorMessage}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default AgencyLogin;

const Button = styled.button`
  font-size: 1rem;
  padding: 5px;
  width: 100px;
  border: 0.1rem solid teal;
  background: white;
  font-weight: bold;
  color: teal;
`;
