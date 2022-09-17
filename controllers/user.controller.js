const fs = require("fs");
const FILENAME = "./data/user.json";

module.exports.getRandomUser = (req, res, next) => {
  fs.readFile(FILENAME, function (err, data) {
    if (err) {
      res.status(err.code).send({
        success: false,
        error: "Internal server error",
      });
    } else {
      const result = JSON.parse(data);
      const randomUser = result[Math.floor(Math.random() * result.length)];
      console.log(randomUser);
      res.status(200).send({
        success: true,
        message: "Random users found",
        data: randomUser,
      });
    }
  });
};

module.exports.getAllUsers = (req, res, next) => {
  fs.readFile(FILENAME, function (err, data) {
    if (err) {
      res.status(err.code).send({
        success: false,
        error: "Internal server error",
      });
    } else {
      const result = JSON.parse(data);
      res.status(200).send({
        success: true,
        message: "All users found",
        data: result,
      });
    }
  });
};

module.exports.saveAUser = (req, res, next) => {
  const newUser = req.body;
  const oldData = fs.readFileSync(FILENAME);
  let result = JSON.parse(oldData);
  result.push(newUser);
  result = JSON.stringify(result);
  fs.writeFile(FILENAME, result, (err) => {
    if (err) {
      res.status(err.code).send({
        success: false,
        error: "Internal server error",
      });
    } else {
      res.status(200).send({
        success: true,
        message: "Successfully user added",
      });
    }
  });
};

module.exports.updateAUser = (req, res, next) => {
  res.send("Update User Api found");
};

module.exports.updateMultiUser = (req, res, next) => {
  res.send("Bulk-update User Api found");
};

module.exports.deleteAUser = (req, res, next) => {
  res.send("Delete User Api found");
};
