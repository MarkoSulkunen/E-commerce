import React, { useContext, useState, useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";

import Card from "../card/ServiceCard";
import Button from "../button/Button";

import { AuthContext } from "../../context/auth-context";
import { Link } from "react-router-dom";

import "../../styles/ServiceItem.css";

const ServiceItem = (props) => {
  const auth = useContext(AuthContext);
  const queryClient = useQueryClient();

  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    if (auth.userId === props.userId) {
      setIsOwner(true);
    }
  }, [auth.userId, props.userId]);

  return (
    <>
      <Card className="service-item">
        <div className="service-item__info">
          <h3>{props.name}</h3>
          <div className="service-item__image">
            <img src={props.image} />
          </div>
          <h2>{props.service}</h2>
          <p>{props.info}</p>
          <p>{props.price}€</p>
          <p>Location: {props.location}</p>
          <h3>
            Contact:{" "}
            <Link
              to="#"
              onClick={(e) => {
                window.location.href = "mailto:" + props.contact;
                e.preventDefault();
              }}
            >
              {props.contact}
            </Link>
          </h3>
        </div>
        {auth.isLoggedIn && isOwner && (
          <div className="service-item__actions">
            <Button inverse >
              EDIT
            </Button>
            <Button danger >
              DELETE
            </Button>
          </div>
        )}
      </Card>
    </>
  );
};

export default ServiceItem;