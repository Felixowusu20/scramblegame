const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const wordRoutes = require('./routes/wordroutes')

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/words' , wordRoutes)

app.get('/', (req, res) => {
  res.send(`✅ Server is running on port ${PORT}`);
});

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('✅ MongoDB connected successfully');
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection failed:', err.message);
  });
