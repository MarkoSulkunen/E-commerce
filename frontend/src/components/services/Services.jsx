import React from "react";
import { useQuery } from "react-query";

import ServiceList from "./ServiceList";

import { getServices } from "../../api/services";

const Services = () => {
  const { isLoading, error, data } = useQuery("ServicesData", getServices);
  console.log(data);
  if (isLoading)
    return (
      <div className="center">
       
      </div>
    );

  if (error) return "An error has occurred: " + error.message;
 
  return <ServiceList items={data} />;
};

export default Services;