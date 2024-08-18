const express = require("express");
const cors = require('cors'); 
const mangoose = require("mongoose");
const CarList = require("./Router/CarList");
const dotenv = require('dotenv');
const app = express();
app.use(express.json())
app.use(cors());
dotenv.config();

app.use("/api/cars",CarList);

mangoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        "Database Connected Successfully and Server is Listening on this port 3001"
      );
    });
  })
  .catch((err) => {
    console.log(err,"Connection Faild");
  });
