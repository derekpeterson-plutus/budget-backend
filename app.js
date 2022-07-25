const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

//IMPORT CONTROLLER
const transactionsController = require('./controllers/transactionsController');

//PARSE JSON BODY
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World! Welcome to the Backend Budget App!');
});

app.use('/transactions', transactionsController);

app.use('/*', (req, res) => {
  res.status(404).send('Oop 404 Error! Wrong URL! Page not found!');
});

module.exports = app;
