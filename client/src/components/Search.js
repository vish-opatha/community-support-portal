import React, {useState} from 'react';
import ServiceOption from './ServicesOption';
const agencyServices = [
  {
      description: "Provide Food",
      label: "I want help with food",
      value:1
    },
    {
      description: "Provide Bustickets",
      label: "I want help with Bustickets",
      value:2
    },
    {
      description: "Provide Clothing",
      label: "I want help with Clothing",
      value:3
    },
    {
      description: "Provide Furniture",
      label: "I want help with essential food",
      value:4
    },
    {
      description: "Provide help for domestic violence victims",
      label: "I want help with domestic violence",
      value:5
    }
  ];
const Search = () => {

  // const [dropDownValue,setValue]=useState({categoryId:""})
  // const dropDownChangeHandler = e =>
  // {
  //   setValue(e.key);
  //   console.log(dropDownValue);

  // }

 const [result, selectedValue] = useState(agencyServices.label);
 const selectHandle = e =>
 {
    selectedValue(e.label);
 }

  return (
    <div className="container center">
      <div className="row">
        <h3 className="flow-text" style={{ fontWeight: 600 }}>
          You can serarch services by the category and by the location.
        </h3>
        <div className="col s12 m8">
          <label style={{ fontWeight: 600 }}>
              Search for the support you want
          </label>
          <ServiceOption onChange={selectHandle} />
          <div>{result}</div>
        </div>
        <div className="col s12 m4">
          <label for="suburb" style={{ fontWeight: 600 }}>
            Suburb
          </label>
          <input id="suburb" type="text" />
        </div>
      </div>
    </div>
  );
};

export default Search;
