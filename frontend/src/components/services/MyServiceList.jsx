import React from "react";
import { useQuery } from "react-query";
import ServiceItem from "./ServiceItem";
import { getServices } from "../../api/services";
import "../../styles/ServiceList.css";

const MyServiceList = ({ items }) => {
  // Querying services data
  const { data: services, isLoading } = useQuery("services", getServices, {
    refetchOnWindowFocus: false,
  });

  // Checking if items prop exists and using it as the service list if it does, otherwise using services from the API
  const serviceList = items.length > 0 ? items : services;


  // Render the component only if the search button is pressed
  return (
    <>

      {!isLoading && (
        serviceList ? (
          <ul className="service-list">
            {serviceList.map((service) => (
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
        ) : (
          <p>No services found.</p>
        )
      )}
    </>
  );
};

export default MyServiceList;