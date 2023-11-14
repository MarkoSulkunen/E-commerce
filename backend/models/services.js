const pool = require('../db/pool');

const services = {
  findAll: () => new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if(err) {
        return reject(err);
      }
      connection.query('SELECT * FROM services', (err, result) => {
        connection.release();
        if(err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  }),

  findServicesById: (id) => new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if(err) {
        return reject(err);
      }
      connection.query('SELECT * FROM services WHERE id=?;', id, (err, result) => {
        connection.release();
        if(err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  }),

  create: (service) => new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if(err) {
        return reject(err);
      }

      const query = connection.query('INSERT INTO services SET ?;', service, (err, result) => {
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
    const deleteQuery = 'DELETE FROM services WHERE id=?;';
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

module.exports = services;
