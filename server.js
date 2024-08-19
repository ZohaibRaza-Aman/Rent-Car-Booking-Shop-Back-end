const express = require("express");
const cors = require('cors'); 
const mongoose = require("mongoose");
const CarList = require("./Router/CarList");
const dotenv = require('dotenv');
const app = express(); 

dotenv.config();

app.use(express.json())
app.use(cors());

app.use("/api/cars",CarList);

mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  const PORT = process.env.PORT || 3001; // Fallback to 3000 if PORT is not defined in .env
  app.listen(PORT, () => {
    console.log(`Database Connected Successfully and Server is Listening on port ${PORT}`);
  });
})
  .catch((err) => {
    console.log(err,"Connection Faild");
  });
