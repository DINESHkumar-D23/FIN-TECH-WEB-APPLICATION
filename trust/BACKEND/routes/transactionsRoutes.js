const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

// Create a new transaction
router.post('/send', async (req, res) => {
  try {
    const { userId, cardNumber, amount, recipient, note } = req.body;

    const newTransaction = new Transaction({
      userId,
      cardNumber,
      amount,
      recipient,
      note
    });

    await newTransaction.save();
    res.status(201).json({ message: 'Transaction successful', data: newTransaction });
  } catch (err) {
    res.status(500).json({ message: 'Transaction failed', error: err.message });
  }
});

module.exports = router;
