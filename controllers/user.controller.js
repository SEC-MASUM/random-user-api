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
      const query = req.query;
      let { limit } = query;
      if (Object.keys(query).length === 0 && query.constructor === Object) {
        res.status(200).send({
          success: true,
          message: "Successfully user data found",
          data: result,
        });
      } else {
        res.status(200).send({
          success: true,
          message: "Successfully user data found",
          data: result.slice(0, limit),
        });
      }
      // console.log(limit, req.query);
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
        message: "Successfully added user",
      });
    }
  });
};

module.exports.updateAUser = (req, res, next) => {
  const { id } = req.params;
  const updatedUser = req.body;
  const oldData = fs.readFileSync(FILENAME);
  let result = JSON.parse(oldData);
  let isFoundId = false;
  result.map((user, index) => {
    if (user.id === Number.parseInt(id)) {
      isFoundId = true;
      result[index] = updatedUser;
    }
  });
  if (isFoundId) {
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
          message: "Successfully updated user",
        });
      }
    });
  } else {
    res.send({
      success: false,
      error: "User id not Found",
    });
  }
};

module.exports.updateMultiUser = (req, res, next) => {
  const body = req.body;
  const data = fs.readFileSync(FILENAME);
  let result = JSON.parse(data);
  body.forEach((element) => {
    let index = result.indexOf();
    result.find((user, index) => {
      if (element.id === user.id) {
        result[index] = element.data;
        result[index].id = element.id;
        return;
      }
    });
  });
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
        message: "Successfully updated multiple user",
      });
    }
  });
};

module.exports.deleteAUser = (req, res, next) => {
  const { id } = req.params;
  const data = fs.readFileSync(FILENAME);
  let result = JSON.parse(data);
  let isFoundId = false;
  let newResult = result.filter((user, index) => {
    if (user.id !== Number.parseInt(id)) {
      return true;
    } else {
      isFoundId = true;
      return false;
    }
  });
  if (isFoundId) {
    newResult = JSON.stringify(newResult);
    fs.writeFile(FILENAME, newResult, (err) => {
      if (err) {
        res.status(err.code).send({
          success: false,
          error: "Internal server error",
        });
      } else {
        res.status(200).send({
          success: true,
          message: "Successfully deleted user",
        });
      }
    });
  } else {
    res.send({
      success: false,
      error: "User id not Found",
    });
  }
};
