const router = require('express').Router();
const carsController = require('../controllers/cars');

router.get('/', function (req, res) {
  res.status(200).send({status: 'OK'});
});

router.get('/cars', carsController);

module.exports = router;
