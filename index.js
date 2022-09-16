const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const host = "localhost";
const port = 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.all("*", (req, res) => {
  res.send("No route found");
});

app.listen(port, () => {
  console.log(`Server is running at  http://${host}:${port}`);
});
