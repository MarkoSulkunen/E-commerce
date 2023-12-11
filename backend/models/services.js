const pool = require('../db/pool');

const services = {
/*###############################################################################

 METHOD NAME: findAll

 DESCRIPTION: Retrieves all services from the database

##################################################################################*/
  findAll: () => new Promise((resolve, reject) => {
    // Get connection from connection pool
    pool.getConnection((err, connection) => {
      if(err) {
        return reject(err);
      }
      // Query to select all services from services table
      connection.query('SELECT * FROM services', (err, result) => {
        connection.release();
        if(err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  }),

/*###############################################################################

 METHOD NAME: findServicesById

 DESCRIPTION: Retrieves service by id from the database

##################################################################################*/
  findServicesById: (id) => new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if(err) {
        return reject(err);
      }
      // Query to select a service by id from services table
      connection.query('SELECT * FROM services WHERE id=?;', id, (err, result) => {
        connection.release();
        if(err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  }),

/*###############################################################################

 METHOD NAME: create

 DESCRIPTION: Creates a new service in the database

##################################################################################*/
  create: (service) => new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if(err) {
        return reject(err);
      }
      // Query to insert a service into services table
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

/*###############################################################################

 METHOD NAME: deleteById

 DESCRIPTION: Deletes a service by id from the database

##################################################################################*/
  deleteById: (id) => new Promise((resolve, reject) => {
    const deleteQuery = 'DELETE FROM services WHERE id=?;';
    pool.getConnection((err, connection) => {
      if(err) {
        return reject(err);
      }
      // Query to delete a service by id from the services table
      connection.query(deleteQuery, id, (err, result) => {
        connection.release();
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  }),

/*###############################################################################

 METHOD NAME: updateById

 DESCRIPTION: Edits a service by id in the database

##################################################################################*/
updateById: (id, service) =>
new Promise((resolve, reject) => {
  console.log(
    "updateById function called with id:",
    id,
    "and data:",
    service
  );
  pool.getConnection((err, connection) => {
    if (err) {
      return reject(err);
    }
    // Query to update a service by id in services table
    const updateQuery =
      "UPDATE services SET service=?, price=?, info=?, image=? WHERE id=?;";
    const values = [
      service.service,
      service.price,
      service.info,
      service.image,
      id,
    ];
    connection.query(updateQuery, values, (err, result) => {
      connection.release();
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
}),
};

module.exports = services;
