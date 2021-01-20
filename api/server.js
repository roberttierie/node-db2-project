const express = require('express');
const helmet = require('helmet');

const carRouter = require('./cars/car-router');
const server = express();

server.use(express.json());

server.use('/api/cars/', carRouter)

module.exports = server;