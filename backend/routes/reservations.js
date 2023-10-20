const express = require('express');
const router = express.Router();

const verifyToken = require('../middleware/verifyToken');

const { createReservations, deleteReservations, getReservations, getReservationsById } = require('../controllers/reservations');

router.get('/', getReservations);
//router.get('/:id', getReservationsById);
router.use(verifyToken);
router.post('/', createReservations);
//router.delete('/:id', deleteReservations);

module.exports = router;
