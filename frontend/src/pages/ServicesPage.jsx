import React, { useState } from "react";
import "../styles/global.css";
import ServiceList from "../components/services/ServiceList";
import Button from '../components/button/Button';

const ServicesPage = () => {
  // State to track the selected service name
  const [selectedService, setSelectedService] = useState(null);

  // Function to handle button click and set the selected service name
  const handleButtonClick = (serviceName) => {
    setSelectedService(serviceName);
  };

  return (
    <div>
      <h1 className="pageTitle">Services</h1>
      <p></p>
      <div>
        <Button onClick={() => handleButtonClick("dog sitter")}>Find dog sitter</Button>
        <Button onClick={() => handleButtonClick("dog walker")}>Find dog walker</Button>
        <Button onClick={() => handleButtonClick("dog groomer")}>Find dog groomer</Button>
        <Button onClick={() => handleButtonClick("dog boarder")}>Find dog boarder</Button>
      </div>

      {selectedService && (
        <ServiceList items={[]} selectedService={selectedService} hideSearchBar={true} />
      )}
    </div>
  );
};

export default ServicesPage;