import React from 'react';
function ServiceOption() {
  const agencyServices = [
    {
        description: "Provide Food",
        customerDescription: "I want help with food",
        categoryId:1
      },
      {
        description: "Provide Bustickets",
        customerDescription: "I want help with Bustickets",
        categoryId:2
      },
      {
        description: "Provide Clothing",
        customerDescription: "I want help with Clothing",
        categoryId:3
      },
      {
        description: "Provide Furniture",
        customerDescription: "I want help with essential food",
        categoryId:4
      },
      {
        description: "Provide help for domestic violence victims",
        customerDescription: "I want help with domestic violence",
        categoryId:5
      }
  ];

  return (
    <>
      {agencyServices.map((service) => 
      (
        <option key={service.categoryId}>{service.description}</option>
      ))}
    </>
  );
}

export default ServiceOption;