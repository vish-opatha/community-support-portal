 import React from 'react';

  const agencyServices = [
      { 
        description: "Provide Food",
        customerDescription: "I want help with food",
        categoryId:"1"
       },
       {
        description: "Provide Clothes",
        customerDescription: "I want help with clothes",
        categoryId:"2"
       },
       {
        description: "Provide support for furniture and bedding",
        customerDescription: "I want help with furniture and beddings",
        categoryId:"3"
       },
       {
        description: "Provide new toys for Christmas",
        customerDescription: "I want new toys for my kids for Christmas",
        categoryId:"4"
       },
       {
        description: "Provide Christmas Lunch",
        customerDescription: "I want to have a Christmas Lunch",
        categoryId:"5"
       },
       {
        description: "Provide help for domestic violence victims",
        customerDescription: "I want help with domestic violence",
        categoryId:"6"
      },
      {
        description: "Provide financial couselling",
        customerDescription: "I want help with financial couselling",
        categoryId:"7"
      },
      {
        description: "Provide support to write your last will",
        customerDescription: "I want help write last will",
        categoryId:"8"
      },
      {
        description: "Provide housing advice",
        customerDescription: "I want help with housing",
        categoryId:"9"
      },
      {
        description: "Provide support to find a job",
        customerDescription: "I want help with housing",
        categoryId:"9"
      },
      {
        description: "Provide support to your medical bills",
        customerDescription: "I want help with medical bills",
        categoryId:"10"
      },
      {
        description: "Provide Bustickets",
        customerDescription: "I want help with Bustickets",
        categoryId:"11"
      }
  ];

  export default function Serviceoptions(){
    return(
      <>
      {agencyServices.map((service)=>{
        return(
        <option value={service.categoryId}>{service.customerDescription}</option>
        )
      })}

      </>
    )
  }

  