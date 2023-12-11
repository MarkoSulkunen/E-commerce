const bcrypt = require('bcryptjs');
const { v4 } = require('uuid');
const jwt = require('jsonwebtoken');

const users = require('../models/users');

/*###############################################################################

 FUNCTION NAME: signUpUser

 DESCRIPTION: Handles the sign up process for a new user.
     This function hashesh the users password using bcrypt,
     checks if user exists in the database, creates a new user
     and returns a JWT token upon successful registration.

################################################################################*/
const signUpUser = async (req, res) => {
  const {email, password} = req.body;

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    return res.status(500).send('Could not create user, try again please');
  }

  const newUser = {
    id: v4(),
    email,
    password: hashedPassword
  };

  try {
    const exist = await users.findByEmail(newUser.email);
    if(exist.length > 0) {
      return res.status(422).send('Could create user, user exists');
    }

    const result = await users.create(newUser);
    if(!result) {
      return res.status(500).send('Could not create user, try again please');
    }

    const token = jwt.sign(
      {
        id: newUser.id,
        email: newUser.email
      },
      process.env.JWT_KEY,
      { expiresIn: '1h' }
    );

    res.status(201).json({
      id: newUser.id,
      email: newUser.email,
      token
    })

  } catch (err) {
    return res.status(500).send('Could not create user, try again please');
  }
};
/*###############################################################################

 FUNCTION NAME: loginUser

 DESCRIPTION:   Handles the login process for an existing user.
     Function checks if the user exists in the database,
     verifies password using bcrypt and returns a JWT token upon
     successful authentication.

################################################################################*/
const loginUser = async (req, res) => {
  const {email, password} = req.body;
  
  let identifiedUser;
  try {
    const result = await users.findByEmail(email);
    if(!result[0]) {
      return res.status(401).send('No user found - Check your credentials');
    }
    identifiedUser = result[0];
  } catch (err) {
    return res.status(500).send('Something went wrong');
  }

  let isValidPassword;
  try {
    isValidPassword = await bcrypt.compare(password, identifiedUser.password);
    if(!isValidPassword) {
      return res.status(401).send('No user found - Check your credentials');
    }
  } catch (err) {
    return res.status(500).send('Something went wrong');
  }

  try {
    const token = jwt.sign(
      {
        id: identifiedUser.id,
        email: identifiedUser.email
      },
      process.env.JWT_KEY,
      { expiresIn: '1h' }
    );

    res.status(201).json({
      id: identifiedUser.id,
      email: identifiedUser.email,
      token
    })
  } catch (err) {
    return res.status(500).send('Something went wrong');
  }


};
/*###############################################################################

 FUNCTION NAME: getUserById

 DESCRIPTION: Retrieves user by id from the database

################################################################################*/
const getUserById = async (req, res) => {
  try {
    const id = (req.params.id);
    const response = await users.findUserById(id);
    if(response.length === 1) {
      res.send(response[0]);
    }else {
      res.status(404).json({ message: `User with ID ${id} not found` });
    }
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};
/*###############################################################################

 FUNCTION NAME: getUsers

 DESCRIPTION: Retrieves all users from the database

################################################################################*/
const getUsers = async (req, res) => {
  try {
    const response = await users.findAll();
    if(response) {
      res.send(response);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};
/*###############################################################################

 FUNCTION NAME: deleteUser

 DESCRIPTION: Deletes user by id from the database

################################################################################*/
const deleteUser = async (req, res) => {
  try {
    const id = (req.params.id);
    const response = await users.deleteById(id);
    if(response) {
      res.status(200).json('User deleted');
    }
  } catch (err) {
    res.status(500).send("Something went wrong");
  }
};

module.exports = {
  loginUser,
  signUpUser,
  getUserById,
  getUsers,
  deleteUser,
}
