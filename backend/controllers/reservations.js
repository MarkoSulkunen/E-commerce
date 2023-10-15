const Joi = require('joi');
const reservations = require('../models/reservations');

const getReservations = async (req, res) => {
  try {
    const response = await reservations.findAll();
    if(response) {
      res.json({response});
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
      const response = await Reservations.findReservationsById(id);
      if(response.length === 1) {
        res.send(response[0]);
      }
    } catch (err) {
      res.status(500).send("Something went wrong");
    }
  };
  
  const createReservation = async (req, res) => {
    const schema = Joi.object({
      email: Joi.string().min(1).required(),
      service: Joi.string().min(1).required(),
      date: Joi.string().min(1).required(),
  
    });
};

const deleteReservation = async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const response = await Reservations.deleteById(id);
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
    createReservation,
    deleteReservation
  };