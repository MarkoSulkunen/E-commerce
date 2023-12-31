import React, { useRef } from "react";
import { useQuery } from "react-query";
import ServiceItem from "./ServiceItem";
import SearchBar from "../search/SearchBar";
import { getServices } from "../../api/services";
import "../../styles/ServiceComponents.css";

const ServiceList = React.forwardRef(({ items, selectedService, hideSearchBar }, ref) => {
  // Querying services data
  const { data: services, isLoading } = useQuery("services", getServices, {
    refetchOnWindowFocus: false,
  });

  // Checking if items prop exists and using it as the service list if it does, otherwise using services from the API
  const serviceList = items.length > 0 ? items : services;

  // State for search query
  const [searchQuery, setSearchQuery] = React.useState("");
  const [locationQuery, setLocationQuery] = React.useState("");
  const [searchButtonPressed, setSearchButtonPressed] = React.useState(false);

  // Filtered service list based on search query and location
  const filteredServiceList = serviceList
    ? serviceList.filter((service) => {
        const serviceMatchesQuery =
          service.service &&
          service.service.toLowerCase().includes(searchQuery.toLowerCase());
        const locationMatchesQuery =
          service.location &&
          service.location.toLowerCase().includes(locationQuery.toLowerCase());
        return serviceMatchesQuery && locationMatchesQuery;
      })
    : [];

  React.useEffect(() => {
    // When selectedService changes, set the search query to the selected service name
    setSearchQuery(selectedService || "");
    setLocationQuery("");
    setSearchButtonPressed(!!selectedService);
  }, [selectedService]);

  // Render the component only if the search button is pressed
  return (
    <>
      {!hideSearchBar && (
        <SearchBar
          onSearch={(query, location) => {
            setSearchQuery(query);
            setLocationQuery(location);
            setSearchButtonPressed(true);
          }}
        />
      )}

      {searchButtonPressed && !isLoading && (
        serviceList ? (
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
        )
      )}
   <div ref={ref}>
   </div>
  </>
  );
});

export default ServiceList;