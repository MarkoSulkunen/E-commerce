import React from "react";

import "./ServiceCard.css";

const ServiceCard = (props) => {
  return (
    <div className={`servicecard ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default ServiceCard;