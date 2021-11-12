import React, { useState } from 'react';
import styled from 'styled-components';
import { Grid, Paper, Typography } from '@material-ui/core';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import { validateEmail } from '../utils/helpers';
// import styled from 'styled-components';

function AgencySignup() {
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
    <div>
      <Grid container component="form">
        <Grid item xs={11} md={10}>
          <Paper>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </Paper>
        </Grid>
        <Grid item xs={11} md={10}>
          <Paper>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              color="#343434"
              style={{ fontWeight: 600 }}
            >
              We are here provide the information, to get the support you want.
              You are valued, loved and blessed!
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>

    // <FormMainDiv>
    //   <FormRow>
    //     <FormCol>
    //       <form>
    //         <div>
    //           <label for="title">Title</label> {``}
    //           <select
    //             value={email}
    //             name="title"
    //             onChange={handleInputChange}
    //             type=""
    //             placeholder="Enter your email."
    //           >
    //             Select Your title
    //             <option>Mr</option>
    //             <option>Mrs</option>
    //             <option>Miss.</option>
    //             <option>Dr.</option>
    //           </select>
    //         </div>
    //         {``}

    //         <div>
    //           <label for="Name">Name</label>
    //           <input
    //             value={email}
    //             name="name"
    //             onChange={handleInputChange}
    //             type="text"
    //             placeholder="Enter your name.."
    //           />
    //         </div>

    //         {``}

    //         <div>
    //           <label for="Name">Organization</label>
    //           <input
    //             value={email}
    //             name="agency"
    //             onChange={handleInputChange}
    //             type="text"
    //             placeholder="Enter your agency.."
    //           />
    //         </div>

    //         {``}

    //         <div>
    //           <label for="Name">Location</label>
    //           <input
    //             value={email}
    //             name="location"
    //             onChange={handleInputChange}
    //             type="text"
    //             placeholder="Enter the address of your agency."
    //           />
    //         </div>

    //         {``}

    //         <div>
    //           <label for="Name">Email</label>
    //           <input
    //             value={email}
    //             name="email"
    //             onChange={handleInputChange}
    //             type="text"
    //             placeholder="Enter your official email."
    //           />
    //         </div>

    //         {``}

    //         <div>
    //           <label for="Name">Telephone</label>
    //           <input
    //             value={email}
    //             name="tel"
    //             onChange={handleInputChange}
    //             type="text"
    //             placeholder="Enter the agency telephone number."
    //           />
    //         </div>

    //         {``}

    //         <div>
    //           <label for="Name">Website</label>
    //           <input
    //             value={email}
    //             name="website"
    //             onChange={handleInputChange}
    //             type="text"
    //             placeholder="Enter your organisational website."
    //           />
    //         </div>

    //         <div>
    //           <label for="Name">Password</label>
    //           <input
    //             value={email}
    //             name="password"
    //             onChange={handleInputChange}
    //             type="password"
    //             placeholder="Enter your password."
    //           />
    //         </div>

    //         <div>
    //           <label for="Name">Re-enter Password</label>
    //           <input
    //             value={email}
    //             name="password"
    //             onChange={handleInputChange}
    //             type="password"
    //             placeholder="Re-enter your password."
    //           />
    //         </div>
    //         <Button onClick={handleClick}>Submit</Button>
    //       </form>
    //     </FormCol>
    //   </FormRow>
    // </FormMainDiv>
  );
}
export default AgencySignup;

// const Button = styled.button`
//   font-size: 1rem;
//   padding: 5px;
//   width: 100px;
//   border: 0.1rem solid teal;
//   background: white;
//   font-weight: bold;
//   color: teal;
// `;

// const FormMainDiv = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-left: 20px;
//   margin-right: 20px;
//   background-color: black;
// `;

// const FormRow = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   flex-direction: row;
//   background-color: Teal;
// `;

// const FormCol = styled.div`
//   display: flex;
//   align-items: center;
//   text-align:center
//   flex-direction: column;
//   background-color: ivory;
//   border-bottom:1px solid red;
//   flex:12;
//   width:100%;
// `;

// const FormControl = styled.input``;
