const express = require("express");
const app = express();
const port = 3001;
require('dotenv').config();
//b1rvziMCi08qfFh0
//middleware which parses the incoming request into json
app.use(express.json());
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Failed to connect to MongoDB...", err));


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
