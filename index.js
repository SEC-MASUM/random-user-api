const express = require("express");
const app = express();

const host = "localhost";
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running at  http://${host}:${port}`);
});
