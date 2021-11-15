import React, {useState} from "react";
import {useMutation} from "@apollo/client";
import {ADD_SERVICE} from '../utils/mutations';


const UserService = () =>
{
    const [serviceData, setserviceData] = useState(
    {   eligibility:'',
        openedDays:'',
        openedHours:'',
        modeOfCommunication:'',
        location:'',
        categoryId:''
    });

    const [addService] = useMutation(ADD_SERVICE);

    const handleInputChange = (e)=>
    {
        const {name, value} = e.target;
        setserviceData({...serviceData,[name]:value});
        console.log(serviceData);
    }

    const handleFormSubmit = async (e)=>
    {
        e.preventDefault();

        // const form = e.currentTarget;
        // if(form.checkValidity()===false)
        // {
        //     e.preventDefault();
        //     e.stopPropogration();
        // }

        try
        {
            const {data} = await addService({variables:{...serviceData}});
            console.log(data);
        }
        catch (e)
        {
            console.error(e);
        }
        finally
        {
            setserviceData
            (
                {
                    
                    openedDays:'',
                    openedHours:'',
                    modeOfCommunication:'',
                    location:'',
                    categoryId:'',
                    eligibility:'',
                }
            );
        }
    }

    return(
    <div className="container center">
        <div className="row">
            <h4 className="flow-text" style={{ fontWeight: 600 }}>
                Add new services that you provide at the moment. 
            </h4>
                <div className="form-group">
                    <label htmlFor="categoryId" style={{fontSize:11, fontWeight:600}}>Category</label>
                    <input className="form-input" type="text" name="categoryId" value={serviceData.categoryId} onChange={handleInputChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="eligibility" style={{fontSize:11, fontWeight:600}}>Details and eligibility requirements if any</label>
                    <input className="form-input" type="text" name="eligibility" value={serviceData.eligibility} onChange={handleInputChange}/>
                </div>
                <div className="form-group" style={{fontSize:11, fontWeight:600}}>
                    <label htmlFor="openedDays">Open days</label>
                    <input className="form-input" type="text" name="openedDays" value={serviceData.openedDays} onChange={handleInputChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="openedHours" style={{fontSize:11, fontWeight:600}}>Open hours</label>
                    <input className="form-input" type="text" name="openedHours" value={serviceData.openedHours} onChange={handleInputChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="communication" style={{fontSize:11, fontWeight:600}}>Mode of Communication</label>
                    <input className="form-input" type="text" name="modeOfCommunication" value={serviceData.modeOfCommunication} onChange={handleInputChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="location" style={{fontSize:11, fontWeight:600}}>Location</label>
                    <input className="form-input" type="text" name="location" value={serviceData.location} onChange={handleInputChange}/>
                </div>
                <div className="form-group">
                    <button style={{marginRight:20}} className="btn lime darken-4 waves-effect" onClick={handleFormSubmit}>Add New Service</button>
                    <button style={{marginRight:20}} className="btn lime darken-4 waves-effect">Update Service</button>
                    <button className="btn lime darken-4 waves-effect">Delete service</button>
                </div>
        </div>
    </div>
    )
}
    


export default UserService;