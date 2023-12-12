import React, { useContext, useState, useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";

import Card from "../card/ServiceCard";
import Button from "../button/Button";

import { AuthContext } from "../../context/auth-context";
import { Link } from "react-router-dom";
import Modal from "../modal/Modal";

import "../../styles/ServiceComponents.css";
import { deleteServices, editService } from "../../api/services";

const ServiceItem = (props) => {
  const auth = useContext(AuthContext);
  const queryClient = useQueryClient();

  const [isOwner, setIsOwner] = useState(false);

  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedService, setEditedService] = useState({
    service: props.service,
    price: props.price,
    info: props.info,
    image: props.image,
    location: props.location,
  });

  // Setting isOwner state variable based on the authentication user id and the service user id
  useEffect(() => {
    if (auth.userId === props.userId) {
      setIsOwner(true);
    }
  }, [auth.userId, props.userId]);

  const showConfirmationHandler = () => setShowConfirmationModal(true);
  const cancelConfirmationHandler = () => setShowConfirmationModal(false);

  const showEditHandler = () => setShowEditModal(true);
  const cancelEditHandler = () => setShowEditModal(false);

  /*###############################################################################

   FUNCTION NAME: onEditChangeHandler

   DESCRIPTION: Sets the editedService state variable to the input values.

  ################################################################################*/
  const onEditChangeHandler = (event) => {
    setEditedService({
      ...editedService,
      [event.target.name]: event.target.value,
    });
  };

  // Mutation function for editing a service
  const editServiceMutation = useMutation(editService, {
    onSuccess: (data) => {
      console.log(data);
      console.log("editServiceMutation success");
      queryClient.invalidateQueries("services");
      setShowEditModal(false);
      window.location.reload();
    },
    onError: (error) => {
      console.log(error);
      console.log(error.message);
      console.log("editServiceMutation error");
      console.log(error.response);
      console.log(error.request);
      console.log(error.config);
      queryClient.invalidateQueries("services");
      window.location.reload();
    },
  });

  // Mutation function for deleting a service
  const deleteServiceMutation = useMutation(deleteServices, {
    onSuccess: (data) => {
      console.log(data);
      console.log("success");
      queryClient.invalidateQueries("services");
      window.location.reload();
    },
    onError: (error) => {
      console.log(error.message);
      console.log("error");
      queryClient.invalidateQueries("services");
      window.location.reload();
    },
  });

  /*###############################################################################

   FUNCTION NAME: deleteConfirmedHandler

   DESCRIPTION: Sends a mutation to the server to delete a service from the database.

  ################################################################################*/
  const deleteConfirmedHandler = () => {
    setShowConfirmationModal(false);
    deleteServiceMutation.mutate(
      { id: props.id, token: auth.token },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
  };

  /*###############################################################################

   FUNCTION NAME: editConfirmedHandler

   DESCRIPTION: Sends a mutation to the server to edit a service in the database.

  ################################################################################*/
  const editConfirmedHandler = () => {
    console.log("editConfirmedHandler called");
    setShowEditModal(false);
    editServiceMutation.mutate(
      { id: props.id, token: auth.token, editedService },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
  };

  return (
    <>
      <Modal
        show={showConfirmationModal}
        header="Are you sure?"
        footerClass="place-item__modal-actions"
        footer={
          <React.Fragment>
            <Button inverse onClick={cancelConfirmationHandler}>
              CANCEL
            </Button>
            <Button danger onClick={deleteConfirmedHandler}>
              DELETE
            </Button>
          </React.Fragment>
        }
      >
        <p>Do you really want to delete this service?</p>
      </Modal>

      <Modal
        show={showEditModal}
        header="Edit Service"
        footerClass="place-item__modal-actions"
        footer={
          <React.Fragment>
            <Button inverse onClick={cancelEditHandler}>
              CANCEL
            </Button>
            <Button onClick={editConfirmedHandler}>SAVE</Button>
          </React.Fragment>
        }
      >
        <form>
          <div className="form-control">
            <label htmlFor="service">Service</label>
            <input
              type="text"
              name="service"
              value={editedService.service}
              onChange={onEditChangeHandler}
            />
          </div>
          <div className="form-control">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              name="price"
              min="0.01"
              step="0.01"
              value={editedService.price}
              onChange={onEditChangeHandler}
            />
          </div>
          <div className="form-control">
            <label htmlFor="info">Info</label>
            <textarea
              name="info"
              rows="5"
              value={editedService.info}
              onChange={onEditChangeHandler}
            />
          </div>
          <div className="form-control">
            <label htmlFor="image">Image</label>
            <input
              type="text"
              name="image"
              value={editedService.image}
              onChange={onEditChangeHandler}
            />
          </div>
        </form>
      </Modal>
      <Card className="service-item">
        <div className="service-item__info">
          <div className="service-item__image">
            <img src={props.image} />
          </div>
          <h2>{props.service}</h2>
          <p>{props.info}</p>
          <p className="price">{props.price}€</p>
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
            <Button inverse onClick={showEditHandler}>
              EDIT
            </Button>
            <Button danger onClick={showConfirmationHandler}>
              DELETE
            </Button>
          </div>
        )}
      </Card>
    </>
  );
};

export default ServiceItem;
