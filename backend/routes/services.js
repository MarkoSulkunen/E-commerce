const express = require('express');
const router = express.Router();

const verifyToken = require('../middleware/verifyToken');

const { createServices, deleteServices, getServices, getServicesById, editService } = require('../controllers/services');

router.get('/', getServices);
router.get('/:id', getServicesById);
router.use(verifyToken);
router.post('/', createServices);
router.delete('/:id', deleteServices);
router.patch("/:id", editService);

module.exports = router;
