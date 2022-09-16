const express = require("express");
const userControllers = require("../../controllers/user.controller.js");
const router = express.Router();

router.route("/random").get(userControllers.getRandomUser);

router.route("/all").get(userControllers.getAllUsers);

router.route("/save").post(userControllers.saveAUser);

router.route("/update").patch(userControllers.updateAUser);

router.route("/bulk-update").patch(userControllers.updateMultiUser);

router.route("/delete").delete(userControllers.deleteAUser);

module.exports = router;
