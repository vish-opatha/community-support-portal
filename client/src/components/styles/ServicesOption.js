import React from 'react';

function ServiceOption(props) {
  return (
    <>
      {props.agencyServices.map((service) => (
        <option>{service.description}</option>
      ))}
    </>
  );
}

export default ServiceOption;
