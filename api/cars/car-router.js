const express = require('express');
const db = require('../../data/db-config.js');

const router = express.Router();


router.get('/', (req, res, next) => {
    db('cars')
    .then(cars => {
        res.json(cars);
    })
    .catch(next)
})

router.get('/:id', (req, res, next)=> {
    const { id } = req.params
    db('cars').where({id}).first()
    .then(cars => {
        res.json(cars);
    })
    .catch(next);
})

router.post('/', async (req, res, next) => {
    const carData = req.body;
    db('cars').insert(carData)
    .then(ids => {
        return db('cars').where({id: ids[0]})
    })
    .then(newCarEntry => {
        res.status(201).json(newCarEntry);
    })
    .catch(next)
})

router.use((err, req, res, next) => {
    const env = process.env.NODE_ENV || 'development';
    const message = env === 'development'
      ? err.message
      : 'something bad happened';
    res.status(500).json(message);
  })

  


module.exports = router;