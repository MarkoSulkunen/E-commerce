const Joi = require('joi');
const services = require('../models/services');

/*###############################################################################

 FUNCTION NAME: getServices

 DESCRIPTION: Retrieves all services from the database

################################################################################*/
const getServices = async (req, res) => {
  try {
    const response = await services.findAll();
    if(response) {
      res.send(response);
    }
    else{
      res.json(response || [])
    }
    
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};

/*###############################################################################

 FUNCTION NAME: getServicesById

 DESCRIPTION: Retrieves service by id from the database

################################################################################*/
const getServicesById = async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const response = await services.findServicesById(id);
      if (response && response.length === 1) {
        res.send(response[0]);
      } else {
        res.status(404).send("Service not found");
      }
    } catch (err) {
      res.status(500).send("Something went wrong");
    }
  };
  
/*###############################################################################

 FUNCTION NAME: createServices

 DESCRIPTION: Creates a new service in the database

################################################################################*/
  const createServices= async (req, res) => {
    const schema = Joi.object({
      service: Joi.string().required(),
      price: Joi.string().required(),
      info: Joi.string().required(),
      name: Joi.string(),
      contact: Joi.string(),
      location: Joi.string(),
      image: Joi.string(),
      userId: Joi.string().required(),
    });

    // Validating service data agaist Joi schema
    const { error } = schema.validate(req.body);
    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }

    // New service object from request body
    const service = {
      service: req.body.service,
      price: req.body.price,
      info: req.body.info,
      name: req.body.name,
      contact: req.body.contact,
      location: req.body.location,
      image: req.body.image,
      userId: req.body.userId,
    };
  
    try {
      // Creates new service in the database
      const response = await services.create(service);
      
      // If created successfully, send product object
      if (response) {
        service.id = response.insertId;
        res.status(201).send(service);
      }
      // Log errors
    } catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong");
    }
  };

/*###############################################################################

 FUNCTION NAME: deleteServices

 DESCRIPTION: Deletes a service by id from the database

################################################################################*/
const deleteServices = async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const response = await services.deleteById(id);
      if(response) {
        res.status(200).json('Service deleted');
      }
    } catch (err) {
      res.status(500).send("Something went wrong");
    }
  };

/*###############################################################################

 FUNCTION NAME: editService

 DESCRIPTION: Edits a service by id in the database

##################################################################################*/
  const editService = async (req, res) => {
    console.log("editService function called");
    console.log(
      "Request received at editService endpoint with params:",
      req.params
    );
    console.log("Request body:", req.body);
  
    // Joi validation schema for the request body
    const schema = Joi.object({
      service: Joi.string(),
      price: Joi.string(),
      info: Joi.string(),
      name: Joi.string(),
      contact: Joi.string(),
      location: Joi.string(),
      image: Joi.string(),
      userId: Joi.string(),
    });
  
    // Validating request body against the Joi schema
    const { error } = schema.validate(req.body);
    if (error) {
      console.log("Validation error:", error.details[0].message);
      res.status(400).send(error.details[0].message);
      return;
    }
  
    const id = parseInt(req.params.id);
    const serviceData = {
      service: req.body.service,
      price: String(req.body.price),
      info: req.body.info,
      name: req.body.name,
      contact: req.body.contact,
      location: req.body.contact,
      image: req.body.image,
      userId: req.body.userId,
    };
  
    try {
      // Updates the service in the database
      const result = await services.updateById(id, serviceData);
      if (result.affectedRows === 0) {
        console.log("Service not found");
        res.status(404).send("Service not found");
        return;
      }
      console.log("Service updated");
      res.status(200).send("Service updated");
    } catch (err) {
      console.log("Error:", err);
      res.status(500).send("Something went wrong");
    }
  };
  

module.exports = {

    getServices,
    getServicesById,
    createServices,
    deleteServices,
    editService
  };