const Joi = require('joi');
const reservations = require('../models/reservations');

const getReservations = async (req, res) => {
  try {
    const response = await reservations.findAll();
    if(response) {
      res.send(response);
    }
    else{
        res.json([]); 
    }
    
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};

const getReservationById = async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const response = await reservations.findReservationsById(id);
      if(response.length === 1) {
        res.send(response[0]);
      }
    } catch (err) {
      res.status(500).send("Something went wrong");
    }
  };
  
  const createReservations = async (req, res) => {
    const schema = Joi.object({
      email: Joi.string().min(1).required(),
      service: Joi.string().min(1).required(),
      date: Joi.string().min(1).required(),
  
    });
    const { error } = schema.validate(req.body);
    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }
    const reservation = {
      email: req.body.email,
      price: req.body.service,
      info: req.body.date,
    };
  
    try {
      const response = await products.create(reservation);

      if (response) {
        reservation.id = response.insertId;
        res.status(201).send(reservation);
      }
      // Log errors
    } catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong");
    }
  };

const deleteReservation = async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const response = await reservations.deleteById(id);
      if(response) {
        res.status(200).json('Reservation deleted');
      }
    } catch (err) {
      res.status(500).send("Something went wrong");
    }
  };

module.exports = {

    getReservations,
    getReservationById,
    createReservations,
    deleteReservation
  };