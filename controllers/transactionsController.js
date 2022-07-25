const express = require('express');
const transactionsArray = require('../models/transactions');
const transactionsController = express.Router();

//SHOW A SPECIFIC TRANSACTION BASED ON THE INDEX
transactionsController.get('/:id', (req, res) => {
  let { id } = req.params;
  transactionsArray[id]
    ? res.json(transactionsArray[id])
    : res.status(404).send('Sorry! Your transaction can not be found');
});

//INDEX (SHOW ALL TRANSACTIONS IN THE JSON DATA)
transactionsController.get('/', (req, res) => {
  res.json(transactionsArray);
});

//CREATE A NEW TRANSACTION
transactionsController.post('/', (req, res) => {
  transactionsArray.push(req.body);
  res.send('Congratulation! Your transaction is successfully added.');
});

//UPDATE A TRANSACTION WITH THE ID
transactionsController.put('/:id', (req, res) => {
  let { id } = req.params;
  if (transactionsArray[id]) {
    transactionsArray[id] = req.body;
    res.json(req.body);
  } else {
    res.status(404).send('Sorry! Your transaction can not be updated!');
  }
});

//DELETE A SPECIFIC TRANSACTION BASED ON THE ID
transactionsController.delete('/:id', (req, res) => {
  let { id } = req.params;
  let deleteTransaction = transactionsArray.splice(id, 1);
  transactionsArray[id]
    ? res.json(deleteTransaction)
    : res.status(404).send('Sorry! Your transaction can not be deleted!');
});

module.exports = transactionsController;
