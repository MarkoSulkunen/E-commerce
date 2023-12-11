const express = require('express');
const router = express.Router();

const { loginUser, signUpUser, getUserById, getUsers, deleteUser } = require('../controllers/users');


router.post('/signup', signUpUser);
router.post('/login', loginUser);
router.get('/:id', getUserById);
router.get('/', getUsers);

router.delete('/:id', deleteUser);


module.exports = router;