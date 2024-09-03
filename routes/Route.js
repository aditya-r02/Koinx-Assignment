const express = require('express');
const router = express.Router();

const {fetchTransactions, fetchExpenses} = require('../controllers/Transaction');

router.get('/fetchtransactions', fetchTransactions);
router.get('/fetchexpenses', fetchExpenses);

module.exports = router;
