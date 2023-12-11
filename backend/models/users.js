const pool = require('../db/pool');

const users = {
/*###############################################################################

 METHOD NAME: create

 DESCRIPTION: Creates a new user in the database

##################################################################################*/
  create: (user) => new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if(err) {
        return reject(err);
      }

      connection.query('INSERT INTO users SET ?;', user, (err, result) => {
        connection.release();
        if(err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }),
/*###############################################################################

 METHOD NAME: findByEmail

 DESCRIPTION: Retrieves user by email from the database

##################################################################################*/
  findByEmail: (email) => new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if(err) {
        return reject(err);
      }
      connection.query('SELECT * FROM users WHERE email LIKE ?;', email, (err, result) => {
        connection.release();
        if(err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  }),
/*###############################################################################

 METHOD NAME: findUserById

 DESCRIPTION: Retrieves user by id from the database

##################################################################################*/
  findUserById: (id) => new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        return reject(err);
      }
      connection.query('SELECT * FROM users WHERE id=?;', id,  (err, result) => {
        connection.release();
        if(err) {
          return reject(err);
        }
        console.log(result);
        resolve(result);
      });
    });
  }),
/*###############################################################################

 METHOD NAME: findAll

 DESCRIPTION: Fetches all users from the database

##################################################################################*/
  findAll: () => new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if(err) {
        return reject(err);
      }
      connection.query('SELECT * FROM users', (err, result) => {
        connection.release();
        if(err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  }),
/*###############################################################################

 METHOD NAME: deleteById

 DESCRIPTION: Deletes user by id from the database

##################################################################################*/
  deleteById: (id) => new Promise((resolve, reject) => {
    const deleteQuery = 'DELETE FROM users WHERE id=?;';
    pool.getConnection((err, connection) => {
      if(err) {
        return reject(err);
      }
      connection.query(deleteQuery, id, (err, result) => {
        connection.release();
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  }),
};

module.exports = users;
