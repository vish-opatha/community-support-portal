import React from 'react';
import ServiceOption from './ServicesOption';

const Search = () => {
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
          <select id="category" className="browser-default"> 
            {/* // onfocus="displayOptions()"
            // onchange="displayResults()" */}
              <option value="" disabled selected>I need </option>
              <ServiceOption/>
          </select>
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
