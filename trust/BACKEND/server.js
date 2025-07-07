const express = require('express');
const connectDB = require('./db');
const cors = require('cors');
const mongoose = require('mongoose');

const userRoutes = require('./routes/userRoutes');
const transactionRoutes = require('./routes/transactionsRoutes');
const profileRoutes = require('./routes/profileRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();
mongoose.set('debug', true); 

app.use(cors());
app.use(express.json());

app.use('/api', userRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/profile', profileRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
