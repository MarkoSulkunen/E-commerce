import React from "react";
import { useQuery } from "react-query";
import ServiceItem from "./ServiceItem";
import SearchBar from "../search/SearchBar";

import { getServices } from "../../api/services";

import "../../styles/ServiceList.css";

const ServiceList = ({ items }) => {
  // Querying services data
  const { data: services, isLoading } = useQuery("services", getServices, {
    refetchOnWindowFocus: false,
  });

  // Checking if items prop exists and using it as the service list if it does, otherwise using services from the API
  const serviceList = items.length > 0 ? items : services;

  // State for search query
  const [searchQuery, setSearchQuery] = React.useState("");

  // Filtered service list based on search query
  const filteredServiceList = serviceList
  ? serviceList.filter((service) =>
      service.name && service.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  : [];

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
    <SearchBar onSearch={handleSearch} />

    {isLoading ? (
      <p>Loading services...</p>
    ) : serviceList ? (
      <ul className="service-list">
        {filteredServiceList.map((service) => (
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
    )}
  </>
);
};

export default ServiceList;