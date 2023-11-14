const express = require('express');
const router = express.Router();

const verifyToken = require('../middleware/verifyToken');

const { createServices, deleteServices, getServices, getServicesById } = require('../controllers/services');

router.get('/', getServices);
//router.get('/:id', getServicesById);
router.use(verifyToken);
router.post('/', createServices);
//router.delete('/:id', deleteServices);

module.exports = router;
