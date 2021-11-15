import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login] = useMutation(LOGIN_USER);

  const handleChange = (event) => 
  {
    const { name, value } = event.target;

    setFormState({...formState, [name]: value,});
  }
    
  const handleFormSubmit = async (event) => 
  {
      event.preventDefault();
      console.log(formState);

      try 
      {
        const { data } = await login({variables: { ...formState }});
        Auth.login(data.login.token);
      } 
      catch (e) 
      {
        console.error(e);
        window.alert("Wrong Password");
      } 
      
      finally 
      {
        setFormState({email: '', password: ''});
      }
  };


  return (
    <div className="container center">
      <div className="row">
          <h4 className="flow-text" style={{ fontWeight: 600 }}>
              You can login to enter new services directly or indirectly related to
              your agency.
          </h4>
          <form className="form" id="loginForm">
            <div className="form-group">
                <label htmlfor="email">email:</label>
                <input className="form-input" type="text" name="email" id="email" value={formState.email} onChange={handleChange}/>
            </div>
            <div className="form-group">
              <label htmlfor="password-login">password:</label>
              <input className="form-input" type="password" name="password" id="password" value={formState.password} onChange={handleChange}/>
            </div>
            <div className="form-group">
              <button className="btn red accent-2 waves-effect" onClick={handleFormSubmit}>Login</button>
            </div>
          </form>
      </div>
    </div>
  );
};

export default Login;
