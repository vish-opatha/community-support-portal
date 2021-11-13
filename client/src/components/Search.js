import React from 'react';

const Search = () => {
  return (
    <div className="container center">
      <div className="row">
        <h3 className="flow-text" style={{ fontWeight: 600 }}>
          Search for the services
        </h3>
        <div className="col s12">
          <label style={{ fontWeight: 600 }}>
            Search for the support you want
          </label>
          <select
            id="category"
            class="browser-default"
            // onfocus="displayOptions()"
            // onchange="displayResults()"
          >
            <option value="" disabled selected>
              I need to..
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Search;
