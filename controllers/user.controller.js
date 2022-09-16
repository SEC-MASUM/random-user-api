module.exports.getRandomUser = (req, res, next) => {
  res.send("Random User Api found");
};

module.exports.getAllUsers = (req, res, next) => {
  res.send("All User Api found");
};

module.exports.saveAUser = (req, res, next) => {
  res.send("Save User Api found");
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
