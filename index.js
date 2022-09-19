const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const userRoutes = require("./routes/v1/user.route");

const host = "localhost";
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/v1/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Random user api server is running");
});

app.all("*", (req, res) => {
  res.send("No route found");
});

app.listen(PORT, () => {
  console.log(`Server is running at  http://${host}:${PORT}`);
});
