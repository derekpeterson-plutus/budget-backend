const express = require('express');
const transactions = require('../models/transactions');
const transactionsController = express.Router();

//INDEX (SHOW ALL TRANSACTIONS IN THE JSON DATA)
transactionsController.get('/', (req, res) => {
  res.json(transactions);
});

//SHOW A SPECIFIC TRANSACTION BASED ON THE INDEX
transactionsController.get('/:index', (req, res) => {
  const { index } = req.params;
  transactions[index]
    ? res.json(transactions[index])
    : res.status(404).send('Transaction can not be found');
});

//CREATE A NEW TRANSACTION
transactionsController.post('/', (req, res) => {
  transactions.push(req.body);
  res.send('Congratulation! A new transaction is added.');
});

//UPDATE TRANSACTION WITH THE INDEX
transactionsController.put('/:index', (req, res) => {
  const { index } = req.params;
  if (transactions[index]) {
    transactions[index] = req.body;
    res.json(req.body);
  } else {
    res.status(404).send('Sorry! Your transaction can not be updated!');
  }
});

//DELETE A SPECIFIC TRANSACTION BASED ON THE INDEX
transactionsController.delete('/:index', (req, res) => {
  const { index } = req.params;
  const deleteTransaction = transactions.splice(index, 1);
  transactions[index]
    ? res.json(deleteTransaction)
    : res.status(404).send('Sorry! Your transaction can not be deleted!');
});

module.exports = transactionsController;
