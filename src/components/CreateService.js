import React, { useState } from 'react';
import styled from 'styled-components';
// import { validateEmail } from '../utils/helpers';
// import styled from 'styled-components';
import agencyServices from './servicesAvailable';
import ServiceOption from './ServicesOption';

function CreateService() {
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

  const handleClick = (e) => {
    window.alert(`Ha ha ha you clicked this!`);
  };

  //   const handleFormSubmit = (e) => {
  //     e.preventDefault();
  //     // if (!validateEmail(email)) {
  //     //   setErrorMessage('Please enter a correct email!');
  //     //   return;
  //     // }

  //     if (!password) {
  //       setErrorMessage('Your password cannot be empty!');
  //       return;
  //     }

  //     //###########Login logic should come here###########
  //     // setSenderName('');
  //     // setMessage('');
  //     // setEmail('');
  //     setErrorMessage('');
  //   };

  return (
    <FormMainDiv>
      <FormRow>
        <FormCol>
          <form>
            <div>
              <label for="Name">Organization</label>
              <input
                value={email}
                name="org"
                onChange={handleInputChange}
                type="text"
                placeholder="Your organisation will appear here."
              />
            </div>
            <div>
              <label for="title">Type of Services</label> {``}
              <select
                value={email}
                name="title"
                onChange={handleInputChange}
                type=""
                placeholder="Enter your email."
              >
                Select the services you provide
                <ServiceOption agencyServices={agencyServices} />
              </select>
            </div>
            {``}

            <div>
              <label for="Name">Elgibility Requirements</label>
              <textarea
                value={email}
                name="requirements"
                onChange={handleInputChange}
                type="text"
                placeholder="Enter any eligibility requirements, if there are any"
              />
            </div>

            {``}

            <div>
              <label for="Name">Opened Hours</label>
              <input
                value={email}
                name="agency"
                onChange={handleInputChange}
                type="date"
                placeholder="Enter your agency.."
              />
              <input
                value={email}
                name="agency"
                onChange={handleInputChange}
                type="datetime-local"
                placeholder="Enter your agency.."
              />
            </div>

            {``}

            <div>
              <label for="Name">Mode of Communication</label>
              <input
                type="checkbox"
                id="Walk-in"
                name="Walk-in"
                value="Walk-in"
              />
              <input
                type="checkbox"
                id="Over the phone"
                name="Over the phon"
                value="Over the phon"
              />
            </div>

            {``}

            <div>
              <label for="Name">Email</label>
              <input
                value={email}
                name="email"
                onChange={handleInputChange}
                type="text"
                placeholder="Enter your official email."
              />
            </div>

            {``}

            <div>
              <label for="Name">Telephone</label>
              <input
                value={email}
                name="tel"
                onChange={handleInputChange}
                type="text"
                placeholder="Enter the agency telephone number."
              />
            </div>

            {``}

            <div>
              <label for="Name">Website</label>
              <input
                value={email}
                name="website"
                onChange={handleInputChange}
                type="text"
                placeholder="Enter your organisational website."
              />
            </div>

            <div>
              <label for="Name">Password</label>
              <input
                value={email}
                name="password"
                onChange={handleInputChange}
                type="password"
                placeholder="Enter your password."
              />
            </div>

            <div>
              <label for="Name">Re-enter Password</label>
              <input
                value={email}
                name="password"
                onChange={handleInputChange}
                type="password"
                placeholder="Re-enter your password."
              />
            </div>
            <Button onClick={handleClick}>Add Service</Button>
          </form>
        </FormCol>
      </FormRow>
    </FormMainDiv>
  );
}
export default CreateService;

const Button = styled.button`
  font-size: 1rem;
  padding: 5px;
  width: 100px;
  border: 0.1rem solid teal;
  background: white;
  font-weight: bold;
  color: teal;
`;

const FormMainDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  margin-right: 20px;
  background-color: black;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  background-color: Teal;
`;

const FormCol = styled.div`
  display: flex;
  align-items: center;
  text-align:center
  flex-direction: column;
  background-color: ivory;
  border-bottom:1px solid red;
  flex:12;
  width:100%;
`;

// const FormControl = styled.input``;
