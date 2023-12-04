import React from "react";
import "../styles/global.css";
import Services from "../components/services/Services";
import Button from '../components/button/Button';
const ServicesPage = () => {

  return (
    <div>

        <h1 className="pageTitle">Services</h1>
        <p></p>
        <div>
            <Button>Find dog sitter</Button>
            <Button>Find dog walker</Button>
            <Button>Find dog groomer</Button>
            <Button>Find dog boarder</Button>
      </div>
      </div>

  );
};

export default ServicesPage;