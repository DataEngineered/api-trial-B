const express = require('express');
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv');
dotenv.config({path: '.env'});

const PORT = process.env.PORT;
const app = express();

app.use(userRoutes);

app.listen(PORT, () => {
  console.log(`API B server is running on port ${PORT}`);
});