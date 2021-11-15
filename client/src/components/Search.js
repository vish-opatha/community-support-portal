import React, {useState} from 'react';
import { useQuery } from '@apollo/client';
import {SEARCH_BY_LOCATION} from '../utils/queries';
import { ImLocation} from 'react-icons/im'

const Search = () => {
   const [searchData, setSearchData] =useState([]);
   const [searchLocation, setSearchLocation]=useState({location:''});
   const {loading, data} = useQuery(SEARCH_BY_LOCATION, {variables:{...searchLocation}});

   const handleChange = (event) => 
   {
     const { name, value } = event.target;
 
     setSearchLocation({searchLocation, [name]: value,});
     setSearchData(data);
     console.log(loading);
     console.log(searchData)
   }

  return (
   
    <div className="container center">
        <div className="row center">
            <h3 className="flow-text" style={{fontWeight:600}}>You can search the services from here</h3>
            <div className="col s12 m12">
              <label>Search by Category</label>
                <select id="category" className="browser-default">
                  <option value="" disabled selected>I want help with</option>
                </select>
            </div>
        </div>

        <div className="row center">
          <div className="col s12 m12">
            <label for="icon_prefix">Enter your suburb</label>
            <input type="text" name="location" value={searchLocation.location} onChange={handleChange}/>
          </div>
        </div>

        <div className="row">
        {data && data.servicesByLocation.map((item)=> {
          return(
            <>
                <div className="col s12 m6">
                  <div className="card white darken-1">
                    <div className="card-content black-text">
                      <span className="card-title" style={{fontWeight:'bold',color:"#004d40"}}>{item.description}</span>
                      <span style={{fontWeight:'bold', fontSize:15}}>{item.organisation}</span>
                      <p style={{fontWeight:'bold'}}>{`Description`}</p>{item.eligibility}
                      <p></p>
                      <p></p>
                      <p style={{fontWeight:'bold'}}>{`Opened Days`}</p>{item.openedDays}
                      <p style={{fontWeight:'bold'}}>{`Opened Hours`}</p>{item.openedHours}
                      
                      <div style={{height:20}}></div>

                      <p style={{fontWeight:'bold'}}> Method of Communication</p>
                      <p style={{fontWeight:'bold'}}> {item.modeOfCommunication}</p>
                      <p style={{fontWeight:'bold'}}><ImLocation/>{`   `}{item.location}</p>                         
                          
                    </div>
                  </div>
                </div>
            </>
          )
        })
        }
        
      </div>
      </div>
   
  );
};

export default Search;
