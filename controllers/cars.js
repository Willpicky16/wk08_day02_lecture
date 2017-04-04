const bluebird = require('bluebird');
const pgp = require('pg-promise')({promiseLib: bluebird});
const dbCredentials = require('../db_config.js');
const db = pgp(dbCredentials);

function selectAllCars (req, res) {
  db.query('SELECT * FROM cars')
    .then(function (rows) {
      res.status(200).json({cars: rows});
    })
    .catch(function (err) {
      res.status(500).send({err: err});
    })
}

module.exports = selectAllCars;
