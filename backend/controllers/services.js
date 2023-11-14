const Joi = require('joi');
const services = require('../models/services');

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
    const { error } = schema.validate(req.body);
    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }
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
      const response = await services.create(service);

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

module.exports = {

    getServices,
    getServicesById,
    createServices,
    deleteServices
  };