import React, {useState} from "react";
import {useMutation} from "@apollo/client";
import Auth from '../utils/auth';
import {ADD_USER} from '../utils/mutations';

const Signup = () =>
{

    const [userData, setUserData] = useState({title:'',firstName:'',lastName:'',
                                    organisation:'',location:'',email:'',telephone:'',orgWebsite:'',password:''});
    const [addUser] = useMutation(ADD_USER);

    const handleInputChange = (e)=>
    {
        const {name, value} = e.target;
        setUserData({...userData,[name]:value});
    }

    const handleFormSubmit = async (e)=>
    {
        e.preventDefault();

        //Need a validation logic

        const form = e.currentTarget;
        if(form.checkValidity()===false)
        {
            e.preventDefault();
            e.stopPropogration();
        }

        try
        {
            const {data} = await addUser({variables:{userData}});
            Auth.login(data.addUser.token);
            console.log("User is created!");
        }
        catch (e)
        {
            console.error(e);
        }
        finally
        {
            setUserData
            (
                {title:'',firstName:'',lastName:'',
                organisation:'',location:'',email:'',telephone:'',orgWebsite:'',password:''}
            );
        }
    }

    return(
    <div className="container center">
        <div className="row">
            <h4 className="flow-text" style={{ fontWeight: 600 }}>
                You can signup in our system to add your services and update them when you want. Your contribution is important to the community around you. 
            </h4>
                <div className="form-group">
                    <label htmlFor="title">Your title:</label>
                    <select name="title" className="browser-default"onChange={handleInputChange}>
                        <option value="Mr">Mr.</option>
                        <option value="Mrs.">Mrs.</option>
                        <option value="Ms.">Ms.</option>
                        <option value="Prof.">Prof.</option>
                        <option value="Prof.">Dr.</option>
                        <option value="Other">Other</option>
                    </select>
                    {/* <input className="form-input" type="text" name="title" value={userData.title} onChange={handleInputChange}/> */}

                </div>
                <div className="form-group">
                    <label htmlFor="firstName">Your First Name</label>
                    <input className="form-input" type="text" name="firstName" value={userData.firstName} onChange={handleInputChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Your Last Name</label>
                    <input className="form-input" type="text" name="lastName" value={userData.lastName} onChange={handleInputChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="organisation">Your Organisation</label>
                    <input className="form-input" type="text" name="organisation" value={userData.organisation} onChange={handleInputChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="location">Your organisation located in(Enter the suburbe)</label>
                    <input className="form-input" type="text" name="location" value={userData.location} onChange={handleInputChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Your email (Your official email is preferred)</label>
                    <input className="form-input" type="text" name="email" value={userData.email} onChange={handleInputChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="telephone">Your Telephone</label>
                    <input className="form-input" type="text" name="telephone" value={userData.telephone} onChange={handleInputChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="orgWebsite">Your organisational website</label>
                    <input className="form-input" type="text" name="orgWebsite" value={userData.orgWebsite} onChange={handleInputChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Enter your password</label>
                    <input className="form-input" type="password" name="password" value={userData.password} onChange={handleInputChange}/>
                </div>
                <div className="form-group">
                    <button className="btn red accent-2 waves-effect" onClick={handleFormSubmit}>Create Account</button>
                </div>
        </div>
    </div>
    )

}

export default Signup;