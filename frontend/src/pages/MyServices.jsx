import React, { useContext, useState } from "react";
import { useQuery } from "react-query";
import MyServiceList from "../components/services/MyServiceList";
import { AuthContext } from "../context/auth-context";
import { getServicesById } from "../api/services";

const MyServices = () => {
  const { userId, token } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery(
    ["servicesData", userId],
    () => getServicesById(userId, token),
    { enabled: !!userId }
  );

  if (isLoading) {
    return <div className="center">Loading...</div>;
  }

  if (error) {
    return <div>An error has occurred: {error.message}</div>;
  }

  // Filters the data array to only show the services owned by authenticated user
  const userServices = data.filter((service) => service.userId === userId);


  return (
    <MyServiceList
      items={userServices || []}
    />
  );
};

export default MyServices;