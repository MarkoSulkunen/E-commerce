import React from "react";
import { useQuery, useQueryClient } from "react-query";
import ServiceItem from "./ServiceItem";
import { getServices } from "../../api/services";

import "../../styles/ServiceList.css";

const ServiceList = ({ items }) => {
  // Querying services data
  const { data: services, isLoading } = useQuery("services", getServices, {
    refetchOnWindowFocus: false,
  });

  // Checking if items prop exists and using it as the product list if it does, otherwise using products from the API
  const productList = items.length > 0 ? items : services;

  return (
    <>
      {isLoading ? (
        <p>Loading services...</p>
      ) : (
        <ul className="service-list">
          {productList.map((service) => (
            <ServiceItem
              key={service.id}
              id={service.id}
              service={service.service}
              price={service.price}
              info={service.info}
              name={service.name}
              contact={service.contact}
              location={service.location}
              image={service.image}
              userId={service.userId}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default ServiceList;