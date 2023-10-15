const pool = require('../db/pool');

const reservations = {
  findAll: () => new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if(err) {
        return reject(err);
      }
      connection.query('SELECT * FROM reservations', (err, result) => {
        connection.release();
        if(err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  }),

  findreservationById: (id) => new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if(err) {
        return reject(err);
      }
      connection.query('SELECT * FROM reservations WHERE id=?;', id, (err, result) => {
        connection.release();
        if(err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  }),

  create: (reservation) => new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if(err) {
        return reject(err);
      }

      const query = connection.query('INSERT INTO reservations SET ?;', reservation, (err, result) => {
        connection.release();
        if(err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }),

  deleteById: (id) => new Promise((resolve, reject) => {
    const deleteQuery = 'DELETE FROM reservations WHERE id=?;';
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
  })
};

module.exports = reservations;
