import { useRef, useContext } from "react";
import { useMutation, useQueryClient, useQuery } from "react-query";
import { useNavigate } from 'react-router-dom';

import "../styles/AddService.css";

import Input from "../components/input/Input";
import Button from "../components/button/Button";
import { AuthContext } from "../context/auth-context";

import { createService } from "../api/services";

import { getUserById } from "../api/users";

const AddService = () => {
  // Creating refs to acces input values
  const serviceRef = useRef();
  const priceRef = useRef();
  const infoRef = useRef();
  const imageRef = useRef();
  const locationRef = useRef();

  // Accessing authentication and user data from the AuthContext
  const auth = useContext(AuthContext);
  const { userId } = useContext(AuthContext);

  const navigate = useNavigate();

  // Creating a query client to make queries to the server
  const queryClient = useQueryClient();

  // Fetching user data
  const { isLoading, error, data } = useQuery(
    ["usersData", userId],
    () => getUserById(userId),
    { enabled: !!userId }
  );

  console.log("isLoading:", isLoading);
  console.log("error:", error);
  console.log("user data:", data);

  // Creating mutation to add a service to the database
  const createServiceMutation = useMutation({
    mutationFn: createService,
    onSuccess: () => {
      queryClient.invalidateQueries("services");
      navigate("/");
    },
  });

  /*###############################################################################

   FUNCTION NAME: serviceSubmitHandler

   DESCRIPTION: Gets input values from refs and sends a mutation to the server
                to add service to the database.
                Called when user submits form to add a new service.

  ################################################################################*/
  const serviceSubmitHandler = (event) => {
    event.preventDefault();
    createServiceMutation.mutate({
      service: serviceRef.current.value,
      price: priceRef.current.value,
      info: infoRef.current.value,
      location: locationRef.current.value,
      name: data?.name,
      contact: data?.email,
      image: imageRef.current.value,
      token: auth.token,
      userId: auth.userId,
    });
  };

  return (
    <form className="contact-container" onSubmit={serviceSubmitHandler}>
      <Input ref={serviceRef} type="text" label="Service" id="service-name" />
      <Input ref={priceRef} type="text" label="Price" id="service-price" />
      <Input ref={infoRef} type="text" label="Info" id="service-info" />
      <Input
        ref={locationRef}
        type="text"
        label="Location"
        id="service-location"
      />
      <Input ref={imageRef} type="text" label="Image Link" id="service-image" />
      <Button type="submit">Add Service</Button>
    </form>
  );
};

export default AddService;