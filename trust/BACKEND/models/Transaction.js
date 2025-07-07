const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  cardNumber: { type: String, required: true },
  amount: { type: Number, required: true },
  recipient: { type: String, required: true },
  note: { type: String },
  timestamp: { type: Date, default: Date.now },
  status: { type: String, enum: ['success', 'failed', 'pending'], default: 'success' }
});

module.exports = mongoose.model('Transaction', transactionSchema);
